/*
    expansive.es - Configuration for exp-js

    Process JavaScript files. This extension will render scripts and minify as required.
    It can be used to extract inline scripts and onclick scripts into an external script file if using CSP.
    It will also inline small scripts from external files.
 */
Expansive.load({

    services: {
        name:       'js',
        compress:   true,
        dotmin:     true,
        extract:    false,
        files:      [ ],
        minify:     false,
        options:    '--mangle --compress dead_code=true,conditionals=true,booleans=true,unused=true,if_return=true,join_vars=true,drop_console=true',
        usemap:     true,
        usemin:     true,

        transforms: [{
            mappings: {
                'js',
                'min.js',
                'min.map',
                'min.js.map'
            },

            init: function(transform) {
                let service = transform.service
                if (service.usemap) {
                    service.usemin ||= true
                }
                if (service.files) {
                    if (!(service.files is Array)) {
                        service.files = [ service.files ]
                    }
                    for each (let file in service.files) {
                        expansive.addItems('scripts', file)
                    }
                }
                if (!service.extract) {
                    expansive.transforms['js-extract'].enable = false
                }
            },

            /*
                Resolve the scripts taking account of .min and .map extensions
             */
            resolve: function(path: Path, transform): Path? {
                let service = transform.service
                let vfile = directories.contents.join(path)
                if (vfile.endsWith('.min.js')) {
                    let base = vfile.trimEnd('.min.js')
                    if (service.usemin && !(service.minify && base.joinExt('js', true).exists)) {
                        if (service.usemap) {
                            if (base.joinExt('min.map', true).exists || base.joinExt('min.js.map', true).exists) {
                                return terminal(path)
                            }
                        } else {
                            return terminal(path)
                        }
                    }
                } else if (vfile.endsWith('.min.map') || vfile.endsWith('.min.js.map')) {
                    if (service.usemin) {
                        let base = vfile.trimEnd('.min.map').trimEnd('.min.js.map')
                        if (service.usemap && !(service.minify && base.joinExt('js', true).exists)) {
                            if (base.joinExt('min.js', true).exists) {
                                return terminal(path)
                            }
                        }
                    }
                } else {
                    let minified = vfile.replaceExt('min.js')
                    /*
                        Minify if required, or a suitable minfied version does not exist or !usemin
                     */
                    if (service.minify || !(minified.exists && service.usemin && (!service.usemap ||
                            (vfile.replaceExt('min.map').exists || vfile.replaceExt('min.js.map').exists)))) {
                        if (service.minify && service.dotmin) {
                            return terminal(path.trimExt().joinExt('min.js', true))
                        }
                        return terminal(path)
                    }
                }
                return null
            },

        }, {
            /*
                Minify scripts not already minified
             */
            name:       'minify',
            mappings:   'js',

            init: function(transform) {
                let service = transform.service
                let cmd = Cmd.locate('uglifyjs')
                if (!cmd) {
                    trace('Install', 'Uglify')
                    Cmd.run('npm install -g uglify-js')
                    cmd = Cmd.locate('uglifyjs')
                    if (!cmd) {
                        throw new Error('Cannot find uglifyjs')
                    }
                } else if (!service.minify) {
                    transform.enable = false
                } else {
                    if (service.options) {
                        cmd += ' ' + service.options
                    }
                    transform.cmd = cmd
                }
            },

            render: function (contents, meta, transform) {
                trace('Minify', meta.source)
                let cmd = transform.cmd
                try {
                    if (transform.service.usemap) {
                        let mapFile = meta.dest.replaceExt('map')
                        mapFile.dirname.makeDir()
                        cmd += ' --source-map ' + mapFile
                        contents = runFile(cmd, contents, meta)
                        let map = mapFile.readJSON()
                        map.sources = [ meta.dest ]
                        mapFile.write(serialize(map))
                    } else {
                        contents = run(cmd, contents)
                    }
                } catch (err) {
                    //  Continue
                }
                return contents
            },

        }, {
            name:  'render',
            mappings: {
                'js',
                'min.js'
            },

            init: function(transform) {
                let service = transform.service
                service.hash = {}

                /*
                    Render Scripts is based on 'collections.scripts' 
                 */
                global.renderScripts = function(filter = null, extras = []) {
                    let collections = expansive.collections
                    if (!collections.scripts && !expansive.scripts) {
                        return
                    }
                    function mapScript(script): String {
                        let contents = expansive.directories.contents
                        let service = expansive.services.js
                        if (script.startsWith('http')) {
                            return script
                        }
                        if ((script = expansive.getDestPath(script)) == null) {
                            return script
                        }
                        let vfile = contents.join(script)
                        let base = vfile.trimEnd('.min.js').trimEnd('.js')
                        let map = base.joinExt('min.map', true).exists || base.joinExt('js.map', true).exists ||
                            base.joinExt('.min.js.map', true).exists
                        if (vfile.endsWith('min.js')) {
                            if ((service.minify || service.usemin)) {
                                return script
                            }
                        } else {
                            let minified = vfile.replaceExt('min.js').exists
                            let map = vfile.replaceExt('min.map').exists || vfile.replaceExt('js.map').exists ||
                                vfile.replaceExt('.min.js.map').exists
                            if (service.minify || !minified || !(service.usemap && map)) {
                                if (service.minify && service.dotmin) {
                                    return script.replaceExt('min.js')
                                } else {
                                    return script
                                }
                            }
                        }
                        return script
                    }

                    /*
                        Pages have different scripts and so must compute script list per page.
                        This is hashed and saved.
                     */
                    let contents = expansive.directories.contents
                    let service = expansive.services.js

                    if (!service.hash[collections.scripts]) {
                        let list = []
                        for each (let item in collections.scripts) {
                            let files = contents.files(item.item, {
                                contents: true, directories: false, relative: true
                            })
                            if (files.length == 0) {
                                files = [item.item]
                            }
                            for each (let file in files) {
                                file = mapScript(file)
                                if (file) {
                                    list.push({item: file, modifiers: item.modifiers})
                                }
                            }
                        }
                        service.hash[collections.scripts] = list
                    }
                    for each (item in service.hash[collections.scripts]) {
                        let script = item.item
                        let modifiers = item.modifiers ? (' ' + item.modifiers) : ''

                        if (filter && !Path(script).glob(filter)) {
                            continue
                        }
                        //  Inline scripts (can't inline *.exp - as not rendered yet)
                        let path = expansive.directories.contents.join(script)

                        if (script.startsWith('http')) {
                            //  External script file
                            write('<script' + modifiers + ' src="' + script + '"></script>\n')
                        } else {
                            let target = Path(script).portable
                            target = meta.top.join(target).trimStart('./')
                            if (path.exists && !target.startsWith('http') && path.size < 5 * 1024) {
                                let data = path.readString()
                                //  Inline script data
                                write('\n<!--' + script + '-->\n' + '<script' + modifiers + '>\n' + data + '\n</script>\n\n')
                            } else {
                                //  External script file
                                write('<script' + modifiers + ' src="' + target + '"></script>\n')
                            }
                        }
                    }
                    if (extras && extras is String) {
                        extras = [extras]
                    }
                    if (service.extractions) {
                        let extracted = service.extractions[meta.destPath]
                        if (extracted && extracted.href) {
                            let jt = expansive.transforms.js
                            extras.push(jt.resolve(extracted.href, jt))
                        }
                    }
                    for each (script in extras) {
                        if (!script.startsWith('http')) {
                            let target = Path(script).portable
                            script = meta.top.join(target).trimStart('./')
                        }
                        write('<script src="' + script + '"></script>\n    ')
                    }
                }
            },

            pre: function(transform) {
                if (expansive.modified.everything) {
                    transform.service.hash = {}
                }
            },

        }, {
            /*
                For CSP -- extract inline script elements into an external script file
             */
            name:       'extract',
            mappings:   'html',

            init: function(transform) {
                transform.nextId = 0
                transform.service.extractions = {}
            },

            render: function (contents, meta, transform) {
                let service = transform.service
                /*
                    Local function to extract inline script elements
                 */
                function handleScriptElements(contents, meta, state): String {
                    let service = expansive.services.js
                    let re = /<script[^>]*>(.*)<\/script>/smg
                    let start = 0, end = 0
                    let output = ''
                    let matches
                    while (matches = re.exec(contents, start)) {
                        let elt = matches[0]
                        end = re.lastIndex - elt.length
                        output += contents.slice(start, end)
                        if (elt.match(/src=['"]/)) {
                            output += matches[0]
                        } else {
                            state.scripts ||= []
                            state.scripts.push(matches[1].trimEnd(';'))
                        }
                        start = re.lastIndex
                    }
                    output += contents.slice(start)
                    return output
                }

                /*
                    Extract onclick attributes
                 */
                function handleScriptAttributes(contents, meta, state): String {
                    let result = ''
                    let re = /<([\w_\-:.]+)([^>]*>)/g
                    let start = 0, end = 0
                    let matches

                    while (matches = re.exec(contents, start)) {
                        let elt = matches[0]
                        end = re.lastIndex - matches[0].length
                        /* Emit prior contents */
                        result += contents.slice(start, end)

                        let clickre = /(.*) +(onclick=)(["'])(.*?)(\3)(.*)/m
                        if ((cmatches = clickre.exec(elt)) != null) {
                            elt = cmatches[1] + cmatches[6]
                            let id
                            if ((ematches = elt.match(/id=['"]([^'"]+)['"]/)) != null) {
                                id = ematches[1]
                            } else {
                                let service = expansive.services.js
                                id = 'exp-' + ++transform.nextId
                                elt = cmatches[1] + ' id="' + id + '"' + cmatches[6]
                            }
                            state.onclick ||= {}
                            state.onclick[id] = cmatches[4].trimEnd(';')
                        }
                        result += elt
                        start = re.lastIndex
                    }
                    return result + contents.slice(start)
                }

                let state = {}
                contents = handleScriptElements(contents, meta, state)
                contents = handleScriptAttributes(contents, meta, state)
                if (state.scripts || state.onclick) {
                    let ss = service.extractions[meta.destPath] ||= {}
                    if (service.extract === true) {
                        ss.href = meta.destPath.replaceExt('js')
                    } else {
                        ss.href = service.extract
                    }
                    if (state.scripts) {
                        ss.scripts ||= []
                        ss.scripts += state.scripts
                        vtrace('Extract', 'Scripts from ' + meta.document)
                    }
                    if (state.onclick) {
                        ss.onclick ||= {}
                        blend(ss.onclick, state.onclick)
                        vtrace('Extract', 'Onclick from ' + meta.document)
                    }
                }
                return contents
            }

            /*
                Post process and create external script files for inline scripts
             */
            post: function(transform) {
                let service = transform.service
                let perdoc = (service.extract === true)
                let scripts = '/*\n    Inline scripts for \n */\n'

                for (let [file, state] in service.extractions) {
                    if (perdoc) {
                        scripts = '/*\n    Inline scripts for ' + file + '\n */\n'
                    }
                    if (state.scripts) {
                        scripts += state.scripts.unique().join(';\n\n') + ';\n\n'
                    }
                    for (let [id, code] in state.onclick) {
                        scripts += 'document.getElementById("' + id + '").addEventListener("click", function() { ' +
                            code + '});\n\n'
                    }
                    if (perdoc) {
                        let destPath = Path(file).replaceExt('js')
                        let dest = directories.dist.join(destPath)
                        let meta = blend(expansive.topMeta.clone(), { document: destPath, layout: null })
                        scripts = renderContents(scripts, meta)
                        writeDest(scripts, meta)
                    }
                }
                if (!perdoc) {
                    let destPath = service.extract
                    let dest = directories.dist.join(destPath)
                    let meta = blend(expansive.topMeta.clone(), { document: destPath, layout: null })
                    scripts = renderContents(scripts, meta)
                    writeDest(scripts, meta)
                }
            },
        } ]
    }
})

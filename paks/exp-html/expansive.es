Expansive.load({

    services: {
        name:       'html',
        options:    '--collapse-whitespace --prevent-attributes-escaping --remove-empty-attributes --remove-comments'

        transforms: {
            mappings:   ['html'],

            init: function(transform) {
                transform.htmlmin = Cmd.locate('html-minifier')
                if (!transform.htmlmin) {
                    throw new Error('Cannot find html-minifier')
                }
            },

            render: function(contents, meta, transform) {
                // print("META", meta.sourcePath)
                let service = transform.service
                /*
                    Only minify the final aggregation of document, partials and layout
                 */
                if (service.minify && meta.isLayout && !meta.layout && transform.htmlmin) {
                    try {
                        contents = run(transform.htmlmin + ' ' + transform.service.options, contents)
                        contents += '\n'
                    } catch (e) {
                        if (expansive.options.debug) {
                            print('Cannot minify', meta.source, '\n', e)
                            print('Contents', contents)
                        }
                        /* Keep going with unminified contents */
                    }
                }
                /*
                    Expand icons
                 */
                if (service.iconify) {
                    let re = new RegExp('< *i( *[^>]*|)>([^<]+)<\/i>', 'gms')
                    while ((match = re.exec(contents)) !== null) {
                        let name = match[2]
                        let hasClass = match[0].match(/.*class="([^"]*)"/)
                        let klass, svg
                        let style = 'filled'
                        if (hasClass) {
                            let form = hasClass[1].match(/outlined|filled|round|sharp|two-tone/)
                            style = form ? form[0] : 'filled'
                            klass = hasClass[1].replace(/outlined|filled|round|sharp|two-tone/g, '')
                        } else {
                            klass = ''
                        }
                        name = name.trim()
                        let dir
                        if (name.contains('svg:')) {
                            name = name.replace('svg:', '')
                            dir = directories.svg
                            svg = dir.join(name + '.svg')
                        } else {
                            dir = directories.material.join(style)
                            svg = dir.join(name.replace(/-/g, '_') + '.svg')
                        }
                        if (!svg.exists) {
                            throw 'Cannot find ' + svg
                        }
                        if (expansive.options.debug) {
                            print("SVG", svg)
                        }
                        let data = svg.readString()
                        data = data.replace(/width="24" |height="24"/g, '').
                                    replace(/fill="currentColor"/g, '').
                                    replace(/<svg /, '<svg name="' + name + '" fill="currentColor" class="svg-icon ' + klass + '" ')
                        contents = contents.replace(match[0], data)
                    }
                }
                return contents
            }
        }
    }
})

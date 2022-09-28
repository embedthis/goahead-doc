Expansive.load({

    services: {
        name: 'canon',
        init: function() {
            global.renderCanonical = function() {
                let ref: string
                let site = meta.site.toString()
                if (meta.canon) {
                    ref = meta.canon
                } else if (meta.dest.basename.trimExt() == 'index') {
                    ref = meta.absurl.dirname
                    if (!ref.endsWith('/')) {
                        ref += '/'
                    }
                } else {
                    ref = meta.absurl
                }
                if (!site.contains('127.0.0.1') && !site.contains('localhost')) {
                    ref = meta.site.join(ref)
                }
                write('<link href="' + ref + '" rel="canonical" />')
            }
        }
    }
})

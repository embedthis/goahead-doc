
    $(document).ready(function() {
        (function() {
            var r = new XMLHttpRequest();
            r.onreadystatechange = function() {
                if (r.readyState >= 3 && r.status == 200) {
                    setTimeout(() => {
                        window.location.reload();
                    }, 250);
                }
            }
            r.open("GET", "/reload-service", true);
            r.send();
        })();
    });


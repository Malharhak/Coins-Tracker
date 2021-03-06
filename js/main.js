requirejs.config({
    baseUrl: "js/",
    paths: {
        /* External libs */
        Stats: "../libs/Stats/Stats",
        requestAnimationFrame: "../libs/requestAnimationFrame/requestAnimationFrame",
        jquery: "../libs/jquery/jquery.min",
        howl: "../libs/howler/howler.min",
        "requirejs-domready": "../libs/requirejs-domready/domReady"
    },
    shim: {
        jquery: {
            exports: "$"
        },
        Stats: {
            exports: "Stats"
        },
        howl: {
            exports: "Howler",
            init: function () {
                return {
                    Howl: Howl,
                    Howler: Howler
                };
            }
        }
    },
    // This is to avoid caching during development by appending the current date to script urls
    urlArgs: "d=" + Date.now()
});

require (["requirejs-domready", "gameloop"], function (domready, gameloop) {
    gameloop.init();
});
/**
 * --------------------------------------------------------------------------
 * Components (AlpineJS) v0.1.0: app.js
 * Licensed under MIT (https://github.com/mkfizi/components/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

(function () {
    'use strict';

    const app = {};

    app.name = 'Components (AlpineJS)';
    app.version = '0.1.0';
    app.breakpointSize = 1024;

    app.element = {
        navbar: document.getElementById('navbar'),
        footerCurrentYear: document.getElementById('footer-year'),
        footerAppName: document.getElementById('footer-app-name'),
        footerAppVersion: document.getElementById('footer-app-version'),
    }

    app.view = {
        footer: {
            // Toggle footer content with current year, app name and version
            toggle: () => {
                if (app.element.footerCurrentYear) {
                    app.element.footerCurrentYear.innerHTML = new Date().getFullYear();
                }

                if (app.element.footerAppName) {
                    app.element.footerAppName.innerHTML = app.name;
                }

                if (app.element.footerAppVersion) {
                    app.element.footerAppVersion.innerHTML = app.version;
                }
            }
        },

        navbar: {
            // Toggle navbar appearance base on window scroll Y position
            toggle: () => {
                if (app.element.navbar) {
                    const isScrolled = window.scrollY > (app.element.navbar.offsetHeight - app.element.navbar.clientHeight);
                    app.element.navbar.classList[isScrolled ? 'add' : 'remove']('border-neutral-200', 'dark:border-neutral-800');
                    app.element.navbar.classList[isScrolled ? 'remove' : 'add']('border-transparent', 'dark:border-transparent');
                }
            },
        },

        // Initialize view
        init: () => {
            app.view.footer.toggle();
        }
    }

    app.event = {

        window: {
            // Handle window 'scroll' event
            scroll: () => {
                app.view.navbar.toggle();
            }
        },

        init: () => {
            window.addEventListener('scroll', app.event.window.scroll);
        }
    },

    app.init = () => {
        app.view.init();
        app.event.init();
    }

    app.init();
})();
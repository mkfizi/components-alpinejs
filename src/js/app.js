/**
 * --------------------------------------------------------------------------
 * Components (AlpineJS) v0.2.1: app.js
 * Licensed under MIT (https://github.com/mkfizi/components-alpinejs/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

(function () {
    'use strict';

    const app = {};

    app.name = 'Components (AlpineJS)';
    app.version = '0.2.1';

    app.element = {
        footerCurrentYear: document.getElementById('footer-year'),
        footerAppName: document.getElementById('footer-app-name'),
        footerAppVersion: document.getElementById('footer-app-version'),
    }

    app.view = {
        footer: {
            
            // Initialize footer content with current year, app name and version
            init: () => {
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

        // Initialize view
        init: () => {
            app.view.footer.init();
        }
    }

    app.init = () => {
        app.view.init();
    }

    app.init();
})();
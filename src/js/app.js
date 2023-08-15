/**
 * --------------------------------------------------------------------------
 * Components (AlpineJS) v0.2.0: app.js
 * Licensed under MIT (https://github.com/mkfizi/tailstartkit-ui-components-alpine/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

(function () {
    'use strict';

    const app = {};

    app.name = 'Tailstart Kit - Components (AlpineJS)';
    app.version = '0.2.0';

    app.element = {
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

        // Initialize view
        init: () => {
            app.view.footer.toggle();
        }
    }

    app.init = () => {
        app.view.init();
    }

    app.init();
})();
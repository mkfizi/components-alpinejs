'use strict';
import Alpine from 'alpinejs';

const app = {
    name: 'UI Component AlpineJS',
    version: '1.0.0',
    alpine() {
        Alpine.data('app', () => ({
            init() {
                console.log(app.name);
                console.log(app.version);
            } 
        }))
    },
    init() {
        app.alpine();
        Alpine.start();
    }
};

app.init();
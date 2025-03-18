'use strict';

import Alpine from 'alpinejs';

const app = {
    name: 'UI Component | AlpineJS',
    version: '1.0.0',
    init() {
        console.log(this.name);
        console.log(this.version);
    }
};

app.init();
import { App } from './app';

(() => {
    const app = new App();

    console.log('+++', app);

    setInterval(() => {
        app.update();
    }, 2000);
})();

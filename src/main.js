import App from "./App.js";

const $appTarget = document.querySelector('[data-component="App"]');

const appOnClick = () => {
    alert('App clicked from main');
};

new App($appTarget, {
    onClick: appOnClick
});
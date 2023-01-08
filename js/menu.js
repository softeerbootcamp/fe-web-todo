import { changeCSS } from "./common.js"

const menuBar = document.querySelector("#menu");
const menuOpenBtn = document.querySelector("#menu-open-btn");
const menuCloseBtn = document.querySelector("#menu-close-btn");


console.log(menuOpenBtn)
menuOpenBtn.addEventListener("click", () => { changeCSS(menuBar, "right", 0) })
menuCloseBtn.addEventListener("click", () => { changeCSS(menuBar, "right", "-30vw") })
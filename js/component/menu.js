import { changeCSS } from "../common.js"

const menuBar = document.querySelector("#menu");
const menuOpenBtn = document.querySelector("#menu-open-btn");
const menuCloseBtn = document.querySelector("#menu-close-btn");

// menu toggle 이벤트 추가
menuOpenBtn.addEventListener("click", () => { changeCSS(menuBar, "right", 0) })
menuCloseBtn.addEventListener("click", () => { changeCSS(menuBar, "right", "-30vw") })
import { changeCSS } from "../common.js"
import { menuLogAddTemplate, menuLogDeleteTemplate } from "../templates/template.js";

const menuBar = document.querySelector("#menu");
const menuOpenBtn = document.querySelector("#menu-open-btn");
const menuCloseBtn = document.querySelector("#menu-close-btn");

const menuContent = document.getElementById("menu-content")

// menu toggle 이벤트 추가
menuOpenBtn.addEventListener("click", () => { changeCSS(menuBar, "right", 0) })
menuCloseBtn.addEventListener("click", () => { changeCSS(menuBar, "right", "-30vw") })

function menuLogAdd(title, status, emotion="🥳", author="@sam") {
    menuContent.prepend(menuLogAddTemplate(title, status, emotion, author));
}

function menuLogDelete(title, status, emotion="🥳", author="@sam") {
    menuContent.prepend(menuLogDeleteTemplate(title, status, emotion, author))
}

export { menuLogAdd, menuLogDelete }
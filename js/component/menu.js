import { changeCSS } from "../common.js"
import { 
    menuLogAddTemplate, menuLogDeleteTemplate, menuLogMoveTemplate, menuLogUpdateTemplate
} from "../templates/template.js";

const menuBar = document.querySelector("#menu");
const menuOpenBtn = document.querySelector("#menu-open-btn");
const menuCloseBtn = document.querySelector("#menu-close-btn");

const menuContent = document.getElementById("menu-content")

// menu toggle 이벤트 추가
menuOpenBtn.addEventListener("click", () => { changeCSS(menuBar, "right", 0) })
menuCloseBtn.addEventListener("click", () => { changeCSS(menuBar, "right", "-30vw") })

// 메뉴 바에 기록을 남깁니다. (add)
function menuLogAdd(title, status, emotion="🥳", author="@sam") {
    menuContent.prepend(menuLogAddTemplate(title, status, emotion, author));
}

// 메뉴 바에 기록을 남깁니다. (delete)
function menuLogDelete(title, status, emotion="🥳", author="@sam") {
    menuContent.prepend(menuLogDeleteTemplate(title, status, emotion, author))
}

// 메뉴 바에 기록을 남깁니다. (move)
function menuLogMove(title, prevStatus, nextStatus, emotion="🥳", author="@sam") {
    if(prevStatus == nextStatus) { return ; }
    
    menuContent.prepend(menuLogMoveTemplate(title, prevStatus, nextStatus, emotion, author))
}

function menuLogUpdate(title, status, emotion="🥳", author="@sam") {
    menuContent.prepend(menuLogUpdateTemplate(title, status, emotion, author));
}

export { menuLogAdd, menuLogDelete, menuLogMove, menuLogUpdate }
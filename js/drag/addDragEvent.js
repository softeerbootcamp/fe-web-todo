import { findColumnStatusByCard } from "../component/column.js";
import { dragCard, dragOverCard, dropCard } from "./dragCard.js"
import { makeLightNode } from "./dragEffect.js"
import { menuLogMove } from "../component/menu.js";
import { findCardTitle } from "../common.js";

let dragStartStatus = "";
let dragEndStatus = "";

function makeCardDragEvent(cardDom) {
    cardDom.addEventListener("dragstart", (event) => {
        dragStartStatus = findColumnStatusByCard(cardDom)
        dragCard(event)
    })

    cardDom.addEventListener("dragover", (event) => {
        dragOverCard(cardDom, event)
    })

    cardDom.addEventListener("dragend", (event) => {
        // 이동 완료된 column의 status 계산
        dragEndStatus = findColumnStatusByCard(cardDom);

        // menu에 이동 로그 남기기
        menuLogMove(findCardTitle(cardDom), dragStartStatus, dragEndStatus);

        makeLightNode();
    })

    cardDom.addEventListener("drop", (event) => {
        dropCard(cardDom, event)
    })
}

export { 
    dragStartStatus, dragEndStatus,
    makeCardDragEvent
}
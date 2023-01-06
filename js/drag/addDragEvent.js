import { makeLightNode } from "./dragEffect.js";
import { dragCard, dragOverCard, dropCard } from "./dragCard.js";

function makeCardDragEvent(cardDom) {
    cardDom.addEventListener("dragstart", (event) => {
        dragCard(cardDom, event)
    })

    cardDom.addEventListener("dragover", (event) => {
        dragOverCard(cardDom, event)
    })

    cardDom.addEventListener("drop", (event) => {
        dropCard(cardDom, event)
    })

    cardDom.addEventListener("dragend", () => {
        makeLightNode();
    })
}

let cards = document.querySelectorAll(".card-frame");
let sectionHeaders = document.querySelectorAll(".section-header")

cards.forEach((card) => {
    makeCardDragEvent(card)
})

sectionHeaders.forEach((sectionHeader) => {
    sectionHeader.addEventListener("dragover", (event) => {
        dragOverCard(sectionHeader, event)
    })

    sectionHeader.addEventListener("drop", () => {
        dropCard(sectionHeader)
    })
})

export { makeCardDragEvent }
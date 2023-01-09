import { dragCard, dragOverCard, dropCard } from "./dragCard.js"
import { addChildAfterParent } from "../common.js"
import { makeLightNode } from "./dragEffect.js"

function makeCardDragEvent(cardDom) {
    cardDom.addEventListener("dragstart", (event) => {
        dragCard(event)
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

export { makeCardDragEvent }
import { dragIDManager } from "./dragIDManager.js"

function makeShadedNode() {
    let movedCard = document.getElementById(dragIDManager.getCurrentCardID())
    movedCard.style.opacity = 0.5

    return movedCard
}

function makeLightNode() {
    let movedCard = document.getElementById(dragIDManager.getCurrentCardID())
    movedCard.style.opacity = 1

    return movedCard
}

export { makeShadedNode, makeLightNode }
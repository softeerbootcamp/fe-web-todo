import {manager} from "./dragIDManager.js"

function makeShadedNode() {
    let movedCard = document.getElementById(manager.getID())
    movedCard.style.opacity = 0.5
    movedCard.style.border = "1px solid blue"

    return movedCard
}

function makeLightNode() {
    let movedCard = document.getElementById(manager.getID())
    movedCard.style.opacity = 1

    return movedCard
}

function addChildToParent(parentNode, childNode) {
    parentNode.after(childNode);
}

export { makeShadedNode, makeLightNode, addChildToParent }
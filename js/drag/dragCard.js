import { dragIDManager } from "./dragIDManager.js";
import { addChildAfterParent } from "../common.js";
import { makeShadedNode, makeLightNode } from "./dragEffect.js";

function dragCard(event) {
    dragIDManager.setCurrentCardID(event.target.id)
}

function dragOverCard(parentDom, event) {
    event.preventDefault();
    addChildAfterParent(parentDom, makeShadedNode())
}

function dropCard(parentDom, event) {
    addChildAfterParent(parentDom, makeLightNode());
}

export { dragCard, dragOverCard, dropCard }
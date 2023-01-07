function findParentTag(currentNode, parentTag) {
    if(currentNode.tagName === parentTag) {
        return currentNode;
    }
    else if(currentNode.parentNode){
        return findParentTag(currentNode.parentNode, parentTag);
    }
    
    return null;
}

function clearDomValue(textList) {
    textList.forEach((text) => {
        text.value = ""
    })
}

export { findParentTag, clearDomValue }
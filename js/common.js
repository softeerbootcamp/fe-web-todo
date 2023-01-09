const CARD_BTN_ORIGINAL = "#000";
const CARD_OUTLINE_ORIGINAL = "none";
const CARD_BACKGROUND_ORIGINAL = "#fff";
const CARD_DELETE_BTN_ORIGINAL = "#D0D0D0";

const CARD_BTN_HOVER = "#FE5958";
const CARD_OUTLINE_HOVER = "0.2vh solid " + CARD_BTN_HOVER;
const CARD_BACKGROUND_HOVER = "#FFEEEC";


// (target)의 css (key)를 (value)로 바꿈
function changeCSS(target, key, value) {
    target.style[key] = value
}

function addChildAfterParent(parentNode, childNode) {
    parentNode.after(childNode)
}

function findCardTitle(card) {
    const cardContent = card.children[0].innerHTML;
    const cardTitle = cardContent.split("\n")[0];
    
    return cardTitle;
}

function findHeaderLengthByCard(card) {
    let cardSection = card.parentElement.parentElement
    let findHeader = cardSection.children[0].children[0]

    return findHeader;
}

export {
    CARD_BTN_ORIGINAL, CARD_OUTLINE_ORIGINAL, CARD_BACKGROUND_ORIGINAL,
    CARD_BTN_HOVER, CARD_OUTLINE_HOVER, CARD_BACKGROUND_HOVER, CARD_DELETE_BTN_ORIGINAL,
    changeCSS, addChildAfterParent, findHeaderLengthByCard, findCardTitle }
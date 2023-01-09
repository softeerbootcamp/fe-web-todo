const CARD_BTN_ORIGINAL = "#000";
const CARD_OUTLINE_ORIGINAL = "none";
const CARD_BACKGROUND_ORIGINAL = "#fff";
const CARD_DELETE_BTN_ORIGINAL = "#D0D0D0";

const CARD_BTN_HOVER = "#FE5958";
const CARD_OUTLINE_HOVER = "0.2vh solid " + CARD_BTN_HOVER;
const CARD_BACKGROUND_HOVER = "#FFEEEC";


// (target)의 css (key)를 (value)로 바꿉니다.
function changeCSS(target, key, value) {
    target.style[key] = value
}

// parentNode 다음에 childNode를 추가합니다.
function addChildAfterParent(parentNode, childNode) {
    parentNode.after(childNode)
}

// 카드의 제목을 찾아줍니다.
function findCardTitle(card) {
    const cardContent = card.children[0].innerHTML;
    const cardTitle = cardContent.split("\n")[0];
    
    return cardTitle;
}

// 카드가 속한 Column의 길이를 반환합니다.
function findHeaderLengthByCard(card) {
    let cardSection = card.parentElement.parentElement
    let findHeader = cardSection.children[0].children[0]

    return findHeader;
}

export {
    CARD_BTN_ORIGINAL, CARD_OUTLINE_ORIGINAL, CARD_BACKGROUND_ORIGINAL,
    CARD_BTN_HOVER, CARD_OUTLINE_HOVER, CARD_BACKGROUND_HOVER, CARD_DELETE_BTN_ORIGINAL,
    changeCSS, addChildAfterParent, findHeaderLengthByCard, findCardTitle }
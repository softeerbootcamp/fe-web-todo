import { CARD_BTN_ORIGINAL, CARD_OUTLINE_ORIGINAL, CARD_BACKGROUND_ORIGINAL,
    CARD_BTN_HOVER, CARD_OUTLINE_HOVER, CARD_BACKGROUND_HOVER, CARD_DELETE_BTN_ORIGINAL, findCardTitle, findCardContent } from "../common.js";
import { setCard, turnOnModal } from "./modal.js";
import { cardTemplate, newCardTemplate } from "../templates/template.js";
import { findColumnStatusByCard } from "./column.js"
import { addJSONData, deleteJSONData } from "../json_data/json_data.js"; 
import { makeCardDragEvent } from "../drag/addDragEvent.js";
import { menuLogAdd, menuLogUpdate } from "./menu.js";
import { findCardHeaderName } from "../component/column.js"

let registering = false;

// 버튼이 클릭되면 카드 등록 폼이 보여지도록 이벤트를 등록합니다.
function cardAddEvent(btn, currentColumn) {
    btn.addEventListener("click", () => {
        registering ? 
                currentColumn.children[0].remove() :    
                currentColumn.prepend(newCardTemplate());

        registering = !registering;
    })
}

// 버튼에 카드 삭제 이벤트를 등록합니다.
function cardDeleteEvent(btn, currentCard) {
    btn.addEventListener("click", () => {
        setCard(currentCard)
        turnOnModal();
    })

    let xBtn = currentCard.children[0].children[0]
    
    btn.addEventListener("mouseover", () => {
        currentCard.style.transition = "0.5s"
        currentCard.style.marginTop = "-0.5vh";
        currentCard.style.marginBottom = "1.5vh";
        btn.style.color = CARD_BTN_HOVER;
        currentCard.style.outline = CARD_OUTLINE_HOVER;
        currentCard.style.backgroundColor = CARD_BACKGROUND_HOVER;
    })

    btn.addEventListener("mouseleave", () => {
        currentCard.style.marginTop = "0vh";
        currentCard.style.marginBottom = "1vh";
        btn.style.color = CARD_BTN_ORIGINAL;
        xBtn.style.color = CARD_DELETE_BTN_ORIGINAL;
        currentCard.style.outline = CARD_OUTLINE_ORIGINAL;
        currentCard.style.backgroundColor = CARD_BACKGROUND_ORIGINAL;
    })
}

// 새로운 카드 등록을 취소하는 이벤트를 등록합니다.
function newCardCancelEvent(btn, currentCard) {
    btn.addEventListener("click", () => {
        currentCard.remove()
    })
}

// 새로운 카드를 생성하는 이벤트를 등록합니다.
function newCardRegisterEvent(btn, currentCard, isUpdated) {
    btn.addEventListener("click", () => {
        registering = false;

        let title = currentCard.children[0].value;
        let content = currentCard.children[1].value ;
        let newCard = cardTemplate(title, parseContent(content));

        // 메뉴에 반영
        isUpdated ?
                menuLogUpdate(title, findColumnStatusByCard(currentCard)):
                menuLogAdd(title, findCardHeaderName(currentCard));

        // drag 이벤트 추가
        makeCardDragEvent(newCard);

        // 카드 배치 후 카드 등록 폼 제거
        currentCard.after(newCard);
        currentCard.remove()

        // 데이터 반영
        let currentStatus = findColumnStatusByCard(newCard)
        addJSONData(currentStatus, title, content)
    })
}

// 새로운 카드를 생성할 때, 사용자의 입력에 따라 카드의 크기를 조절해줍니다.
function resizeCardByInputBox(inputBox, currentCard) {
    let scrollHeight = 0
    let cardHeight = 18
    let cardRegisterAccpetBtn = currentCard.children[2].children[1];

    inputBox.value ?
                cardRegisterAccpetBtn.disabled = false  :
                cardRegisterAccpetBtn.disabled = true;

    inputBox.addEventListener("input", () => {
        if(inputBox.scrollHeight != scrollHeight) {
            cardHeight += 2.5
            currentCard.style.height = cardHeight + "vh";
            scrollHeight = inputBox.scrollHeight
        }

        inputBox.value ?
                cardRegisterAccpetBtn.disabled = false  :
                cardRegisterAccpetBtn.disabled = true;
    })
}

// 새로운 카드를 등록할 때, 개행을 기준으로 문자열을 나누어줍니다.
function parseContent(string) {
    let stringArray = string.split("\n");
    return stringArray.join("<br>");
}

function cardToRegisterForm(card) {
    let title = findCardTitle(card);
    let content = findCardContent(card);
    let status = findColumnStatusByCard(card);

    // JSON 반영
    deleteJSONData(status, title);

    card.before(newCardTemplate(title, content, true));
    card.remove();
}

// 카드에 더블 클릭 이벤트를 추가해줍니다.
function addDoubleClickEventToCard(card) {
    card.addEventListener("dblclick", () => {
        cardToRegisterForm(card);
    })
}

export { 
    cardAddEvent, cardDeleteEvent, 
    newCardCancelEvent, newCardRegisterEvent, resizeCardByInputBox,
    addDoubleClickEventToCard
 }
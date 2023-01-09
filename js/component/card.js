import { CARD_BTN_ORIGINAL, CARD_OUTLINE_ORIGINAL, CARD_BACKGROUND_ORIGINAL,
    CARD_BTN_HOVER, CARD_OUTLINE_HOVER, CARD_BACKGROUND_HOVER, } from "../common.js";
import { setCard, turnOnModal } from "./modal.js";
import { cardTemplate, newCardTemplate } from "../templates/template.js";
import { findColumnStatus } from "./column.js"
import { addJSONData } from "../json_data/json_data.js"; 
import { makeCardDragEvent } from "../drag/addDragEvent.js";

function parseContent(string) {
    let stringArray = string.split("\n");
    return stringArray.join("<br>");
}

function cardAddEvent(btn, currentColumn) {
    btn.addEventListener("click", () => {
        currentColumn.prepend(newCardTemplate());
    })
}

function cardDeleteEvent(btn, currentCard) {
    btn.addEventListener("click", () => {
        setCard(currentCard)
        turnOnModal(); 
    })

    
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
        currentCard.style.outline = CARD_OUTLINE_ORIGINAL;
        currentCard.style.backgroundColor = CARD_BACKGROUND_ORIGINAL;
    })
}

function newCardCancelEvent(btn, currentCard) {
    btn.addEventListener("click", () => {
        currentCard.remove()
    })
}

function newCardRegisterEvent(btn, currentCard) {
    btn.addEventListener("click", () => {
        let title = currentCard.children[0].value;
        let content = currentCard.children[1].value ;
        let newCard = cardTemplate(title, parseContent(content));

        makeCardDragEvent(newCard);

        // 카드 배치 후 카드 등록 폼 제거
        currentCard.after(newCard);
        currentCard.remove()

        // 데이터 반영
        let currentStatus = findColumnStatus(newCard)
        addJSONData(currentStatus, title, content)
    })
}

function resizeCardByInputBox(inputBox, currentCard) {
    let scrollHeight = 0
    let cardHeight = 18

    inputBox.addEventListener("input", () => {
        if(inputBox.scrollHeight != scrollHeight) {
            cardHeight += 2.5
            currentCard.style.height = cardHeight + "vh";
            scrollHeight = inputBox.scrollHeight
        }
    })
}

export { cardAddEvent, cardDeleteEvent, newCardCancelEvent, newCardRegisterEvent, resizeCardByInputBox }
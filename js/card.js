import { CARD_BTN_ORIGINAL, CARD_OUTLINE_ORIGINAL, CARD_BACKGROUND_ORIGINAL,
    CARD_BTN_HOVER, CARD_OUTLINE_HOVER, CARD_BACKGROUND_HOVER, } from "./common.js";
import { setCard, turnOnModal } from "./modal.js";
import { cardTemplate, newCardTemplate } from "./templates/template.js";

function cardAddEvent(btn, currentColumn) {
    btn.addEventListener("click", () => {
        currentColumn.appendChild(newCardTemplate())
        // currentColumn.appendChild(cardTemplate("no title", "no content"));
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
        btn.style.color = CARD_BTN_HOVER;
        currentCard.style.outline = CARD_OUTLINE_HOVER;
        currentCard.style.backgroundColor = CARD_BACKGROUND_HOVER;
    })

    btn.addEventListener("mouseleave", () => {
        currentCard.style.marginTop = "0vh";
        btn.style.color = CARD_BTN_ORIGINAL;
        currentCard.style.outline = CARD_OUTLINE_ORIGINAL;
        currentCard.style.backgroundColor = CARD_BACKGROUND_ORIGINAL;
    })
}

export { cardAddEvent, cardDeleteEvent }
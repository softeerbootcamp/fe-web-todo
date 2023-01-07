const CARD_BTN_ORIGINAL = "#000";
const CARD_BORDER_ORIGINAL = "none";
const CARD_BACKGROUND_ORIGINAL = "#fff";

const CARD_BTN_HOVER = "#FE5958";
const CARD_BORDER_HOVER = "1px solid " + CARD_BTN_HOVER;
const CARD_BACKGROUND_HOVER = "#FFEEEC";

let clickedCard = ""

function addCardDeleteEvent() {
    let cardCloseBtns = document.querySelectorAll(".card-close-button");

    cardCloseBtns.forEach((btn) => {
        let cardFrame = btn.parentElement.parentElement;
        const modalFrame = document.querySelector("section#modal-area")

        // click -> 모달 켜기
        btn.addEventListener("click", () => {
            modalFrame.style.display = "flex";
            clickedCard = btn.parentElement.parentElement
        })

        // hover -> 카드 css 적용
        btn.addEventListener("mouseover", () => {
            btn.style.color = CARD_BTN_HOVER;
            cardFrame.style.border = CARD_BORDER_HOVER;
            cardFrame.style.backgroundColor = CARD_BACKGROUND_HOVER;
        })

        // hover out -> 카드 css 초기화
        btn.addEventListener("mouseout", () => {
            btn.style.color = CARD_BTN_ORIGINAL;
            cardFrame.style.border = CARD_BORDER_ORIGINAL;
            cardFrame.style.backgroundColor = CARD_BACKGROUND_ORIGINAL;
        })
    })
}

export { clickedCard, addCardDeleteEvent }
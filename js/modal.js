import { clickedCard } from "./section.js"
import { cardCounts } from "./card.js"

const modalCloseBtn = document.getElementById("modal-cancel-button");
const modalDeleteBtn = document.getElementById("modal-delete-button");
const modalFrame = document.querySelector("section#modal-area")

modalCloseBtn.addEventListener("click", () => {
    modalFrame.style.display = "none";
})

modalDeleteBtn.addEventListener("click", () => {
    modalFrame.style.display = "none";
    clickedCard.remove()
    cardCounts();
})
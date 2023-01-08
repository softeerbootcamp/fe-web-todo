let chosenCard = "";

const modalSection = document.querySelector("#modal-section");
const modalDeleteBtn = document.querySelector("#card-delete-btn");
const modalCancelBtn = document.querySelector("#card-cancel-btn");

function turnOnModal() {
    modalSection.style.display = "flex";
}

function turnOffModal() {
    modalSection.style.display = "none";
}

function setCard(cardDom) {
    chosenCard = cardDom
}

modalDeleteBtn.addEventListener("click", () => {
    turnOffModal();
    chosenCard.remove();
})

modalCancelBtn.addEventListener("click", () => { turnOffModal() })

export { setCard, modalSection, turnOnModal }
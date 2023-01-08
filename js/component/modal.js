import { addColumn } from "./column.js"

let chosenCard = "";

// card delete modal
const modalSection = document.querySelector("#modal-section");
const modalDeleteBtn = document.querySelector("#card-delete-btn");
const modalCancelBtn = document.querySelector("#card-cancel-btn");

// column add modal
const columnAddModal = document.querySelector("#column-add-modal-section");
const columnAddModalCancelBtn = document.querySelector("#column-add-cancel-btn");
const columnAddModalAcceptBtn = document.querySelector("#column-add-accept-btn");

function turnOnModal() {
    modalSection.style.display = "flex";
}

function turnOffModal() {
    modalSection.style.display = "none";
}

function turnOnColumnAddModal() {
    columnAddModal.style.display = "flex";
}

function turnOffColumnAddModal() {
    columnAddModal.style.display = "none";
}

function setCard(cardDom) {
    chosenCard = cardDom;
}

// card modal 버튼들 이벤트 추가
modalDeleteBtn.addEventListener("click", () => {
    turnOffModal();
    chosenCard.remove();
})

modalCancelBtn.addEventListener("click", () => { turnOffModal(); })

// column add modal 버튼들 이벤트 추가
columnAddModalCancelBtn.addEventListener("click", () => { turnOffColumnAddModal(); })
columnAddModalAcceptBtn.addEventListener("click", () => {
    turnOffColumnAddModal();

    let inputBox = document.querySelector("#column-add-input");
    addColumn(inputBox.value);
})

export { setCard, modalSection, turnOnModal, turnOnColumnAddModal }
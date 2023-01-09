import { validateStatus, statusName, deleteJSONData } from "../json_data/json_data.js";
import { addColumn, findColumnStatus } from "./column.js";
import { menuLogDelete } from "./menu.js";
import { findHeaderLengthByCard } from "../common.js";

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
    
    let status = findColumnStatus(chosenCard);
    let title = chosenCard.children[0].textContent.split("\n")[0]

    // menu 삭제 log 남기기
    menuLogDelete(title, statusName[status]);

    // column에 길이 반영
    let span = findHeaderLengthByCard(chosenCard)
    span.innerHTML = span.innerHTML - 1

    // 로컬 data 반영
    deleteJSONData(status, title);

    chosenCard.remove();
})

modalCancelBtn.addEventListener("click", () => { turnOffModal(); })

// column add modal 버튼들 이벤트 추가
columnAddModalCancelBtn.addEventListener("click", () => { turnOffColumnAddModal(); })
columnAddModalAcceptBtn.addEventListener("click", () => {
    let inputBox = document.querySelector("#column-add-input");
    
    // 중복되는 status가 없을 경우에만 column 추가
    if(validateStatus(inputBox.value)) {
        addColumn(inputBox.value);
        turnOffColumnAddModal();
    }
    else {
        inputBox.value = "";
        alert("이미 존재하는 status 입니다.")
    }
})

export { setCard, modalSection, turnOnModal, turnOnColumnAddModal }
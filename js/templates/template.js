import { columnDeleteEvent } from "../column.js";
import { cardAddEvent, cardDeleteEvent, 
    newCardCancelEvent, newCardRegisterEvent,
    resizeCardByInputBox
 } from "../card.js";

function columnTemplate(columnTitle, cardCount = 0) {
    let columnNode = document.createElement("section");

    columnNode.innerHTML = `
            <h3>${columnTitle}
                <span>${cardCount}</span>
                <div class="column-btn-area">
                    <i class="card-add-btn fa-solid fa-plus"></i>
                    <i class="column-delete-btn fa-solid fa-xmark"></i>
                </div>
            </h3>
            <article>
            </article>
        `

    let cardAddBtn = columnNode.children[0].children[1].children[0];
    let columnDeleteBtn = columnNode.children[0].children[1].children[1];

    columnDeleteEvent(columnDeleteBtn, columnNode); // column 제거 이벤트
    cardAddEvent(cardAddBtn, columnNode.children[1]); // card 추가 이벤트

    return columnNode;
}

function cardTemplate(cardTitle, cardContent, cardAuthor="author by web") {
    let cardDom = document.createElement("div");
    cardDom.classList.add("card-frame")
    cardDom.setAttribute("draggable", true)

    cardDom.innerHTML = `
        <h3 class="card-title">${cardTitle}
            <i class="fa-solid fa-xmark"></i>
        </h3>
        <h4 class="card-content">${cardContent}</h4>
        <h5 class="card-author">${cardAuthor}</h5>
    `;

    let cardDeleteBtn = cardDom.children[0].children[0]
    cardDeleteEvent(cardDeleteBtn, cardDom)

    return cardDom;
}

function newCardTemplate() {
    let newCardDom = document.createElement("div");
    newCardDom.classList.add("new-card-frame");

    newCardDom.innerHTML = `
        <input type="text" placeholder="제목을 입력하세요">
        <textarea cols="30" rows="20" placeholder="내용을 입력하세요"></textarea>
        <div class="new-card-button-area">
            <button id="new-card-cancel-btn">취소</button>
            <button id="new-card-register-btn">등록</button>
        </div>
    `

    const newCancelBtn = newCardDom.children[2].children[0];
    const newRegisterBtn = newCardDom.children[2].children[1];
    const textArea = newCardDom.children[1]

    // 등록 카드 폼의 버튼에 이벤트 추가
    newCardCancelEvent(newCancelBtn, newCardDom);
    newCardRegisterEvent(newRegisterBtn, newCardDom);
    resizeCardByInputBox(textArea, newCardDom);

    return newCardDom;
}

export { columnTemplate, cardTemplate, newCardTemplate }
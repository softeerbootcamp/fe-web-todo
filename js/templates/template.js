import { columnDeleteEvent } from "../component/column.js";
import { cardAddEvent, cardDeleteEvent, 
    newCardCancelEvent, newCardRegisterEvent,
    resizeCardByInputBox
} from "../component/card.js";
import { dragIDManager } from "../drag/dragIDManager.js";
import { makeShadedNode } from "../drag/dragEffect.js";
import { statusName } from "../json_data/json_data.js";

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
    let header = columnNode.children[0]
    let article = header.parentElement.children[1];

    header.addEventListener("dragover", (event) => {
        event.preventDefault();
        article.prepend(makeShadedNode());
    })

    article.addEventListener("dragover", (event) => {
        if(article.children.length) { return; }
        
        event.preventDefault();
        article.appendChild(makeShadedNode());
    })

    columnDeleteEvent(columnDeleteBtn, columnNode); // column 제거 이벤트
    cardAddEvent(cardAddBtn, columnNode.children[1]); // card 추가 이벤트

    return columnNode;
}

function cardTemplate(cardTitle, cardContent, cardAuthor="author by web") {
    let cardDom = document.createElement("div");
    cardDom.classList.add("card-frame")
    cardDom.setAttribute("draggable", true)
    cardDom.setAttribute("id", dragIDManager.getNewID())  // drag 이벤트를 위해 카드에 ID 부여

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
        <textarea cols="30" rows="20" maxlength="500" placeholder="내용을 입력하세요"></textarea>
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

function menuLogAddTemplate(content, status, emotion, author) {
    let menuFrame = document.createElement("div");
    menuFrame.classList.add("log-frame");

    menuFrame.innerHTML = `
        <div class="log-emotion-area">${emotion}</div>
        <div class="log-content-area">
            <h4 class="log-author">${author}</h4>
            <h4 class="log-content">
                <strong>${status}</strong>에 
                <strong>${content}</strong>
                를 등록하였습니다.
            </h4>
            <h5>1분전</h5>
        </div>
    `

    return menuFrame;
}

function menuLogDeleteTemplate(content, status, emotion, author) {
    let menuFrame = document.createElement("div");
    menuFrame.classList.add("log-frame");

    menuFrame.innerHTML = `
        <div class="log-emotion-area">${emotion}</div>
        <div class="log-content-area">
            <h4 class="log-author">${author}</h4>
            <h4 class="log-content">
                <strong>${status}</strong>에서
                <strong>${content}</strong>
                를 삭제하였습니다.
            </h4>
            <h5>1분전</h5>
        </div>
    `

    return menuFrame;
}

function menuLogMoveTemplate(title, prevStatus, nextStatus, emotion, author) {
    let menuFrame = document.createElement("div");
    menuFrame.classList.add("log-frame");

    menuFrame.innerHTML = `
        <div class="log-emotion-area">${emotion}</div>
        <div class="log-content-area">
            <h4 class="log-author">${author}</h4>
            <h4 class="log-content">
                <strong>${title}</strong>을
                <strong>${statusName[prevStatus]}</strong>에서
                <strong>${statusName[nextStatus]}</strong>
                로 이동하였습니다.
            </h4>
            <h5>1분전</h5>
        </div>
    `

    return menuFrame;
}
 
export {
    columnTemplate, cardTemplate, newCardTemplate, 
    menuLogAddTemplate, menuLogDeleteTemplate, menuLogMoveTemplate
}
import { columnDeleteEvent, headerDoubleClickEvent, inputFocusOutEvent } from "../component/column.js";
import { cardAddEvent, cardDeleteEvent, 
    newCardCancelEvent, newCardRegisterEvent,
    resizeCardByInputBox, addDoubleClickEventToCard
} from "../component/card.js";
import { dragIDManager } from "../drag/dragIDManager.js";
import { makeShadedNode } from "../drag/dragEffect.js";
import { statusName } from "../json_data/json_data.js";

// column 템플릿을 반환합니다.
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
    headerDoubleClickEvent(header);  // 헤더 더블 클릭 이벤트

    return columnNode;
}

// 카드 템플릿을 반환합니다.
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

    // 더블 클릭 이벤트 추가
    addDoubleClickEventToCard(cardDom)

    let cardDeleteBtn = cardDom.children[0].children[0]
    cardDeleteEvent(cardDeleteBtn, cardDom)

    return cardDom;
}

// 카드 등록 폼의 템플릿을 반환합니다.
function newCardTemplate(title = "", content = "", prevCard="", isUpdated=false) {
    let newCardDom = document.createElement("div");
    newCardDom.classList.add("new-card-frame");

    newCardDom.innerHTML = `
        <input type="text" placeholder="제목을 입력하세요" value='${title}'>
        <textarea cols="30" rows="20" maxlength="500" placeholder="내용을 입력하세요">${content}</textarea>
        <div class="new-card-button-area">
            <button id="new-card-cancel-btn">취소</button>
            <button id="new-card-register-btn" disabled>등록</button>
        </div>
    `

    const newCancelBtn = newCardDom.children[2].children[0];
    const newRegisterBtn = newCardDom.children[2].children[1];
    const textArea = newCardDom.children[1]

    // 등록 카드 폼의 버튼에 이벤트 추가
    newCardCancelEvent(newCancelBtn, newCardDom, prevCard, isUpdated);
    newCardRegisterEvent(newRegisterBtn, newCardDom, prevCard, isUpdated);
    resizeCardByInputBox(textArea, newCardDom);

    return newCardDom;
}

// 메뉴 로그 템플릿을 반환합니다. (add)
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
                을/를 등록하였습니다.
            </h4>
            <h5>1분전</h5>
        </div>
    `

    return menuFrame;
}

// 메뉴 로그 템플릿을 반환합니다. (delete)
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
                을/를 삭제하였습니다.
            </h4>
            <h5>1분전</h5>
        </div>
    `

    return menuFrame;
}

// 메뉴 로그 템플릿을 반환합니다. (move)
function menuLogMoveTemplate(title, prevStatus, nextStatus, emotion, author) {
    let menuFrame = document.createElement("div");
    menuFrame.classList.add("log-frame");

    menuFrame.innerHTML = `
        <div class="log-emotion-area">${emotion}</div>
        <div class="log-content-area">
            <h4 class="log-author">${author}</h4>
            <h4 class="log-content">
                <strong>${title}</strong>을/를
                <strong>${statusName[prevStatus]}</strong>에서
                <strong>${statusName[nextStatus]}</strong>
                로 이동하였습니다.
            </h4>
            <h5>1분전</h5>
        </div>
    `

    return menuFrame;
}
 
// 메뉴 로그 템플릿을 반환합니다. (update)
function menuLogUpdateTemplate(title, status, emotion, author) {
    let menuFrame = document.createElement("div");
    menuFrame.classList.add("log-frame");

    menuFrame.innerHTML = `
        <div class="log-emotion-area">${emotion}</div>
        <div class="log-content-area">
            <h4 class="log-author">${author}</h4>
            <h4 class="log-content">
                <strong>${statusName[status]}</strong>의
                <strong>${title}</strong>
                을/를 수정하였습니다.
            </h4>
            <h5>1분전</h5>
        </div>
    `

    return menuFrame;
}

function headerTitleTemplate(title, originalHeaderDom) {
    const headerDom = document.createElement("h3");
    const inputDom = document.createElement("input")
    
    inputDom.setAttribute("type", "text");
    inputDom.setAttribute("placeholder", "제목을 입력해주세요.");
    inputDom.setAttribute("maxlength", "10");
    inputDom.value = title;
    
    // setTimeout 주는 이유? 
    // JS 스레드 작업 역량에 따라서 inputDom 생성이 완료되기 이전에 focus가 호출될 수 있음!
    // setTimeout 함수를 호출해주면 setTimeout 함수를 해석하는 동안에 보통 inputDom이 생성되는 것 같음! (이게 delay 값을 0 주어도 괜찮은 이유)
    setTimeout(() => {
        inputDom.focus();
    }, 0)

    inputFocusOutEvent(inputDom, title, originalHeaderDom);  // input에 포커스 아웃 이벤트 추가

    headerDom.appendChild(inputDom);

    return headerDom;
}

export {
    columnTemplate, cardTemplate, newCardTemplate, 
    menuLogAddTemplate, menuLogDeleteTemplate, menuLogMoveTemplate, menuLogUpdateTemplate,
    headerTitleTemplate
}
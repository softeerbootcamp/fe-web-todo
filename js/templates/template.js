import { columnDeleteEvent, cardAddEvent, cardDeleteEvent } from "../column.js";

function columnTemplate(columnTitle) {
    let columnNode = document.createElement("section");

    columnNode.innerHTML = `
            <h3>${columnTitle}
                <span>0</span>
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

export { columnTemplate, cardTemplate }
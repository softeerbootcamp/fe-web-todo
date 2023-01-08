import { columnTemplate, cardTemplate } from "./templates/template.js";
import { setCard, turnOnModal } from "./modal.js";

const cardArea = document.querySelector("main");
const columnAddBtn = document.querySelector("#column-add-btn");

function columnDeleteEvent(btn, column) {
    btn.addEventListener("click", () => {
        column.remove();
    })
}

function cardAddEvent(btn, currentColumn) {
    btn.addEventListener("click", () => {
        currentColumn.appendChild(cardTemplate("no title", "no content"));
    })
}

function cardDeleteEvent(btn, currentCard) {
    btn.addEventListener("click", () => {
        setCard(currentCard)
        turnOnModal(); 
    })
}

// fab 버튼에 column add event 추가
columnAddBtn.addEventListener("click", () => {
    let newColumn = columnTemplate("제목 없음");
    cardArea.appendChild(newColumn);

    // column으로 smooth하게 스크롤 이동
    newColumn.scrollIntoView({behavior:'smooth'});
})

export { columnDeleteEvent, cardAddEvent, cardDeleteEvent }
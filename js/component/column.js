import { columnTemplate } from "../templates/template.js";

const mainTag = document.querySelector("main");
const columnAddBtn = document.querySelector("#column-add-btn");

function columnDeleteEvent(btn, column) {
    btn.addEventListener("click", () => {
        column.remove();
    })
}

// fab 버튼에 column add event 추가
columnAddBtn.addEventListener("click", () => {
    let newColumn = columnTemplate("제목 없음");
    mainTag.appendChild(newColumn);

    // column으로 smooth하게 스크롤 이동
    newColumn.scrollIntoView({behavior:'smooth'});
})

export { mainTag, columnDeleteEvent }
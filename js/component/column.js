import { columnTemplate } from "../templates/template.js";
import { statusName } from "../json_data/json_data.js";

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

function findCardHeaderName(card) {
    let currentSection = card.parentElement.parentElement;
    let header = currentSection.children[0].innerHTML
    
    return header.split("\n")[0]
}

// card가 속한 column의 status 번호를 알려주는 함수
function findColumnStatus(card) {
    let headerName = findCardHeaderName(card)

    for(let i=0;i<statusName.length;i++) {
        if(headerName == statusName[i]) { return i; }
    }

    return -1;
}

export { mainTag, columnDeleteEvent, findColumnStatus }
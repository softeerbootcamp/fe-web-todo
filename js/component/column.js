import { columnTemplate, headerTitleTemplate } from "../templates/template.js";
import { statusName, addStatus, deleteStatus, JSON_DATA } from "../json_data/json_data.js";
import { turnOnColumnAddModal } from "./modal.js";

const mainTag = document.querySelector("main");
const columnAddBtn = document.querySelector("#column-add-btn");

// column 버튼에 column 삭제 이벤트를 추가합니다.
function columnDeleteEvent(btn, column) {
    btn.addEventListener("click", () => {
        let status = column.children[0].innerHTML.split("\n")[0]
        
        deleteStatus(status)
        column.remove();
    })
}

// 새로운 column을 추가합니다.
function addColumn(columnName = "제목 없음") {
    let newColumn = columnTemplate(columnName);
    mainTag.appendChild(newColumn);

    // data 영역에도 status 추가
    addStatus(columnName)

    // column으로 smooth하게 스크롤 이동
    newColumn.scrollIntoView({behavior:'smooth'});
}

// fab 버튼에 column add event를 추가합니다.
columnAddBtn.addEventListener("click", () => {
    turnOnColumnAddModal();
})

// 카드가 속한 헤더의 이름을 반환합니다.
function findCardHeaderName(card) {
    let currentSection = card.parentElement.parentElement;
    let header = currentSection.children[0].innerHTML

    return header.split("\n")[0]
}

function updateColumnLength(status) {
    let currentSection = document.querySelectorAll("article")[status].parentElement
    let sectionLength = currentSection.children[0].children[0]
    sectionLength.innerHTML = JSON_DATA[status].length
}

// 카드가 속한 column의 status 번호를 반환합니다.
function findColumnStatusByCard(card) {
    let headerName = findCardHeaderName(card)

    for(let i=0;i<statusName.length;i++) {
        if(headerName == statusName[i]) { return i; }
    }

    return -1;
}

// column의 header에 더블 클릭 이벤트를 추가합니다.
function headerDoubleClickEvent(headerDom) {
    headerDom.addEventListener("dblclick", () => {
        let headerTitle = headerDom.innerHTML.split("\n")[0];
        let headerInputTemplate = headerTitleTemplate(headerTitle, headerDom);

        headerDom.after(headerInputTemplate)
        headerDom.style.display = "none";
    })
}

function inputFocusOutEvent(inputDom, originalTitle, originalHeaderDom) {
    inputDom.addEventListener("focusout", ()=> {
        originalHeaderDom.innerHTML = originalHeaderDom.innerHTML.replace(originalTitle, inputDom.value);
        originalHeaderDom.style.display = "flex";

        inputDom.parentElement.remove();
    })
}

export { 
    mainTag, 
    columnDeleteEvent, findColumnStatusByCard, addColumn, 
    findCardHeaderName, updateColumnLength,
    headerDoubleClickEvent, inputFocusOutEvent
}
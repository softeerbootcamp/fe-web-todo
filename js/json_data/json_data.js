import { findCardTitle, findCardContent } from "../common.js"
import { updateColumnLength } from "../component/column.js"

// 새로운 상태값이 입력되면? statusList의 길이 값을 대입해주면 된다!
const TODO = 0
const DOING = 1
const DONE = 2

// 리스트로 관리하는 이유? state가 추가될 수도 있음!
let statusList = [TODO, DOING, DONE]
let statusName = ["해야 할 일", "하고 있는 일", "완료한 일"]
let JSON_DATA = [[], [], []]

JSON_DATA[TODO] = [
    {
        title: "github 공부하기",
        content: "add, commit, push",
        author: "author by web",
        date: "Sun Jan 03 2023 00:00:00 GMT+0900 (한국 표준시)"
    },
    {
        title: "블로그에 포스팅할 것",
        content: "github 공부 내용",
        author: "author by web",
        date: "Sun Jan 02 2023 00:00:00 GMT+0900 (한국 표준시)"
    },
]

JSON_DATA[DOING] = [
    {
        title: "HTML/CSS 공부하기",
        content: "input 태그 실습",
        author: "author by web",
        date: "Sun Jan 03 2023 00:00:00 GMT+0900 (한국 표준시)"
    }
]

JSON_DATA[DONE] = []

// 새로운 JSON 데이터를 추가합니다.
function addJSONData(status, title, content) {
    JSON_DATA[status].push({
        title,
        content,
        author: "author by web",
        date: new Date()
    })

    updateColumnLength(status);
}

// 해당하는 JSON 데이터를 삭제합니다.
function deleteJSONData(status, title) {
    let dataList = JSON_DATA[status]

    for(let i=0;i<dataList.length;i++) {
        if(dataList[i].title == title) {
            dataList.splice(i, 1);
            break;
        }
    }

    updateColumnLength(status);
}

function moveJSONData(prevStatus, nextStatus, card) {
    let title = findCardTitle(card);
    let content = findCardContent(card);

    for(let i=0;i<JSON_DATA[prevStatus].length;i++) {
        if(JSON_DATA[prevStatus][i].title == title) {
            addJSONData(nextStatus, title, content);
            deleteJSONData(prevStatus, title);

            return;
        }
    }
}

// 새롭게 생성될 status의 이름 타당성 여부를 반환합니다.
function validateStatus(name) {
    for(let i=0;i<statusName.length;i++) {
        if(statusName[i] == name) {
            return false;
        }
    }

    return true;
}

// 수정될 status의 이름 타당성 여부를 반환합니다.
function validateNewName(originalName, newName) {
    for(let i=0;i<statusName.length;i++) {
        if(statusName[i] == newName && statusName[i] != originalName) {
            return false;
        }
    }

    return true;
}

// 새로운 status를 추가합니다.
// 호출 시기 : column 생성 이후
function addStatus(newStatus) {
    let newStatusIndex = statusList.length
    statusList[newStatusIndex] = statusList[newStatusIndex - 1] + 1;
    statusName[newStatusIndex] = newStatus

    JSON_DATA[newStatusIndex] = []
}

// 해당하는 status를 삭제합니다.
// 호출 시기 : column 삭제 이후 
function deleteStatus(status) {
    let statusIndex = statusName.indexOf(status)
    
    // 삭제
    JSON_DATA.splice(statusIndex, 1)
    statusList.splice(statusIndex, 1)
    statusName.splice(statusIndex, 1)
}

// status의 이름을 바꾸어 줍니다.
function updateStatusName(prevName, nextName) {
    for(let i=0;i<statusName.length;i++) {
        if(statusName[i] == prevName) {
            statusName[i] = nextName;
            break;
        }
    }
}

export { statusList, statusName, TODO, DOING, DONE, JSON_DATA, 
    addJSONData, deleteJSONData, validateStatus,
    addStatus, deleteStatus, moveJSONData,
    updateStatusName, validateNewName
}
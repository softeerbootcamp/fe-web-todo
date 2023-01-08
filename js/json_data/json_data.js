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

function addJSONData(status, title, content) {
    JSON_DATA[status].push({
        title,
        content,
        author: "author by web",
        date: new Date()
    })

    let currentSection = document.querySelectorAll("article")[status].parentElement
    let sectionLength = currentSection.children[0].children[0]
    
    sectionLength.innerHTML = JSON_DATA[status].length
}

function addStatus(newStatus) {
    let newStatusIndex = statusList.length
    statusList[newStatusIndex] = statusList[newStatusIndex - 1] + 1;
    statusName[newStatusIndex] = newStatus

    JSON_DATA[newStatusIndex] = []
}

export { statusList, statusName, TODO, DOING, DONE, JSON_DATA, addJSONData, addStatus
}
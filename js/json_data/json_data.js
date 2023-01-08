// 새로운 상태값이 입력되면? statusList의 길이 값을 대입해주면 된다!
const TODO = 0
const DOING = 1
const DONE = 2

// 리스트로 관리하는 이유? state가 추가될 수도 있음!
let statusList = [TODO, DOING, DONE]
let JSON_DATA = [[], [], []]

JSON_DATA[TODO] = [
    {
        title: "github 공부하기",
        content: "add, commit, push",
        author: "author by web",
        date: "2022.01.01"
    },
    {
        title: "블로그에 포스팅할 것",
        content: "github 공부 내용",
        author: "author by web",
        date: "2022.01.02"
    },
]

JSON_DATA[DOING] = [
    {
        title: "HTML/CSS 공부하기",
        content: "input 태그 실습",
        author: "author by web",
        date: "2022.01.03"
    }
]

export { statusList, TODO, DOING, DONE, JSON_DATA }
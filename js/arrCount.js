import { todos } from "./data.js";
const todoNum = document.querySelectorAll(".count-num");
const condition = ["todo", "doing", "done"];

//  리스트 개수 카운트
function arrCount(index, str) {
  const filteredArray = todos.filter((ele) => ele.status === str);
  todoNum[index].innerText = filteredArray.length;
  return filteredArray.length;
}

export { arrCount };

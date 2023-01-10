import { makeCard } from "./makeTemplate.js";
import { arrCount } from "./arrCount.js";
import { todos } from "./data.js";
const titleInputBox = document.getElementsByClassName("title-input"); // 할 일 제목 입력창
const detailInputBox = document.getElementsByClassName("detail-input"); // 할 일 내용 입력창
const registerBtn = document.querySelectorAll(".register-btn"); // 버튼
const toDoList = document.querySelector(".list-wrapper"); // 할 일 리스트창

const condition = ["todo", "doing", "done"];

const registerItem = (index) => {
  event.preventDefault();
  if (!titleInputBox[index].value || !detailInputBox[index].value)
    alert("내용을 입력해 주세요!");
  else {
    const putHere = document.querySelectorAll(".list-wrapper")[index];

    const newItemBox = makeCard({
      title: titleInputBox[index].value,
      detail: detailInputBox[index].value,
    });
    putHere.insertAdjacentHTML("beforeend", newItemBox);
    todos.push({
      title: titleInputBox.value,
      detail: detailInputBox.value,
      status: condition[index],
    });
    titleInputBox.value = ""; // 할 일 입력창 초기화
    detailInputBox.value = "";
  }
  arrCount(index, condition[index]);
};

registerBtn.forEach((el, index) => {
  el.onclick = () => {
    registerItem(index);
  };
});

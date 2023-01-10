import { todos } from "./data.js";
import { makeCard } from "./makeTemplate.js";
import { arrCount } from "./arrCount.js";

const toDoList = document.getElementById("item-todo-list"); // 할 일 리스트창
const doingList = document.getElementById("item-doing-list"); // 할 일 리스트창
const doneList = document.getElementById("item-done-list"); // 할 일 리스트창
const condition = ["todo", "doing", "done"];

const showItems = () => {
  todos.map((item) => {
    const card = makeCard({
      title: item.title,
      detail: item.details,
    });
    if (item.status === condition[0]) {
      toDoList.insertAdjacentHTML("beforeend", card);
    }
    if (item.status === condition[1]) {
      doingList.insertAdjacentHTML("beforeend", card);
    }
    if (item.status === condition[2]) {
      doneList.insertAdjacentHTML("beforeend", card);
    }
  });
};

const init = () => {
  showItems();
  arrCount(0, "todo");
  arrCount(1, "doing");
  arrCount(2, "done");
};

init();

export { showItems };

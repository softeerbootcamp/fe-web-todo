const addCardBtn = document.querySelectorAll(".add-card-btn");
const addCard = document.querySelectorAll(".item-add-box");
const CancelBtn = document.querySelectorAll(".cancel-btn");
const toDoList = document.querySelector(".list-wrapper"); // 할 일 리스트창

const fold = (num) => {
  addCard[num].classList.add("hidden");
};
//보임
const unfold = (num) => {
  addCard[num].classList.remove("hidden");
};

addCardBtn.forEach((el, index) => {
  el.onclick = () => {
    unfold(index);
  };
});

CancelBtn.forEach((el, index) => {
  el.onclick = () => {
    fold(index);
  };
});

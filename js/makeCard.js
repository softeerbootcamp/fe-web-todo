const toDoList = document.querySelector(".list-wrapper"); // 할 일 리스트창
const deleteItem = document.getElementById("item-delete-btn");
const modalCancelBtn = document.getElementById("modal-cancel-btn");
const deleteItemBtn = document.getElementById("modal-delete-btn");
const item = document.getElementsByClassName("item-wrapper");

const modalClose = () => {
  document.getElementById("modal").classList.add("hidden");
};
modalCancelBtn.addEventListener("click", modalClose);

const modalOpen = (e) => {
  if (e.target.id == "item-delete-btn") {
    console.log("find");
    const removeTarget = e.target.parentNode.parentNode;
    console.log(removeTarget);
    document.getElementById("modal").classList.remove("hidden");

    deleteItemBtn.addEventListener("click", function () {
      console.log("click");
      modalClose();
      toDoList.removeChild(removeTarget);
    });
    modalCancelBtn.addEventListener("click", modalClose);
  }
  //document.getElementById("modal").classList.remove("hidden");
};
document.addEventListener("click", modalOpen);

const edit = () => {
  console.log("z;lkdfj;as");
};

item.addEventListener("dbclick", edit);

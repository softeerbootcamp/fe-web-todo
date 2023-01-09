import { log } from "../components/log.js";
import {
  newCardWrapper,
  cardWrapper,
  newColumn,
  fixCardWrapper,
  fixedWrapper,
} from "../components/card.js";
import {
  deleteNode,
  getTargetChild,
  addClsssName,
  getTargetParentByClassName,
  checkLogCount,
} from "../utils/utils.js";
import { store } from "../init.js";

const changeColumnNameEventHandler = (e) => {
  if (e.target.className === "column-header-title") {
    const targetColumn = e.target.closest("column-wrapper");
    const currentName = e.target.innerHTML;
  }
};

const columnAddBtnClickEventHandler = (e) => {
  if (e.target.className === "column-add-btn") {
    const targetColumn = getTargetParentByClassName(e.target, "column-wrapper");
    addClsssName(e.target, "active");
    targetColumn.innerHTML += newCardWrapper({ id: "newCardInput" });
    const addBtn = document.querySelector(".column-add-btn");
    addBtn.classList.add("active");
  }
};

const cardAddBtnClickEventHandler = (e) => {
  if (e.target.className === "card-add-btn") {
    const newCardInfor = {
      title: null,
      text: null,
      id: null,
    };
    const targetColumn = getTargetParentByClassName(e.target, "column-wrapper");
    const newCardInputEl = document.querySelector("#newCardInput");
    const columnName = targetColumn.querySelector("h2");
    const newInputData = [...newCardInputEl.children]
      .filter((v) => v.tagName === "INPUT")
      .map((v) => v.value);
    newCardInfor.title = newInputData[0];
    newCardInfor.text = newInputData[1];
    if (
      newCardInfor.title === null ||
      newCardInfor.title === "" ||
      newCardInfor.text === null ||
      newCardInfor.text === ""
    ) {
      document.querySelectorAll(".column-add-btn").forEach((v) => {
        if (v.classList.contains("active")) v.classList.remove("active");
      });
      deleteNode("#newCardInput");
      alert("please input all fields");
      return;
    }
    store.updateCardId();
    newCardInfor.id = "card-" + String(store.getCardId());
    const columnId = targetColumn.getAttribute("id");
    store.addItems({
      id: newCardInfor.id,
      standing: columnId,
      title: newInputData[0],
      contents: newCardInfor.text,
    });

    document.querySelectorAll(".column-add-btn").forEach((v) => {
      if (v.classList.contains("active")) v.classList.remove("active");
    });
    targetColumn.innerHTML += cardWrapper(newCardInfor);
    deleteNode("#newCardInput");
    document.querySelector(".log-wrapper").innerHTML += log(
      columnName.innerHTML,
      newCardInfor.title,
      "add"
    );
    checkLogCount(targetColumn, columnId);
  }
};

const cardCancelBtnClickEventHandler = (e) => {
  if (e.target.className === "card-cancel-btn") {
    document.querySelectorAll(".column-add-btn").forEach((v) => {
      if (v.classList.contains("active")) v.classList.remove("active");
    });
    deleteNode("#newCardInput");
  }
};

const cardRemoveHoverEventHandler = (e) => {
  if (e.target.className === "card-remove-btn") {
    const cardNode = e.target.closest(".card-wrapper");
    cardNode.classList.add("mouse-on");
  }
};

const cardRemoveOutEvenetHandler = (e) => {
  if (e.target.className === "card-remove-btn") {
    const cardNode = e.target.closest(".card-wrapper");
    cardNode.classList.remove("mouse-on");
  }
};

const cardRemoveClickEventHandler = (e) => {
  if (e.target.className === "card-remove-btn") {
    const cardNode = e.target.closest(".card-wrapper");
    const modalWrapperEl = document.querySelector(".modal-wrapper");
    const bodyEl = document.body;

    cardNode.classList.add("focused");
    cardNode.classList.add("clicked");
    modalWrapperEl.classList.add("active");
    bodyEl.classList.add("modal-display");
  }
};

const cardModificationEventHandler = (e) => {
  if (e.target.className === "card-wrapper") {
    e.target.innerHTML = fixCardWrapper({ title: "", text: "" });
    e.target.classList.add("fixing");
  }
};

const cardModificationCancelBtnHandler = (e) => {
  if (e.target.className === "card-fix-cancel-btn") {
    const cardEl = e.target.closest(".fixing");
    const cardId = cardEl.getAttribute("id");
    const originData = store.getDatas();
    const d = originData.find((ele) => ele.id === cardId);
    cardEl.innerHTML = fixedWrapper({ title: d.title, text: d.contents });
    cardEl.classList.remove("fixing");
  }
};

const cardModificationSubmittnHandler = (e) => {
  if (e.target.className === "card-fix-add-btn") {
    const cardEl = e.target.closest(".fixing");
    const cardId = cardEl.getAttribute("id");
    const newInputData = [...cardEl.children]
      .filter((v) => v.tagName === "INPUT")
      .map((v) => v.value);
    store.modifyData(cardId, newInputData[0], newInputData[1]);

    cardEl.innerHTML = fixedWrapper({
      title: newInputData[0],
      text: newInputData[1],
    });
    cardEl.classList.remove("fixing");
    console.log(store.getDatas());
  }
};

const addWholeColumnClickEventHandler = (e) => {
  const colNode = document.querySelector(".columns-wrapper");
  store.updateColumnId();
  colNode.innerHTML += newColumn({ id: store.getColumnId(), title: "냉무" });
};

const deleteWholeColumnClickEventHandler = (e) => {
  if (e.target.className === "column-remove-btn") {
    const targetColumn = getTargetParentByClassName(e.target, "column-wrapper");
    const columnId = targetColumn.getAttribute("id");
    if (columnId <= 2) {
      alert("You can't remove default Column!");
      return;
    }
    targetColumn.remove();
  }
};

const doubleClickEvent = () => {
  const columnsWrapperEl = document.querySelector(".columns-wrapper");
  columnsWrapperEl.addEventListener("dblclick", changeColumnNameEventHandler);
  columnsWrapperEl.addEventListener("dblclick", cardModificationEventHandler);
};

const columnEvent = () => {
  const columnsWrapperEl = document.querySelectorAll(".columns-wrapper");
  columnsWrapperEl.forEach((columnWrapper) => {
    columnWrapper.addEventListener("click", (e) => {
      columnAddBtnClickEventHandler(e);
      cardAddBtnClickEventHandler(e);
      cardCancelBtnClickEventHandler(e);
      cardRemoveClickEventHandler(e);
      deleteWholeColumnClickEventHandler(e);
      cardModificationCancelBtnHandler(e);
      cardModificationSubmittnHandler(e);
    });
  });
  columnsWrapperEl.forEach((removeBtn) => {
    removeBtn.addEventListener("mouseover", (e) => {
      cardRemoveHoverEventHandler(e);
    });
  });
  columnsWrapperEl.forEach((removeBtn) => {
    removeBtn.addEventListener("mouseout", (e) => {
      cardRemoveOutEvenetHandler(e);
    });
  });

  const columns = document.querySelector(".add-column-btn-wrapper");
  columns.addEventListener("click", addWholeColumnClickEventHandler);
};

const logBtnClickEvent = () => {
  document.querySelector(".chat-menu-btn").addEventListener("click", () => {
    document.querySelector(".log-wrapper").classList.toggle("hidden");
    document.querySelector(".chat-menu-btn").classList.toggle("hidden");
  });
};

export { columnEvent, logBtnClickEvent, doubleClickEvent };

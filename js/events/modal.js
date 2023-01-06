import {
  getTargetChild,
  checkLogCount,
  getTargetParentByClassName,
} from "../utils/utils.js";
import { log } from "../components/log.js";

const modalEvent = () => {
  const modalCancelBtnEl = document.querySelector(".modal-cancel-btn");
  const modalRemoveBtnEl = document.querySelector(".modal-remove-btn");
  modalRemoveBtnEl.addEventListener("click", removeBtnClickEventHandler);
  modalCancelBtnEl.addEventListener("click", cancelBtnClickEventHandler);
};

const removeBtnClickEventHandler = () => {
  const modalWrapperEl = document.querySelector(".modal-wrapper");
  const focusedCard = document.querySelector(".focused");
  const removedData = getTargetChild(focusedCard, "card-text").textContent;
  const bodyEl = document.querySelector(".modal-display");
  const wrapperEl = document.querySelector(".clicked");
  const columnWrapper = getTargetParentByClassName(
    focusedCard,
    "column-wrapper"
  );
  document.querySelector(".log-wrapper").innerHTML += log(
    getTargetChild(columnWrapper, "column-header-tittle").innerHTML,
    removedData,
    "remove"
  );
  bodyEl.classList.remove("modal-display");
  focusedCard.remove();
  modalWrapperEl.classList.remove("active");
  wrapperEl.classList.remove("clicked");

  checkLogCount(columnWrapper);
};

const cancelBtnClickEventHandler = () => {
  const modalWrapperEl = document.querySelector(".modal-wrapper");
  const bodyEl = document.querySelector(".modal-display");
  const wrapperEl = document.querySelector(".clicked");
  modalWrapperEl.classList.remove("active");
  bodyEl.classList.remove("modal-display");
  wrapperEl.classList.remove("clicked");
};

export { modalEvent, removeBtnClickEventHandler, cancelBtnClickEventHandler };

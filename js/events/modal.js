import {
  checkLogCount,
  getTargetParentByClassName,
  getElem,
} from "../utils/utils.js";
import { log } from "../components/log.js";

const modalEvent = () => {
  const modalCancelBtnEl = getElem(".modal-cancel-btn");
  const modalRemoveBtnEl = getElem(".modal-remove-btn");
  modalRemoveBtnEl.addEventListener("click", removeBtnClickEventHandler);
  modalCancelBtnEl.addEventListener("click", cancelBtnClickEventHandler);
};

const removeBtnClickEventHandler = () => {
  const modalWrapperEl = getElem(".modal-wrapper");
  const focusedCard = getElem(".focused");
  const removedData = getElem(".card-title", focusedCard).textContent;
  const bodyEl = document.body;
  const columnWrapper = getTargetParentByClassName(
    focusedCard,
    "column-wrapper"
  );
  getElem(".log-wrapper").innerHTML += log(
    getElem(".column-header-title", columnWrapper).innerHTML,
    removedData,
    "remove"
  );
  bodyEl.classList.remove("modal-display");
  focusedCard.remove();
  modalWrapperEl.classList.remove("active");

  checkLogCount(columnWrapper);
};

const cancelBtnClickEventHandler = () => {
  const modalWrapperEl = getElem(".modal-wrapper");
  const bodyEl = document.body;
  const wrapperEl = getElem(".clicked");
  modalWrapperEl.classList.remove("active");
  bodyEl.classList.remove("modal-display");
  wrapperEl.classList.remove("clicked");
};

export { modalEvent, removeBtnClickEventHandler, cancelBtnClickEventHandler };

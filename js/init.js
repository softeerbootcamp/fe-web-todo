import { columnEvent, logBtnClickEvent } from "./events/column.js";
import { modalEvent } from "./events/modal.js";

const init = () => {
  columnEvent();
  logBtnClickEvent();
  modalEvent();
};

init();

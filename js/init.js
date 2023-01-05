import { columnEvent } from "./events/column.js";
import { modalEvent } from "./events/modal.js";

const init = () => {
  columnEvent();
  modalEvent();
};

init();

import {
  columnEvent,
  logBtnClickEvent,
  doubleClickEvent,
} from "./events/column.js";
import { modalEvent } from "./events/modal.js";
import { Store } from "./store.js";

const init = () => {
  doubleClickEvent();
  columnEvent();
  logBtnClickEvent();
  modalEvent();
};

export const store = new Store();
store.addItems({
  id: "card-1",
  standing: "2",
  title: "card title",
  contents: "add, commit, push",
});
store.print();

init();

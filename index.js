import { updateToDoListUI, State, dummyState, card } from './store.js';
import { addNewColumn } from './View/ColumnView.js';
import {
  getNewCardComponent,
  pendingCardToColumn,
  getCardComponent,
} from './Components/Card.js';
const state = new State();
const $ = (select) => document.querySelector(select);

const btnHistoryTab = $('.todo-list-header-button');
const menu = $('menu');

btnHistoryTab.addEventListener('click', () => {
  menu.classList.remove('sidebar-hidden');
});
const btnHistoryClose = $('#btn-history-close');
btnHistoryClose.addEventListener('click', () => {
  menu.classList.add('sidebar-hidden');
});

//column 늘리기
const btnFAB = $('.fab');
btnFAB.addEventListener('click', addNewColumn.bind(null, state));

// const col = addNewColumn(state);
// const dummyCardComponent = getCardComponent(card);
// const dummyNewCardComponent = getNewCardComponent();
// const dummyCardComponent = getCardComponent(card);
// pendingCardToColumn(dummyCardComponent, col);
// pendingCardToColumn(dummyNewCardComponent, col);
// updateToDoListUI(state);

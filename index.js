import { State } from './store.js';
import { addNewColumn } from './View/ColumnView.js';
import { modalHide } from './Components/Modal.js';
import {
  getDeletingCard,
  revertDeletingState,
  cardCountingUpdate,
} from './Components/Card.js';
import { getCardIdxFromCard, getColumnIdxFromCard } from './util.js';
const state = new State();
const $ = select => document.querySelector(select);

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

//modal eventListener
const overlay = $('.overlay');
overlay.addEventListener('click', () => {
  modalHide();
  revertDeletingState();
});

const btnModalDeleteCancel = $('.modal-container').querySelector('.btn-normal');
btnModalDeleteCancel.addEventListener('click', () => {
  modalHide();
  revertDeletingState();
});

const btnModalDeleteAccent = $('.modal-container').querySelector('.btn-accent');
btnModalDeleteAccent.addEventListener('click', () => {
  const deletingCard = getDeletingCard();
  const columnIdx = getColumnIdxFromCard(deletingCard);
  const cardIdx = getCardIdxFromCard(deletingCard);
  deletingCard.remove();
  state.deleteCard(columnIdx, cardIdx);
  cardCountingUpdate(state, columnIdx);
  modalHide();
});

// updateToDoListUI(state);

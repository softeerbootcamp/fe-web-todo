import { updateToDoListUI, state, addNewColumn } from './store.js';
const $ = (select) => document.querySelector(select);
const $$ = (select) => document.querySelectorAll(select);

const historyTab = $('.history-container');
const btnHistoryTab = $('.todo-list-header-button');
const menu = $('menu');

btnHistoryTab.addEventListener('click', () => {
  menu.classList.remove('sidebar-hidden');
});

const btnHistoryClose = $('#btn-history-close');

//column 늘리기
const btnFAB = $('.fab');
btnFAB.addEventListener('click', addNewColumn.bind(null, state));

btnHistoryClose.addEventListener('click', () => {
  menu.classList.add('sidebar-hidden');
});

updateToDoListUI(state);

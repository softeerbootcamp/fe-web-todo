const $ = (select) => document.querySelector(select);

const historyTab = document.querySelector('.history-container');
const btnHistoryTab = document.querySelector('.todo-list-header-button');
const menu = document.querySelector('menu');
btnHistoryTab.addEventListener('click', () => {
  console.log(btnHistoryTab);
  menu.classList.remove('sidebar-hidden');
});

const btnHistoryClose = $('#btn-history-close');
btnHistoryClose.addEventListener('click', () => {
  menu.classList.add('sidebar-hidden');
});

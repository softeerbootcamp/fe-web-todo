import addTodos from './todos/addTodos.js';

const articleArr = document.querySelectorAll('article');
const addBtn = document.querySelectorAll('.button-add');
console.log(addBtn);

const todo = {
  title: '제목입니다',
  conent: '본문입니다',
  sub: '서브메시지',
};

// addBtn[0].addEventListener('click', () => {
//   console.log('실행!!!!!');
//   addTodos(articleArr[0], todo);
// });

const cardDeleteBtn = document.querySelector('.card-button-delete');

cardDeleteBtn.addEventListener('mouseover', (e) => {
  const $card = e.target.closest('.card');
  $card.classList.add('card-deletable');
});

cardDeleteBtn.addEventListener('mouseout', (e) => {
  const $card = e.target.closest('.card');
  $card.classList.remove('card-deletable');
});

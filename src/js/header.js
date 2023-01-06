const notice_ul = document.querySelector('.notice');
const menu_btn = document.querySelector('.menu');
const close_btn = document.querySelector('.close');

menu_btn.addEventListener('click', () => {
  notice_ul.classList.remove('hide');
  menu_btn.classList.add('hide');
});

close_btn.addEventListener('click', () => {
  notice_ul.classList.add('hide');
  menu_btn.classList.remove('hide');
});

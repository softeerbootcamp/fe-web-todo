import makeTodoForm from './makeTodoForm.js';
import modal from '../modal.js';

const clickEvents = () => {
  const $main = document.querySelector('main');
  const $modal = document.querySelector('.modal-background');

  $main.addEventListener('click', (e) => {
    const { className } = e.target;
    const firstClassName = className.split(' ')[0];

    switch (firstClassName) {
      case 'button-add':
        e.target.classList.add('add-active');
        const $section = e.target.closest('section');
        const $list = $section.childNodes[3];
        makeTodoForm($list);
        return;
      case 'card-button-delete':
        console.log($modal);
        $modal.classList.add('block');
        modal();
    }
  });
};

clickEvents();

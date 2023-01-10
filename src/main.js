import './styles/main.scss';

import { Todo } from '@/components';
import { Modal } from '@/components/common/index';

const $target = document.querySelector('.todo-main');

new Todo($target);
new Modal(document.body, { content: '상태 추가', type: 'input' }, 'insertAdjacentHTML');

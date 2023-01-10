import Component from '@/core/Component';
import { Button } from '@/components/common';
import { TodoStatus, Task } from '@/components';
import { getUser, getTaskCount, putTask } from '@/api/user';

export default class Todo extends Component {
  setup() {
    this.state = {};
  }

  template() {
    return `<div class="add-status-btn"></div>`;
  }

  async mounted() {
    const $btnTarget = this.$target.querySelector('.add-status-btn');
    const { status } = await getUser('jangoh');

    Object.keys(status).forEach((key) => new TodoStatus(this.$target, { status: key }, 'insertAdjacentHTML'));
    new Button($btnTarget, { className: 'add-status', disabled: false, content: '', type: 'button' });
  }

  setEvent() {
    const { addTask, setTaskContent, updateTaskContent } = this;

    this.addEvent('click', '[data-status]', (e) => addTask(e));
    this.addEvent('dblclick', '[data-task]', (e) => updateTaskContent(e));
    this.addEvent('submit', '[data-type=input-task]', (e) => setTaskContent(e));

    this.addEvent('click', '.add-status-btn', () => {
      document.querySelector('.modal-overlay').style.display = 'flex';
    });
  }

  async addTask(e) {
    const taskCount = await getTaskCount('jangoh').then((res) => res);
    const $statusTarget = e.target.closest('[data-status]');
    const $buttonTarget = e.target.closest('#add-task');
    const data = { title: '', content: '', loginedUser: 'jangoh', statusName: $statusTarget.dataset.status, taskId: taskCount + 1 };

    if ($buttonTarget) {
      new Task(
        $statusTarget,
        { taskTitle: '', taskContent: '', taskAuthor: '', taskData: '', active: false, taskId: taskCount + 1 },
        'insertAdjacentHTML',
      );
      await putTask(data);
    }
  }

  async setTaskContent(e) {
    e.preventDefault();

    const titleInput = e.target['title'].value;
    const contentInput = e.target['content'].value;
    const $statusTarget = e.target.closest('[data-status]');
    const $taskTarget = e.target.closest('[data-task]');

    const data = {
      title: titleInput,
      content: contentInput,
      loginedUser: 'jangoh',
      statusName: $statusTarget.dataset.status,
      taskId: $taskTarget.dataset.task,
    };

    await putTask(data);
  }

  async updateTaskContent(e) {
    e.preventDefault();

    const $statusTarget = e.target.closest('[data-status]');
    const $taskTarget = e.target.closest('[data-task]');

    console.log($statusTarget.dataset.status);
    await putTask({ loginedUser: 'jangoh', statusName: $statusTarget.dataset.status, taskId: $taskTarget.dataset.task });
  }
}

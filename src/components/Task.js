import Component from '@/core/Component';
import { Button } from '@/components/common';

export default class Task extends Component {
  setup() {
    this.state = {
      active: this.props.active,
    };
  }

  template() {
    return `
    <section class="todo-task" data-task=${this.props.taskId}>
    ${
      this.state.active
        ? `
          <div class="task-active">
            <div class="task-title">
              <p>${this.props.taskTitle}</p>
              <span id="delete-todo">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 12 12" fill="none">
                  <path
                    d="M1.5 11.25L0.75 10.5L5.25 6L0.75 1.5L1.5 0.75L6 5.25L10.5 0.75L11.25 1.5L6.75 6L11.25 10.5L10.5 11.25L6 6.75L1.5 11.25Z"
                    fill="#BDBDBD"
                  />
                </svg>
              </span>
            </div>
            <p class="task-content">${this.props.taskContent}</p>
            <p class="task-author">author by ${this.props.taskAuthor}</p>
          </div>
          `
        : `
          <form data-type="input-task">
            <input placeholder="제목을 입력하세요" name="title" required autofocus></input>
            <input placeholder="내용을 입력하세요" name="content" required></input>
            <div data-seq=${this.props.taskId} class="button"></div>
          </form>
          `
    }

    </section>
    `;
  }

  mounted() {
    if (!this.state.active) {
      let $buttonTarget = this.$target.querySelectorAll('.button');
      $buttonTarget = Array.prototype.filter.call($buttonTarget, (el) => parseInt(el.dataset.seq) === parseInt(this.props.taskId));

      new Button($buttonTarget[0], { content: '취소', className: 'btn-cancel', disabled: false, type: 'button' }, 'insertAdjacentHTML');
      new Button($buttonTarget[0], { content: '등록', className: 'btn-ok', disabled: false, type: 'submit' }, 'insertAdjacentHTML');
    }
  }
}

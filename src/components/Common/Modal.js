import Component from '@/core/Component';
import { Button } from '@/components/common';
import { TodoStatus } from '@/components';
import { patchStatus } from '@/api/user';

export default class Modal extends Component {
  setup() {
    this.state = {
      content: this.props.content,
      type: this.props.type,
    };
  }

  mounted() {
    let $button = this.$target.querySelector('[data-component=modal]');

    new Button($button, { content: '취소', className: 'btn-cancel', disabled: false, type: 'button' }, 'insertAdjacentHTML');
    new Button($button, { content: '등록', className: 'btn-ok', disabled: false, type: 'submit' }, 'insertAdjacentHTML');
  }

  setEvent() {
    const $target = document.querySelector('.todo-main');

    this.addEvent('submit', '[data-type=input]', (e) => {
      e.preventDefault();
      const titleInput = e.target['title'].value;

      document.querySelector('.modal-overlay').style.display = 'none';
      new TodoStatus($target, { status: titleInput }, 'insertAdjacentHTML');
      patchStatus('jangoh', titleInput);
      e.target.reset();
    });

    this.addEvent('click', '.btn-cancel', (e) => {
      const $input = document.querySelector('input[name="title"]');

      $input.value = $input.defaultValue;
      document.querySelector('.modal-overlay').style.display = 'none';
    });
  }

  template() {
    return `
    <section class="modal-overlay">
      <div class="modal-window">
        <p>${this.state.content}</p>
        <form data-type=${this.state.type}>
          ${this.state.type === 'input' && `<input type="text" name="title" placeholder="제목" required autofocus></input>`}
          <div data-component=modal class="button"></div>
        </form>
      </div>
    </section>`;
  }
}

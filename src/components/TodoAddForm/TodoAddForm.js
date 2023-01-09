import Component from "../../core/Component.js";

class TodoAddForm extends Component {
    initialize() {
        const { addCancel } = this.props;
        this.addEvent('keyup', '.todoaddfrom-name', this.checkInput.bind(this));
        this.addEvent('keyup', '.todoaddform-desc', this.checkInput.bind(this));
        this.addEvent('click', '.ok-btn', this.okClicked.bind(this));
        this.addEvent('click', '.cancel-btn', addCancel);
    }

    okClicked() {
        const { addTodo } = this.props;
        const $name = this.$target.querySelector('.todoaddform-name');
        const $desc = this.$target.querySelector('.todoaddform-desc');
        addTodo($name.value, $desc.value);
    }

    checkInput() {
        const $name = this.$target.querySelector('.todoaddform-name');
        const $desc = this.$target.querySelector('.todoaddform-desc');
        const $okBtn = this.$target.querySelector('.ok-btn');
        if ($name.value.length || $desc.value.length) {
            $okBtn.removeAttribute('disabled');
        } else {
            $okBtn.setAttribute('disabled', 'true');
        }
    }

    template() {
        return `
        <input class="todoaddform-name" type="text" placeholder="제목을 입력하세요">
        <textarea class="todoaddform-desc" placeholder="내용을 입력하세요"></textarea>
        <div>
            <button class="cancel-btn">취소</button>
            <button class="ok-btn" disabled>등록</button>
        </div>
        `
    }
}

export default TodoAddForm;
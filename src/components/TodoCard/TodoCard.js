import Component from "../../core/Component.js";
import TodoDatabase from "../../persistance/TodoDatabase.js";

class TodoCard extends Component {
    initialize() {
        const { todoId } = this.props;
        const todo = TodoDatabase.findTodoById(todoId);
        this.state = {
            todo: todo,
            isEdit: false
        }
        this.addEvent('dblclick', '.todocard-dblclick-area', this.startEdit.bind(this));
        this.addEvent('click', '.todocard-edit-cancel', this.cancelEdit.bind(this));
        this.addEvent('click', '.todocard-edit-ok', this.finishEdit.bind(this));
        this.addEvent('click', '.todocard-bgbtn', this.cancelEdit.bind(this));
    }

    startEdit() {
        this.setState({ isEdit: true });
    }

    cancelEdit() {
        this.setState({ isEdit: false });
    }

    finishEdit() {
        const $title = this.$target.querySelector('.todocard-title');
        const $desc = this.$target.querySelector('.todocard-desc');
        const newTodo = {
            ...this.state.todo,
            name: $title.value,
            description: $desc.value
        };
        this.setState({
            isEdit: false,
            todo: newTodo
        });
        TodoDatabase.updateTodo(newTodo);
    }

    template() {
        const { todo, isEdit } = this.state;
        return `
        ${isEdit ? `<button class="todocard-bgbtn"></button>`: ''}
        <div class="todocard-dblclick-area" ${!isEdit || 'style="z-index: 71"'}>
            <div class="todocard-header">
                <input class="todocard-title" value="${todo.name}" ${isEdit || 'disabled'}>
                <button class="todocard-delete" ${!isEdit || 'disabled'}>
                    <svg width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.5 11.25L0.75 10.5L5.25 6L0.75 1.5L1.5 0.750004L6 5.25L10.5 0.750004L11.25 1.5L6.75 6L11.25 10.5L10.5 11.25L6 6.75L1.5 11.25Z"/>
                    </svg>
                </button>            
            </div>
            <textarea class="todocard-desc" ${isEdit || 'disabled'}>${todo.description}</textarea>
            <div class="todocard-btn-area" style="${isEdit ? 'height: auto' : 'height: 0'}; overflow: hidden">
                <button class="todocard-edit-cancel">취소</button>
                <button class="todocard-edit-ok">수정</button>
            </div>        
        </div>
        `
    }

    mounted() {
        const $textarea = this.$target.querySelector('textarea');
        $textarea.style.height = `${$textarea.scrollHeight}px`;
    }
}

export default TodoCard;
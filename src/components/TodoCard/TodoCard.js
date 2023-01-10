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
        <div class="todocard-dblclick-area" draggable="true">
            <input class="todocard-title" value="${todo.name}" ${isEdit || 'disabled'}>
            <textarea class="todocard-desc" ${isEdit || 'disabled'}>${todo.description}</textarea>        
        </div>
        <div class="todocard-btn-area" style="${isEdit ? 'height: auto' : 'height: 0'}; overflow: hidden">
            <button class="todocard-edit-cancel">취소</button>
            <button class="todocard-edit-ok">수정</button>
        </div>
        `
    }
}

export default TodoCard;
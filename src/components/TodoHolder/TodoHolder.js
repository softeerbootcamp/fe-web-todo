import Component from "../../core/Component.js";
import TodoDatabase from "../../persistance/TodoDatabase.js";
import TodoCard from "../TodoCard/TodoCard.js";
import DoubleClickInput from "../DoubleClickInput/DoubleClickInput.js";
import TodoAddForm from "../TodoAddForm/TodoAddForm.js";

class TodoHolder extends Component {
    initialize() {
        const { columnId } = this.props;
        const todoIds = TodoDatabase.findTodoIdsByColumnId(columnId);
        this.state = {
            todoIds: todoIds
        }
        this.addEvent('click', '.add-todo-btn', this.addClick.bind(this));
    }

    addClick() {
        const $addForm = this.$target.querySelector('[data-component="TodoAddForm"]');
        const checked = !$addForm.toggleAttribute('hidden');
        const $button = this.$target.querySelector('.add-todo-btn');
        $button.style.fill = checked ? '#0075DE' : '#010101';
    }

    template() {
        const { todoIds } = this.state;
        return `
        <div class="todoholder-header">
            <div class="todoholder-colinfo">
                <div data-component="DoubleClickInput"></div>
                <div class="count-circle">
                    <h4>${todoIds.length}</h4>
                </div>
            </div>
            <div class="todoholder-headerbtn-wrapper">
                <button class="add-todo-btn">
                    <svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.105709 7.53033L0.105709 6.46967H6.46967V0.105713H7.53033V6.46967H13.8943V7.53033H7.53033V13.8943H6.46967V7.53033H0.105709Z"/>
                    </svg>
                </button>
                <button class="delete-column-btn">
                    <svg width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.5 11.25L0.75 10.5L5.25 6L0.75 1.5L1.5 0.750004L6 5.25L10.5 0.750004L11.25 1.5L6.75 6L11.25 10.5L10.5 11.25L6 6.75L1.5 11.25Z"/>
                    </svg>
                </button>        
            </div>
        </div>
        <article>
        <div data-component="TodoAddForm" hidden></div>
        ${todoIds.map(todoId => `
           <div data-component="TodoCard" data-todo-id="${todoId}"></div>
        `).join('')}
        </article>
        `
    }

    mounted() {
        const { columnId } = this.props;
        const column = TodoDatabase.findColumnById(columnId);

        const $doubleClickInput = this.$target.querySelector('[data-component="DoubleClickInput"]');
        new DoubleClickInput($doubleClickInput, {
            value: column.name,
            placeholder: '칼럼 이름을 입력하세요',
            onValueChanged: this.updateColumnName.bind(this)
        });

        const $todoAddForm = this.$target.querySelector('[data-component="TodoAddForm"]');
        const addTodo = this.addTodo.bind(this);
        new TodoAddForm($todoAddForm, {
            addTodo,
            addCancel: this.addClick.bind(this)
        });

        const $todoCards = this.$target.querySelectorAll(`[data-component="TodoCard"]`);
        $todoCards.forEach($todoCard => {
            const todoId = parseInt($todoCard.dataset.todoId);
            new TodoCard($todoCard, { todoId });
        });
    }

    addTodo(name, description) {
        const { columnId } = this.props;
        const newTodoId = TodoDatabase.addNewTodo(columnId, name, description);
        const newTodoIds = [ newTodoId, ...this.state.todoIds ];
        this.setState({ todoIds: newTodoIds });
    }

    updateColumnName(newName) {
        const { columnId } = this.props;
        TodoDatabase.updateColumnNameById(columnId, newName);
    }
}

export default TodoHolder;
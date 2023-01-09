import Component from "../../core/Component.js";
import TodoDatabase from "../../persistance/TodoDatabase.js";
import TodoCard from "../TodoCard/TodoCard.js";

class TodoHolder extends Component {
    template() {
        const { columnId } = this.props;
        const todoIds = TodoDatabase.findTodoIdsByColumnId(columnId);
        const column = TodoDatabase.findColumnById(columnId);
        return `
        <div class="todoholder-header">
            <div class="todoholder-colinfo">
                <h4>${column.name}</h4>
                <div class="count-circle">
                    <h4>${todoIds.length}</h4>
                </div>
            </div>
            <div class="todoholder-headerbtn-wrapper">
                <button class="add-todo-btn">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.105709 7.53033L0.105709 6.46967H6.46967V0.105713H7.53033V6.46967H13.8943V7.53033H7.53033V13.8943H6.46967V7.53033H0.105709Z" fill="black"/>
                    </svg>
                </button>
                <button class="delete-column-btn">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.5 11.25L0.75 10.5L5.25 6L0.75 1.5L1.5 0.750004L6 5.25L10.5 0.750004L11.25 1.5L6.75 6L11.25 10.5L10.5 11.25L6 6.75L1.5 11.25Z" fill="#010101"/>
                    </svg>
                </button>        
            </div>
        </div>
        <article>
        ${todoIds.map(todoId => `
           <div data-component="TodoCard" data-todo-id="${todoId}"></div>
        `).join('')}
        </article>
        `
    }

    mounted() {
        const $todoCards = this.$target.querySelectorAll(`[data-component="TodoCard"]`);
        $todoCards.forEach($todoCard => {
            const todoId = parseInt($todoCard.dataset.todoId);
            new TodoCard($todoCard, { todoId });
        });
    }
}

export default TodoHolder;
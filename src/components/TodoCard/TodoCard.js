import Component from "../../core/Component.js";
import TodoDatabase from "../../persistance/TodoDatabase.js";

class TodoCard extends Component {
    initialize() {
        const { todoId } = this.props;
        const todo = TodoDatabase.findTodoById(todoId);
        this.state = {
            todo: todo
        }
    }

    template() {
        const { todo } = this.state;
        return `
        ${todo.name}
        `
    }
}

export default TodoCard;
import Column from "../models/Column.js";
import Todo from "../models/Todo.js";

const database = {
    notifications: [
        {
            author: 'randomlee',
            name: 'test name',
            from: 'test col1',
            to: 'test col2',
            action: '등록',
            timestamp: 1673169047861,
            id: 0
        }
    ],
    columns: [
        {
            name: "Test Col",
            id: 0
        }
    ],
    todos: [
        {
            author: "randomlee",
            name: "test",
            description: "test test, test \n test test \n test! \n test!",
            columnId: 0,
            id: 0
        }
    ]
};



const TodoDatabase = {
    notify(notification) {
        this.notificationListener(notification);
        database.notifications.push(notification);
    },
    notificationListener() {},
    setNotificationListener(callback) {
        this.notificationListener = callback;
    },
    findAllNotificationIds() {
        return database.notifications.map(notification => notification.id);
    },
    findNotificationById(notificationId) {
        return database.notifications.find(notification => notification.id === notificationId);
    },
    findAllColumnIds() {
        return database.columns.map(column => column.id);
    },
    findColumnById(columnId) {
        return database.columns.find(column => column.id === columnId);
    },
    addNewColumn() {
        const column = { name: "New Column", id: Date.now() };
        database.columns.push(column);
        return column;
    },
    deleteColumnById(columnId) {
        const idx = database.columns.findIndex(column => column.id === columnId);
        database.columns.splice(idx, 1);
        return true;
    },
    findTodoById(todoId) {
        return database.todos.find(todo => todo.id === todoId);
    },
    findTodoIdsByColumnId(columnId) {
        return database.todos.filter(todo => todo.columnId === columnId)
            .map(todo => todo.id);
    }
}

export default TodoDatabase;
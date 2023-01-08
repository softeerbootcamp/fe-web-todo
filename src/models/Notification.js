class Notification {
    author;
    name;
    from;
    to;
    action;
    timestamp;
    id;

    static Builder = class {
        #obj = new Notification();
        addTodo(author, name, to) {
            this.#obj.action = Notification.actionTypes.add;
            this.#obj.author = author;
            this.#obj.name = name;
            this.#obj.to = to;
            return this;
        }
        moveTodo(author, name, from, to) {
            this.#obj.action = Notification.actionTypes.move;
            this.#obj.author = author;
            this.#obj.name = name;
            this.#obj.from = from;
            this.#obj.to = to;
            return this;
        }
        updateTodo(author, name, from) {
            this.#obj.action = Notification.actionTypes.update;
            this.#obj.author = author;
            this.#obj.name = name;
            this.#obj.from = from;
            return this;
        }
        deleteTodo(author, name, from) {
            this.#obj.action = Notification.actionTypes.delete;
            this.#obj.author = author;
            this.#obj.name = name;
            this.#obj.from = from;
            return this;
        }
        build() {
            this.#obj.id = Date.now();
            this.#obj.timestamp = Date.now();
            return this.#obj;
        }
    }

    static get actionTypes() {
        return {
            add: "등록",
            move: "이동",
            update: "수정",
            delete: "삭제"
        }
    }
}

export default Notification;
class Notification {
    author;
    name;
    from;
    to;
    action;
    timestamp;

    static Builder = class {
        #notification = new Notification();
        author(p) {
            this.#notification.author = p;
            return this;
        }
        name(p) {
            this.#notification.name = p;
            return this;
        }
        from(p) {
            this.#notification.from = p;
            return this;
        }
        to(p) {
            this.#notification.to = p;
            return this;
        }
        action(p) {
            this.#notification.action = p;
            return this;
        }
        timestamp(p) {
            this.#notification.timestamp = p;
            return this;
        }
        build() {
            return this.#notification
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
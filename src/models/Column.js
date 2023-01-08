class Column {
    name;
    id;

    static Builder = class {
        #obj = new Column();
        name(p) {
            this.#obj.name = p;
            return this;
        }
        build() {
            this.#obj.id = Date.now();
            return this.#obj;
        }
    }
}

export default Column;
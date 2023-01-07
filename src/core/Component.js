class Component {
    $target;
    props;
    state;
    constructor($target, props = {}) {
        this.$target = $target;
        this.props = props;
        this.initialize();
        this.#render();
    }
    initialize() {}
    mounted() {}
    template() {}

    addEvent(type, selector, listener) {
        const children = [...this.$target.querySelectorAll(selector)];
        const isTarget = ({ target }) => {
            return children.includes(target) || target.closest(selector);
        }
        this.$target.addEventListener(type, e => {
            if (!isTarget(e)) return false;
            return listener(e);
        });
    }

    setState (newState) {
        this.state = { ...this.state, ...newState };
        this.#render();
    }

    #render() {
        this.$target.innerHTML = this.template();
        this.mounted();
    }
}

export default Component;
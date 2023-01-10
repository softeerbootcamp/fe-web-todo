export default class Component {
  $target;
  props;
  state;
  innerType;

  constructor($target, props, innerType) {
    this.$target = $target;
    this.props = props;
    this.innerType = innerType;
    this.setup();
    this.render();
    this.setEvent();
  }

  setup() {}

  template() {
    return '';
  }

  mounted() {}

  render() {
    this.innerType === 'insertAdjacentHTML'
      ? this.$target.insertAdjacentHTML('beforeend', this.template())
      : (this.$target.innerHTML = this.template());

    this.mounted();
  }

  setEvent() {}

  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.render();
  }

  addEvent(eventType, selector, callback) {
    const children = [...this.$target.querySelectorAll(selector)];
    const isTarget = (target) => children.includes(target) || target.closest(selector);

    this.$target.addEventListener(eventType, (event) => {
      if (!isTarget(event.target)) return false;
      callback(event);
    });
  }
}

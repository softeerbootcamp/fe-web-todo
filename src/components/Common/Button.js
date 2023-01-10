import Component from '@/core/Component';

export default class Button extends Component {
  setup() {
    this.state = {
      disable: Boolean(this.props.disabled),
      content: this.props.content,
    };
  }

  template() {
    return `<button class="${this.props.className}" ${this.state.disable && 'disabled'} type=${this.props.type}>${this.state.content}</button>`;
  }
}

import Component from "../../core/Component.js";

class DoubleClickInput extends Component {
    initialize() {
        this.addEvent('dblclick', 'input', this.startEdit.bind(this));
        this.addEvent('focusout', 'input', this.endEdit.bind(this));
        this.addEvent('keyup', 'input', this.onKeyPress.bind(this));
    }

    startEdit() {
        const $input = this.$target.querySelector('input');
        const endPos = $input.value.length;
        $input.removeAttribute('readonly');
        $input.setSelectionRange(endPos, endPos);
        $input.focus();
    }

    endEdit() {
        const { value, onValueChanged } = this.props;
        const $input = this.$target.querySelector('input');
        $input.setAttribute('readonly', '');
        if ($input.value.length) {
            onValueChanged($input.value);
        } else {
            $input.value = value;
        }
        this.fitWidth();
    }

    onKeyPress(e) {
        const $input = this.$target.querySelector('input');
        if (e.keyCode === 13) {
            $input.blur();
        }
        this.fitWidth();
    }

    template() {
        const { value, placeholder } = this.props;
        return `
        <input type="text" class="double-click-input" value="${value}" placeholder="${placeholder}" onmousedown="return false;" readonly>
        `
    }

    fitWidth() {
        const $input = this.$target.querySelector('input');
        $input.style.width = '0';
        $input.style.width = `${$input.scrollWidth}px`;
    }

    mounted() {
        this.fitWidth();
    }
}

export default DoubleClickInput;
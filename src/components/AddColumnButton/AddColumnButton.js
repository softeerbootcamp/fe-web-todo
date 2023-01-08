import Component from "../../core/Component.js";

class AddColumnButton extends Component {
    initialize() {
        const { addColumn } = this.props;
        this.addEvent('click', '#add_col_btn', addColumn);
    }

    template() {
        return `
        <button id="add_col_btn">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.105709 7.53033L0.105709 6.46967H6.46967V0.105713H7.53033V6.46967H13.8943V7.53033H7.53033V13.8943H6.46967V7.53033H0.105709Z" fill="white"/>
            </svg>
        </button>
        `
    }
}

export default AddColumnButton;
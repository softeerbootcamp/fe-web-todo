import Component from "./core/Component.js";

class App extends Component {
    initialize() {
        this.state = {};
        this.setEvent();
    }

    template() {
        return `
        <h1>Hello, World</h1>
        <button class="app-btn">Click ME!</button>
        `;
    }

    setEvent() {
        this.addEvent('click', '.app-btn', e => {
            console.log(e);
            this.props.onClick();
        });
    }
}

export default App;
import Component from "./core/Component.js";
import Header from "./components/Header/Header.js";
import Notification from "./models/Notification.js";

class App extends Component {
    initialize() {
        this.state = {
            notifications: [
                new Notification.Builder()
                    .name('테스트투두')
                    .action(Notification.actionTypes.add)
                    .to('테스트칼럼')
                    .author('randomlee')
                    .timestamp(Date.now() - (60000 * 12))
                    .build(),
                new Notification.Builder()
                    .name('테스트투두')
                    .action(Notification.actionTypes.add)
                    .to('테스트칼럼')
                    .author('randomlee')
                    .timestamp(Date.now() - (60000 * 20))
                    .build(),
                new Notification.Builder()
                    .name('테스트투두')
                    .action(Notification.actionTypes.add)
                    .to('테스트칼럼')
                    .author('randomlee')
                    .timestamp(Date.now() - (60000 * 30))
                    .build()
            ]
        };
    }

    template() {
        return `
        <div data-component="Header"></div>
        `;
    }

    mounted() {
        const $header = this.$target.querySelector('[data-component="Header"]');
        const notifications = [...this.state.notifications];
        new Header($header, { notifications });
    }
}

export default App;
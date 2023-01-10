import Component from "../../core/Component.js";
import NotificationCard from "../NotificationCard/NotificationCard.js";
import TodoDatabase from "../../persistance/TodoDatabase.js";

class Header extends Component {
    initialize() {
        this.state = {
            notificationIds: TodoDatabase.findAllNotificationIds()
        }
        this.addEvent('click', '#sidebar_open_btn', this.openSidebar.bind(this));
        this.addEvent('click', '#sidebar_close_btn, #sidebar_bgbtn', this.closeSidebar.bind(this));
        TodoDatabase.setNotificationListener(this.addNotification.bind(this));
    }

    addNotification(notification) {
        const newNotificationIds = [ notification.id, ...this.state.notificationIds ];
        this.setState({ ...this.state, notificationIds: newNotificationIds });
    }

    openSidebar() {
        const $sidebar = this.$target.querySelector('#sidebar_wrapper');
        $sidebar.classList.add('sidebar-opened');
    }

    closeSidebar() {
        const $sidebar = this.$target.querySelector('#sidebar_wrapper');
        $sidebar.classList.remove('sidebar-opened');
    }

    template() {
        return `
        <h1>TO-DO LIST</h1>
        <button id="sidebar_open_btn">
            <svg width="17" height="11" viewBox="0 0 17 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 1V0H17V1H0ZM17 5V6H0V5H17ZM0 10H17V11H0V10Z" fill="#010101"/>
            </svg>
        </button>
        <div id="sidebar_wrapper">
            <button id="sidebar_bgbtn"></button>
            <div id="sidebar">
                <header>
                    <button class="close-button-black" id="sidebar_close_btn">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.5 11.25L0.75 10.5L5.25 6L0.75 1.5L1.5 0.750004L6 5.25L10.5 0.750004L11.25 1.5L6.75 6L11.25 10.5L10.5 11.25L6 6.75L1.5 11.25Z" fill="#010101"/>
                        </svg>
                    </button>            
                </header>
                <ul>
                ${this.state.notificationIds.map(notificationId =>
                    `<li data-component="NotificationCard" data-notification-id="${notificationId}"></li>`
                ).join('')}       
                </ul>
            </div>
        </div>
        `;
    }

    mounted() {
        const $notificationCards = this.$target.querySelectorAll('[data-component="NotificationCard"]');
        $notificationCards.forEach($notificationCard => {
            const notificationId = parseInt($notificationCard.dataset.notificationId);
            new NotificationCard($notificationCard, { notificationId });
        });
    }
}

export default Header;
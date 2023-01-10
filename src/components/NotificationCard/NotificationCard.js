import Component from "../../core/Component.js";
import Notification from "../../models/Notification.js"
import TodoDatabase from "../../persistance/TodoDatabase.js";

class NotificationCard extends Component {
    initialize() {
        const { notificationId } = this.props;
        const notification = TodoDatabase.findNotificationById(notificationId);
        this.state = {
            timeDeltaMin: NotificationCard.calcDeltaMin(notification),
            notification
        }
        this.refreshAuto();
    }

    refreshAuto() {
        const isConnected = this.$target.isConnected;
        const { notification } = this.state;
        if (isConnected) {
            setTimeout(() => {
                this.setState({ timeDeltaMin:
                        NotificationCard.calcDeltaMin(notification) });
                this.refreshAuto();
            }, 60000);
        }
    }

    static calcDeltaMin(notification) {
        return Math.floor((Date.now() - notification.timestamp) / 60000);
    }

    template() {
        const { timeDeltaMin, notification } = { ...this.state };
        const spanInner = this.getSpanInnerText();
        return `
        <div>🥳</div>
        <div>
            <h4>@${notification.author}</h4>
            <span>${spanInner}</span>
            <p>${timeDeltaMin}분 전</p>
        </div>
        `;
    }

    getSpanInnerText() {
        const actionTypes = Notification.actionTypes;
        const { notification } = this.state;
        let spanInner;
        switch (notification.action) {
            case actionTypes.add:
                spanInner = `<b>${notification.to}</b>에 <b>${notification.name}</b>을 등록하였습니다.`
                break;
            case actionTypes.delete:
                spanInner = `<b>${notification.from}</b>에서 <b>${notification.name}</b>을 삭제하였습니다.`
                break;
            case actionTypes.move:
                spanInner = `<b>${notification.name}</b>을 <b>${notification.from}</b>에서 <b>${notification.to}</b>으로 이동하였습니다.`
                break;
            case actionTypes.update:
                spanInner = `<b>${notification.from}</b>를 <b>${notification.to}</b>으로 수정하였습니다.`
                break;
        }
        return spanInner;
    }
}

export default NotificationCard;
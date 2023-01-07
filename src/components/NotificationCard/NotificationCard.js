import Component from "../../core/Component.js";
import Notification from "../../models/Notification.js"

class NotificationCard extends Component {
    initialize() {
        this.state = {
            timeDeltaMin: this.calcDeltaMin()
        }
        this.refreshAuto();
    }

    refreshAuto() {
        const isConnected = this.$target.isConnected;
        if (isConnected) {
            setTimeout(() => {
                this.setState({ timeDeltaMin: this.calcDeltaMin() })
                this.refreshAuto();
            }, 60000);
        }
    }

    calcDeltaMin() {
        const { notification } = this.props;
        return Math.floor((Date.now() - notification.timestamp) / 60000);
    }

    template() {
        const { notification } = this.props;
        const { timeDeltaMin } = { ...this.state };
        const spanInner = this.getSpanInnerText(notification);
        return `
        <div>🥳</div>
        <div>
            <h4>@${notification.author}</h4>
            <span>${spanInner}</span>
            <p>${timeDeltaMin}분 전</p>
        </div>
        `;
    }

    getSpanInnerText(notification) {
        const actionTypes = Notification.actionTypes;
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
                spanInner = `<b>${notification.from}</b>의 <b>${notification.name}</b>을 수정하였습니다.`
                break;
        }
        return spanInner;
    }
}

export default NotificationCard;
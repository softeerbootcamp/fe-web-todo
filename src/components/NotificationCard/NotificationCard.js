import Component from "../../core/Component.js";
import Notification from "../../models/Notification.js"

class NotificationCard extends Component {
    template() {
        const { notification } = this.props;
        const spanInner = this.getSpanInnerText(notification);
        const timeDeltaMin = notification.calcDeltaMin();
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
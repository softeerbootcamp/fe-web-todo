class Notification {
    static get actionTypes() {
        return {
            add: "등록",
            move: "이동",
            update: "수정",
            delete: "삭제"
        }
    }
}

export default Notification;
class IDManger {
    #ID

    setID(newID) {
        this.#ID = newID
    }

    getID() {
        return this.#ID
    }

    // id 부여 방식 현재는 임시
    // 추후 수정 필요
    id = 100
    giveCardID() {
        this.id += 1
        return this.id;
    }
}

const manager = new IDManger();

export {manager}
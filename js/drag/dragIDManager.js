class DragIDManager {
    #ID = 0
    movedCardID = 0

    setCurrentCardID(cardID) {
        this.movedCardID = cardID
    }

    getCurrentCardID() {
        return this.movedCardID
    }

    getNewID() {
        this.#ID += 1
        
        return this.#ID
    }
}

const dragIDManager = new DragIDManager();

export { dragIDManager }
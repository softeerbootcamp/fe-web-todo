class Store {
  #datas = [];
  #columnId;
  #cardId;
  constructor() {
    this.#datas = [];
    this.#columnId = 2;
    this.#cardId = 1;
  }
  //문제는 standing에 대한 처리를 어떻게 할 것인가?
  //standing에 대한 처리가 가장 애매한 것 같다. Column이 새로 추가된다면
  //standing을 번호로 받을까? 이거를 id로 컨트롤 한다면 standing에 대한 처리가 엄청 쉬워질 것 같은데?
  addItems({ id, standing, title, contents }) {
    const obj = {
      id,
      standing,
      title,
      contents,
      time: generateTime(),
      status: true,
    };
    this.#datas.push(obj);
  }

  findObjectById(id) {
    console.log("argument is : " + id);
    return this.#datas.filter((elem) => {
      elem.id === id;
    });
  }

  modifyData(id, title, contents) {
    const idx = this.#datas.findIndex((ele) => ele.id === id);
    this.#datas[idx] = {
      ...this.#datas[idx],
      title,
      contents,
    };
  }

  getDatas() {
    return this.#datas;
  }

  getStandingList(standing) {
    return this.#datas.filter((data) => data.standing === standing);
  }

  updateCardId() {
    this.#cardId = this.#cardId + 1;
  }

  getCardId() {
    return this.#cardId;
  }

  updateColumnId() {
    this.#columnId = this.#columnId + 1;
  }

  getColumnId() {
    return this.#columnId;
  }
  //임시 출력 메소드
  print() {
    console.log(this.#datas);
    console.log(this.#cardId, "cardId");
    console.log(this.#columnId, "colId");
  }
}

const generateTime = () => {
  const date = new Date();
  return date.getMinutes();
};

export { Store };

import { getColumnComponent } from './Components/Column.js';
class State {
  #columns = [];
  #history = [];
  constructor(state = { columns: [], history: [] }) {
    this.#columns = state.columns;
    this.#history = state.history;
  }
  deleteColumn(idx) {
    this.#columns.splice(idx, 1);
  }
  getAddingCardState(idx) {
    return this.#columns[idx].addingState;
  }
  toggleAddingState(idx) {
    this.#columns[idx].addingState = !this.#columns[idx].addingState;
  }
  addColumn(column) {
    this.#columns.unshift(column);
  }
  getState() {
    return { column: this.#columns, history: this.#history };
  }
  addCardData(columnIdx, cardData) {
    this.#columns[columnIdx].cards.unshift(cardData);
  }
  getNumOfCards(columnIdx) {
    return this.#columns[columnIdx].cards.length;
  }
}
export { State };

export const card = {
  title: 'gitHub 공부하기',
  details: ['gitbub 공부내용', 'gitbub 공부내용'],
  footer: 'author by web',
};

export const column = {
  title: '해야할 일',
  cards: [card, card, card],
  addingState: false,
};

export const dummyState = {
  columns: [column],
  history: [],
};

export const updateToDoListUI = (state) => {
  const $ = (select) => document.querySelector(select);
  const todoListBodyContainer = $('.todo-list-body-container');
  todoListBodyContainer.innerHTML = '';
  console.log(state);
  state.columns.forEach((ele) => {
    todoListBodyContainer.prepend(getColumnComponent(ele));
  });

  const btnDeleteColumns = document.querySelectorAll('.column-btn-x');
  btnDeleteColumns.forEach((btnDeleteColumn) => {
    btnDeleteColumn.addEventListener('click', (e) => {
      const idx = nthChild(btnDeleteColumns, e.currentTarget);

      deleteColumn(state, idx);
      updateToDoListUI(state);
    });
  });

  const btnAddCards = document.querySelectorAll('.column-btn-plus');
  btnAddCards.forEach((btnAddCard) => {
    btnAddCard.addEventListener('click', (e) => {
      const columnContainer = e.currentTarget.parentNode.parentNode.parentNode;
      const idx = nthChild(btnAddCards, e.currentTarget);
      const addingState = state.columns[idx].addingState;
      const newCard = columnContainer.firstChild.nextElementSibling;
      if (addingState) {
        newCard.remove();
      }
      if (!addingState) {
        if (columnContainer.childElementCount === 1) {
          columnContainer.append(getNewCardComponent());
        } else {
          columnContainer.insertBefore(
            getNewCardComponent(),
            newCard.nextSibling
          );
        }
      }
      state.columns[idx].addingState = !addingState;
    });
  });
};

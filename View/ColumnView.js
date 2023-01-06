import { getColumnComponent } from '../Components/Column.js';
import {
  getNewCardComponent,
  pendingCardToColumn,
} from '../Components/Card.js';
import { attachNewCardEvent } from '../Event/CardEvent.js';
const nthChild = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
};

export const addNewColumn = (state) => {
  const bodyContainer = document.querySelector('.todo-list-body-container');
  const columnData = {
    title: '제목 없음',
    cards: [],
    addingState: false,
  };
  const columnComponent = getColumnComponent(columnData);
  bodyContainer.prepend(columnComponent);
  state.addColumn(columnData);
  attachColumnEvent(state, columnComponent);
  return columnComponent;
};

const attachColumnEvent = (state, columnComponent) => {
  const btnDeleteColumn = columnComponent.querySelector('.column-btn-x');
  btnDeleteColumn.addEventListener('click', () => {
    const btnDeleteColumns = document.querySelectorAll('.column-btn-x');
    const idx = nthChild(btnDeleteColumns, btnDeleteColumn);
    state.deleteColumn(idx);
    columnComponent.remove();
  });

  const btnAddCard = columnComponent.querySelector('.column-btn-plus');
  btnAddCard.addEventListener('click', () => {
    const btnAddCards = document.querySelectorAll('.column-btn-plus');
    const idx = nthChild(btnAddCards, btnAddCard);

    const addingState = state.getAddingCardState(idx);
    const newCard = columnComponent.firstChild.nextElementSibling;
    if (addingState) {
      newCard.remove();
    }
    if (!addingState) {
      const newCardComponent = getNewCardComponent();
      pendingCardToColumn(newCardComponent, columnComponent);
      attachNewCardEvent(newCardComponent, state, idx);
    }
    state.toggleAddingState(idx);
  });
};

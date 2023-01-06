import { getColumnComponent } from '../Components/Column.js';
import { getColumnIdxFromColumn } from '../util.js';
import {
  getNewCardComponent,
  pendingCardToColumn,
} from '../Components/Card.js';
import { attachNewCardEvent } from '../Event/CardEvent.js';

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
  const columnIdx = getColumnIdxFromColumn(columnComponent);
  btnDeleteColumn.addEventListener('click', () => {
    state.deleteColumn(columnIdx);
    columnComponent.remove();
  });

  const btnAddCard = columnComponent.querySelector('.column-btn-plus');
  btnAddCard.addEventListener('click', () => {
    const addingState = state.getAddingCardState(columnIdx);
    const newCard = columnComponent.firstChild.nextElementSibling;
    if (addingState) newCard.remove();
    if (!addingState) {
      const newCardComponent = getNewCardComponent();
      pendingCardToColumn(newCardComponent, columnComponent);
      attachNewCardEvent(newCardComponent, state, columnIdx);
    }
    state.toggleAddingState(columnIdx);
  });
};

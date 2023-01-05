import { getColumnComponent } from '../Components/Column.js';
import { getNewCardComponent } from '../Components/Card.js';

const nthChild = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
};

const deleteColumn = (state, idx) => {
  state.columns.splice(idx, 1);
};

export const addNewColumn = state => {
  const bodyContainer = document.querySelector('.todo-list-body-container');
  const columnData = {
    title: '제목 없음',
    cards: [],
    addingState: false,
  };
  const columnComponent = getColumnComponent(columnData);
  bodyContainer.prepend(columnComponent);
  state.columns.unshift(columnData);
  attachColumnEvent(state, columnComponent);
};

const attachColumnEvent = (state, columnComponent) => {
  const btnDeleteColumn = columnComponent.querySelector('.column-btn-x');
  btnDeleteColumn.addEventListener('click', () => {
    const btnDeleteColumns = document.querySelectorAll('.column-btn-x');
    const idx = nthChild(btnDeleteColumns, btnDeleteColumn);
    deleteColumn(state, idx);
    columnComponent.remove();
  });

  const btnAddCard = columnComponent.querySelector('.column-btn-plus');
  btnAddCard.addEventListener('click', e => {
    const btnAddCards = document.querySelectorAll('.column-btn-plus');
    const idx = nthChild(btnAddCards, btnAddCard);

    const addingState = state.columns[idx].addingState;
    const newCard = columnComponent.firstChild.nextElementSibling;
    if (addingState) {
      newCard.remove();
    }
    if (!addingState) {
      if (columnComponent.childElementCount === 1) {
        columnComponent.append(getNewCardComponent());
      } else {
        columnComponent.insertBefore(
          getNewCardComponent(),
          newCard.nextSibling
        );
      }
    }
    state.columns[idx].addingState = !addingState;
  });
};

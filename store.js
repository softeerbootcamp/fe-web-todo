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

export const state = {
  columns: [],
  history: [],
};
const getNewCardComponent = () => {
  const node = document.createElement('div');
  node.classList.add('todo-list-contents-container');
  node.classList.add('content-new');
  node.innerHTML = `
              <div class="todo-list-contents-header-container">
              <input
                class="todo-list-contents-header-text"
                placeholder="제목을 입력하세요"
              />
            </div>
            <input
              class="todo-list-contents-desc-container"
              placeholder="내용을 입력하세요"
            />
            <div class="todo-list-new-contents-btn-container">
              <button class="btn btn-normal">취소</button>
              <button class="btn btn-accent">등록</button>
            </div>`;
  return node;
};

export const getCardComponent = cardData => {
  const datails =
    cardData.details?.reduce((acc, cur) => acc + `<li>${cur}</li>`, '') || '';
  return `
    <div class="todo-list-contents-container">
              <div class="todo-list-contents-header-container">
                <div class="todo-list-contents-header-text">
                  ${cardData.title}
                </div>
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                  >
                    <path
                      d="M1.5 11.25L0.75 10.5L5.25 6L0.75 1.5L1.5 0.75L6 5.25L10.5 0.75L11.25 1.5L6.75 6L11.25 10.5L10.5 11.25L6 6.75L1.5 11.25Z"
                      fill="#828282"
                    />
                  </svg>
                </button>
              </div>
              <ul class="todo-list-contents-desc-container">
              ${datails}
              </ul>
              <div class="todo-list-contents-footer">${cardData.footer}</div>
            </div>
    `;
};

export const getColumnComponent = column => {
  const cards = column.cards.reduce(
    (acc, cur) => acc + getCardComponent(cur),
    ''
  );
  const node = document.createElement('div');
  node.classList.add('todo-list-column-container');
  node.innerHTML = `<div class="todo-list-column-header-container">
                <div class="todo-list-column-left">
                  <div class="todo-list-column-header-text">${column.title}</div>
                  <div class="todo-list-column-count-container">
                    <div class="todo-list-count">${column.cards.length}</div>
                  </div>
                </div>
                <div class="todo-list-column-button-container">
                  <button class="column-btn column-btn-plus">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                    >
                      <path
                        d="M0.105713 7.53033L0.105713 6.46967H6.46967V0.105713H7.53033V6.46967H13.8943V7.53033H7.53033V13.8943H6.46967V7.53033H0.105713Z"
                        fill="#BDBDBD"
                      />
                    </svg>
                  </button>
                  <button class="column-btn column-btn-x">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                    >
                      <path
                        d="M1.5 11.25L0.75 10.5L5.25 6L0.75 1.5L1.5 0.75L6 5.25L10.5 0.75L11.25 1.5L6.75 6L11.25 10.5L10.5 11.25L6 6.75L1.5 11.25Z"
                        fill="#BDBDBD"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              ${cards}`;
  return node;
};

export const updateToDoListUI = state => {
  const $ = select => document.querySelector(select);
  const todoListBodyContainer = $('.todo-list-body-container');
  todoListBodyContainer.innerHTML = '';
  state.columns.forEach(ele => {
    todoListBodyContainer.prepend(getColumnComponent(ele));
  });

  const btnDeleteColumns = document.querySelectorAll('.column-btn-x');
  btnDeleteColumns.forEach(btnDeleteColumn => {
    btnDeleteColumn.addEventListener('click', e => {
      const idx = nthChild(btnDeleteColumns, e.currentTarget);

      deleteColumn(state, idx);
      updateToDoListUI(state);
    });
  });

  const btnAddCards = document.querySelectorAll('.column-btn-plus');
  btnAddCards.forEach(btnAddCard => {
    btnAddCard.addEventListener('click', e => {
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

import { attachNewCardEvent } from '../Event/CardEvent.js';
export const pendingCardToColumn = (cardComponent, columnComponent) => {
  const columnHeaderComponent = columnComponent.firstElementChild;
  columnHeaderComponent.insertAfter(cardComponent);
};

export const getNewCardComponent = () => {
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

export const getCardComponent = (cardData) => {
  const node = document.createElement('div');
  const datails =
    cardData.details?.reduce((acc, cur) => acc + `<li>${cur}</li>`, '') || '';
  node.classList.add('todo-list-contents-container');
  node.innerHTML = `
                <div class="todo-list-contents-header-container">
                <div class="todo-list-contents-header-text">
                  ${cardData.title}
                </div>
                <button class="btn-card-x">
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
  `;
  return node;
};

export const revertDeletingState = () => {
  const deletingCard = getDeletingCard();
  deletingCard.classList.remove('content-delete');
};

export const getDeletingCard = () => {
  const card = document.querySelector('.content-delete');
  return card;
};

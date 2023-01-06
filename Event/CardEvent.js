import { getCardComponent, pendingCardToColumn } from '../Components/Card.js';
import { modalShow } from '../Components/Modal.js';
export const attachNewCardEvent = (newCardComponent, state, idx) => {
  const btnCancel = newCardComponent.querySelector('.btn-normal');
  const btnAccent = newCardComponent.querySelector('.btn-accent');
  const columnComponent = newCardComponent.closest(
    '.todo-list-column-container'
  );
  btnCancel.addEventListener('click', () => {
    newCardComponent.remove();
    state.toggleAddingState(idx);
  });
  btnAccent.addEventListener('click', () => {
    const title = newCardComponent.querySelector(
      '.todo-list-contents-header-text'
    ).value;
    const desc = newCardComponent.querySelector(
      '.todo-list-contents-desc-container'
    ).value;
    const cardData = {
      title,
      details: [desc],
      footer: 'author by web',
    };
    const cardComponent = getCardComponent(cardData);
    attachCardEvent(cardComponent);
    pendingCardToColumn(cardComponent, columnComponent);
    newCardComponent.remove();
    state.toggleAddingState(idx);
    state.addCardData(idx, cardData);

    const countingCard = document.querySelectorAll('.todo-list-count');
    const columnCountComponent = countingCard[idx];
    columnCountComponent.textContent = state.getNumOfCards(idx);
  });
};

const attachCardEvent = (cardComponent) => {
  const btnCancel = cardComponent.querySelector('.btn-card-x');
  btnCancel.addEventListener('mouseover', () => {
    cardComponent.classList.add('content-delete');
  });
  btnCancel.addEventListener('mouseout', () => {
    cardComponent.classList.remove('content-delete');
  });
  btnCancel.addEventListener('click', () => {
    //modal show
    modalShow();
  });
};

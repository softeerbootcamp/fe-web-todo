export const modalShow = () => {
  const modalContainer = document.querySelector('.modal-container');
  modalContainer.classList.remove('modal-hidden');
};

export const modalHide = () => {
  const modalContainer = document.querySelector('.modal-container');
  modalContainer.classList.add('modal-hidden');
};

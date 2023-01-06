const modal = (card) => {
  const $modal = document.querySelector('.modal-background');
  const cancelBtn = document.querySelector('.modal-cancel');
  const deleteBtn = document.querySelector('.modal-delete');

  cancelBtn.addEventListener('click', () => {
    $modal.classList.remove('block');
  });
};

export default modal;

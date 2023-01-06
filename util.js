Object.prototype.insertAfter = function (newNode) {
  if (!!this.nextSibling) {
    this.parentNode.insertBefore(newNode, this.nextSibling);
  } else {
    this.parentNode.appendChild(newNode);
  }
};

export const getColumnIdxFromCard = (cardComponent) => {
  const columnComponent = cardComponent.closest('.todo-list-column-container');
  return getColumnIdxFromColumn(columnComponent);
};

export const getColumnIdxFromColumn = (columnComponent) => {
  const columnComponents = document.querySelectorAll(
    '.todo-list-column-container'
  );
  return nthChild(columnComponents, columnComponent);
};

export const getCardIdxFromCard = (cardComponent) => {
  const columnComponent = cardComponent.closest('.todo-list-column-container');
  const cardComponents = columnComponent.querySelectorAll(
    '.todo-list-contents-container'
  );
  return nthChild(cardComponents, cardComponent);
};

export const nthChild = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
};

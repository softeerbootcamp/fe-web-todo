import { store } from "../init.js";

const getTargetParentByClassName = (node, className) => {
  if (node) {
    let current = node;
    while (current !== document.body) {
      if (current.className === className) return current;
      current = current.parentNode;
    }
    return false;
  }
};

const getTargetChild = (start = document.body, target) => {
  const queue = [start];
  const visited = {};
  visited[start] = true;

  while (queue.length) {
    for (let i = 0; i < queue.length; i++) {
      const parent = queue.shift();
      for (const child of parent.childNodes) {
        if (String(child.className).includes(target)) return child;
        else {
          visited[child] = true;
          queue.push(child);
        }
      }
    }
  }
  return null;
};

const deleteNode = (query) => {
  document.querySelector(`${query}`).remove();
};

const addClsssName = (node, className) => {
  node.classList.add(className);
};

const checkLogCount = (targetColumn, columnId) => {
  const activeList = store.getStandingList(columnId);
  const activeListNum = activeList.filter(
    (elem) => elem.status === true
  ).length;
  const targetChild = getTargetChild(targetColumn, "column-header-num");
  targetChild.innerHTML = activeListNum;
};

const traverse = (node, selector) => {
  if (node === null) return;
  if (node.classList.contains(selector)) {
    return node;
  }
  for (let child in node.child) {
    traverse(child);
  }
};

const myQuerySelector = (selector) => {
  if (selector === null) return;
};

const myQuerySelectorAll = () => {};

export {
  getTargetParentByClassName,
  deleteNode,
  addClsssName,
  getTargetChild,
  checkLogCount,
};

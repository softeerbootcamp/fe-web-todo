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

const elementSeparator = (attr) => {
  const firstChar = attr.charAt(0);
  const sliced = attr.slice(1);
  if (firstChar === ".") return { toFind: "class", attr: sliced };
  if (firstChar === "#") return { toFind: "id", attr: sliced };
  return { toFind: "tagName", attr };
};

const getElems = (start = document.body, attributes) => {
  const { toFind, attr } = elementSeparator(attributes);
  const elementsArr = [];
  const queue = [start];
  const visited = {};
  visited[start] = true;
  while (queue.length) {
    for (let i = 0; i < queue.length; i = i + 1) {
      const parent = queue.shift();
      for (const child of parent.children) {
        if (String(child.getAttribute(toFind)).includes(attr))
          elementsArr.push(child);
        else {
          visited[child] = true;
          queue.push(child);
        }
      }
    }
  }
  return elementsArr.length === 0 ? null : elementsArr;
};

const getElem = (start = document.body, attributes) => {
  const { toFind, attr } = elementSeparator(attributes);
  const queue = [start];
  const visited = {};
  visited[start] = true;
  while (queue.length) {
    for (let i = 0; i < queue.length; i = i + 1) {
      const parent = queue.shift();
      for (const child of parent.children) {
        if (String(child.getAttribute(toFind)).includes(attr)) return child;
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
  const targetChild = getElem(targetColumn, ".column-header-num");
  targetChild.innerHTML = activeListNum;
};

export {
  getTargetParentByClassName,
  deleteNode,
  addClsssName,
  checkLogCount,
  getElem,
  getElems,
};

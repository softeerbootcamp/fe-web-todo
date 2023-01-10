import { store } from "../init.js";

const getTargetParentByClassName = (node, className) => {
  if (node) {
    let current = node;
    while (current !== document.body) {
      if (current.className.includes(className)) return current;
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
  return { toFind: "tagname", attr };
};

const getElems = (attributes, start = document.body) => {
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

const getElem = (attributes, start = document.body) => {
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
  return "not found";
};

const deleteNode = (query) => {
  getElem(`${query}`).remove();
};

const addClsssName = (node, className) => {
  node.classList.add(className);
};

const checkLogCount = (targetColumn, columnId) => {
  const activeList = store.getStandingList(columnId);
  const activeListNum = activeList.filter(
    (elem) => elem.status === true
  ).length;
  const targetChild = getElem(".column-header-num", targetColumn);
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

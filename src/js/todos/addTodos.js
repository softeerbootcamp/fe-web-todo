const addTodos = (target, todo) => {
  const $list = target;
  const { title, content, sub } = todo;

  $list.insertAdjacentHTML(
    'afterbegin',
    `
    <div class="card" draggable="true">
      <div class="content">
        <div class="big-text">${title}</div>
        <div class="middle-text">${content}</div>
        <div class="small-text">${sub}</div>
      </div>
      <div class="button">
        <span
          class="material-symbols-outlined button-delete button-delete"
        >
          close
        </span>
      </div>
    </div>
    `
  );
};

export default addTodos;

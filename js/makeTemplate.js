const makeCard = ({ title, detail }) => {
  return `
  <div class="item-wrapper">
      <div class="item-title-box">
        <h3 class="item-title">${title}</h3>
        <span class="material-symbols-outlined item-delete-btn" id="item-delete-btn">close</span>
      </div>
      <div class="item-detail-box">
        <p class="item-text">${detail}</p>
      </div>
      <div class="item-author-box">
        <p class="item-author">Author by web</p>
      </div>
  </div>`;
};

const makeColumn = () => {
  return `
  <div class="doingBox">
    <div class="listTitleBox">
      <h3>하고 있는 일</h3>
      <div class="count-box">
        <div class="count-num">1</div>
      </div>
      <span class="material-symbols-outlined addBtn" id="addDoingBtn">add</span>
      <span class="material-symbols-outlined closeBtn" id="closeDoingBtn">close</span>
    </div>
    <form class="itemAddBox hidden">
        <input type="text" id="titleInput" placeholder="제목을 입력하세요">
        <input type="text" id="detailInput" placeholder="내용을 입력하세요">
        <div class="BtnWrapper">
          <input type='button' value='취소'  class="cancelBtn"></input>
          <button type='submit' class="registerBtn registerTodoBtn">등록</button>
        </div>
    </form>
    <ul class="itemWrapper"></ul>
  </div>
  `;
};

export { makeCard, makeColumn };

const makeTodoForm = (
  target,
  initialState = { title: '', content: '' },
  onCancle,
  onSubmit
) => {
  const $list = target;

  // this.state = initialState;

  // this.setState = (nextState) => {
  //   this.state = nextState;
  //   $editor.querySelector('[name=title]').value = this.state.title;
  //   $editor.querySelector('[name=content]').value = this.state.content;
  // };

  $list.insertAdjacentHTML(
    'afterbegin',
    `
    <form class="card card-form" draggable="true">
      <div class="content">
        <input placeholder="제목을 입력하세요" class="big-text" name="title" autofocus />
        <input placeholder="내용을 입력하세요" class="middle-text" name="content" />
        <div class="card-buttons">
          <button class="cancel" >취소</button>
          <button class="enroll">등록</button>
        </div>
      </div>
    </form>
    `
  );

  // $list.addEventListener('keyup', (e) => {
  //   const { target } = e;
  //   const name = target.getAttribute('name');

  //   if (this.state[name] !== undefined) {
  //     const nextState = {
  //       ...this.state,
  //       [name]: target.value,
  //     };
  //     this.setState(nextState);
  //   }
  // });
};

export default makeTodoForm;

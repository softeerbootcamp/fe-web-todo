const log = (text, attrubute) => {
  const attrubutes = {
    add: `${text}를 새로 입력했습니다`,
    remove: `${text}를 삭제했습니다.`,
  };
  return ` <div class="log-card-wrapper">
        <div class="log-image-wrapper">🥳</div>
        <div class="log-text-wrapper">
          <span class="user-name">@sam</span>
          <p class="log-text">${attrubutes[attrubute]}</p>
          <span class="time">1분 전</span>
        </div>
      </div>
        `;
};

export { log };

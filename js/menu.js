//menu 열기
const open = () => {
  document.querySelector(".menu-wrapper").classList.add("sidebar-show");
};
//menu닫기
const close = () => {
  document.querySelector(".menu-wrapper").classList.remove("sidebar-show");
};
//item등록
document.getElementById("menu-close-btn").addEventListener("click", close);
document.getElementById("hamburger-btn").addEventListener("click", open);

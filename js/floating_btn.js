export default function show_modal(){
const modal = document.querySelector('.modal');
const btnOpenPopup = document.querySelector('#floating_add_icon');

btnOpenPopup.addEventListener('click', () => {
    modal.style.display = 'block';
});
}

// 모달 on
// body.style.overflow = 'hidden';

// // 모달 off
// body.style.overflow = 'auto';
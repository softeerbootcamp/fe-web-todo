// export default function create_work_box(mode) {
//     const work_box = document.createElement('li')
//     work_box.classList.add("work_box")
//     work_box.classList.add(mode)
//     work_box.innerHTML =
//         `<div class="work_box_row ">
//             <div class="work_box_contents ">
//                 <input type="text" class="work_box_title_input " placeholder="제목을 입력하세요">
//                 <textarea rows="1" class="work_box_main_input " placeholder="내용을 입력하세요"
//                     onkeydown="resize(this)" onkeyup="resize(this)"></textarea>
//                 <div class="work_box_title ">xx</div>
//                 <div class="work_box_main ">x</div>
//                 <div class="work_box_author ">x</div>
//             </div>
//             <div class="work_box_icon">
//                 <img src="./icons/box_close_icon.svg" alt="">
//             </div>
//         </div>
//         <div class="work_box_buttons ">
//             <button class="add_cancel_button">취소</button>
//             <button class="add_register_button">등록</button>
//         </div>
//             `;
//     return work_box;
// }
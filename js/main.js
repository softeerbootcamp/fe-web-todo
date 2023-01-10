import sidebar_event from "./sidebar.js";
import show_modal from "./floating_btn.js";
import add_work_box from "./add_work_box.js";
// import add_cancel from "./add_cancel.js";
import WorkBox from "./WorkBox.js";
// import resize from "./textarea_height.js";
sidebar_event();
show_modal();

//category추가될때마다 add listener 추가
// add_work_box();


// add_cancel();
// add_register_btn();
// const work_box = new WorkBox("GitHub 공부하기","add, commit, push","시간")
// work_box.createNode();
// work_box.cancel_add();
add_work_box(); //category의 매소드

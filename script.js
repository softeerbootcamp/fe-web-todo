// col_elem(각 리스트 항목) 추가
const add_btn = document.querySelectorAll(".my_button_add_list");

add_btn.forEach(item=>{
    item.addEventListener('click', () =>{
        const addOption = confirm("항목을 추가할까요?");
        if(addOption) {
			// 항목 추가 //
			const box = document.getElementById("_col_header_"+item.id);
			const newp = document.createElement('div');

			newp.innerHTML = `<div class="_col_elem">
							<h3 id="_elem_header" style="color:skyblue"><b>제목을 입력하세요</b>
							<button class="my_button_delete">
							<i class="fa fa-remove"></i>
							</button>
							</h3>
							<p style="color:lightblue">내용을 입력하세요</p>
							</div>`
			box.after(newp);

			//delete_col_list(id, btn);
		}
    })
})

// col_elem(각 리스트 항목) 삭제

function delete_col_list() {
	const delete_list = document.querySelectorAll(".my_button_delete");

	delete_list.forEach(item=>{
    	item.addEventListener('click', () =>{
        	const deleteOption = confirm("선택한 카드를 삭제할까요?");
			if(deleteOption) {
				while(1){
					item = item.parentNode;
					if(item.className == "_col_elem") break;
				}
				item.remove();
			}
    	})
	})
}


// 화면 오른쪽에 기록 화면 추가 -> visable
const show_menu = document.querySelectorAll(".top_button");

show_menu.forEach(item=>{
    item.addEventListener('click', () => {
		let side_menu= document.getElementById("side_bar");

		side_menu.style.visibility = "visible";
	})
})

const close_menu = document.querySelectorAll(".menu_close_button");

close_menu.forEach(item=>{
    item.addEventListener('click', () => {
		let side_menu= document.getElementById("side_bar");

		side_menu.style.visibility = "hidden";
	})
})


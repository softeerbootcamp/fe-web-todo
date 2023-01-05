const delete_btn = document.querySelectorAll(".delete-lst");

delete_btn.forEach(item=>{
    item.addEventListener('click',()=>{
        const deleteOption = confirm("선택한 카드를 삭제할까요?");
        if(deleteOption)
            item.parentNode.parentNode.remove();
    })
})

const add_btn = document.querySelectorAll(".add");

add_btn.forEach(item=>{
    item.addEventListener('click',()=>{
        const input_items = document.querySelector('.input-items');
        // 만약 입력중인 상자가 있었다면 상자 지움
        if(input_items)
            input_items.remove();
        else{
            const child = item.parentNode.parentNode.parentNode.childNodes[3];
        // console.log(child);
        const lst_item = document.createElement("li");
        const newForm = document.createElement('form');
        const input_title = document.createElement('input');
        input_title.setAttribute("type", "text");
        input_title.setAttribute("placeholder", "제목을 입력하세요");
	    const input_contents = document.createElement('input');
        input_contents.setAttribute("placeholder", "내용을 입력하세요");

        const delete_button = document.createElement("button");
        delete_button.innerHTML = "취소";
        const register_button = document.createElement("button");
        register_button.innerHTML = "등록";

        newForm.appendChild(input_title);
        newForm.appendChild(input_contents);
        newForm.appendChild(delete_button);
        newForm.appendChild(register_button);

        lst_item.appendChild(newForm);
        lst_item.className = 'input-items';
        lst_item.setAttribute("tabindex",'-1');
        lst_item.addEventListener("blur", ()=>{
            console.log(lst_item.parentNode);
            console.log(lst_item);
            // lst_item.parentNode.removeChild(lst_item);
            lst_item.remove();
        })
        child.prepend(lst_item);

        // console.log(lst_item);
        }        
    })
})
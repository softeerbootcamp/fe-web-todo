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
        input_title.setAttribute('maxlength',500);

	    const input_contents = document.createElement('input');
        input_contents.setAttribute("type", "text");
        input_contents.setAttribute("placeholder", "내용을 입력하세요");
        input_contents.setAttribute('maxlength', 500);
        input_title.className = 'input-title';
        input_contents.className = 'input-contents';

        const cancle_button = document.createElement("button");
        cancle_button.setAttribute('type','button');
        cancle_button.innerHTML = "취소";
        const register_button = document.createElement("button");
        register_button.setAttribute('type','button');
        register_button.setAttribute = ('value',"등록");
        const buttons = document.createElement("div");
        cancle_button.className = 'delete-button';
        register_button.className = 'register-name';
        buttons.appendChild(cancle_button);
        buttons.appendChild(register_button);

        newForm.appendChild(input_title);
        newForm.appendChild(input_contents);
        newForm.appendChild(buttons);

        lst_item.appendChild(newForm);

        lst_item.className = 'input-items';
        lst_item.setAttribute("tabindex",'-1');
        lst_item.addEventListener("blur", ()=>{
            lst_item.remove();})
        cancle_button.addEventListener('click',()=>{
            lst_item.remove();})
        register_button.addEventListener('click',()=>{
            const input_items = document.querySelector('input-items');
            console.log(input_items);
            // const title = input_title.value;
            // const contents = input_contents.value;
            // console.log(title,contents);
            if(!title){
                alert('no title');
                return;
            }
            if(!contents){
                alert('no contents');
                return;
            }
            console.log("title",title,"contents",contents);
            // const new_item = make_new_lst(title,contents);
            // console.log(new_item);
            item.parentNode.parentNode.parentNode.childNodes[3].prepend(new_item);
            // lst_item.remove();
        })
        child.prepend(lst_item);
        }
    })
})

const make_new_lst = (title, contents)=>{
    const item = document.createElement("li");
    item.className='todolist-items';

    const todolist_items_header = document.createElement("div");
    todolist_items_header.className = todolist-items-header;

    const item_title = document.createElement("h3");
    item_title.innerHTML = title;

    // const delete_btn = document.createElement("button");
    // delete_btn.className = 'delete-lst';

    // const icon = document.createElement("i");
    // icon.className = 'fa-solid fa-x';

    const item_contents = document.createElement("p");
    item_contents.innerHTML = contents;

    todolist_items_header.appendChild(item_title);
    // delete_btn.appendChild(icon);
    // todolist_items_header.appendChild(delete_btn);

    item.appendChild(todolist_items_header);
    item.appendChild(item_contents);
    console.log("item",item);
    return item;
}

const delete_btn = document.querySelectorAll(".delete-lst");

const input_data={
    'title': '',
    'contents': ''
}

const delete_data={
    contents : null
}

//모달창 설정
//취소 버튼
const modal = document.querySelector('.modal');
const modal_delete_btn = modal.querySelector('.cancel-button');
const modal_register_btn = modal.querySelector('.register-button');

modal_delete_btn.addEventListener('click',(e)=>{
    modal.classList.toggle('act');
})

modal_register_btn.addEventListener('click',(e)=>{
    // item.parentNode.parentNode.remove();
    console.log('delete_data',delete_data.contents);
    delete_data.contents.remove();
    delete_data.contents = null;
    modal.classList.toggle('act');
})

//delete 누르면 모달창
delete_btn.forEach(item=>{
    item.addEventListener('click',()=>{
        modal.classList.toggle('act');
        delete_data.contents = item.parentNode.parentNode;
    })
})

//add에서 input값 받는 함수
const onChange = (e)=>{
    input_data[e.target.name] = e.target.value;
    const register_button = document.querySelector('.register-button');
    const input_items = document.querySelector('.input-items');
    if(!register_button)
        return;
    const register_status = input_data['title'] && input_data['contents'];
    if(register_status){
        register_button.disabled = false;
        input_items.style.opacity = 1;
        return;
    }
    register_button.disabled = true;
    input_items.style.opacity = 0.4;

}

//add 버튼 기능
const add_btn = document.querySelectorAll(".add");

add_btn.forEach(item=>{
    item.addEventListener('click',()=>{
        const input_items = document.querySelector('.input-items');
        // 만약 입력중인 상자가 있었다면 상자 지움
        if(input_items){
            input_items.remove();
            return;
        }

        const child = item.parentNode.parentNode.parentNode.childNodes[3];
        const lst_item = document.createElement("li");
        const newForm = document.createElement('form');

        const input_title = document.createElement('textarea');
        input_title.setAttribute("type", "text");
        input_title.setAttribute("placeholder", "제목을 입력하세요");
        input_title.setAttribute('maxlength',500);
        input_title.setAttribute('name','title');
        input_title.addEventListener('change',onChange);

        const input_contents = document.createElement('textarea');
        input_contents.setAttribute("type", "text");
        input_contents.setAttribute("placeholder", "내용을 입력하세요");
        input_contents.setAttribute('maxlength', 500);
        input_contents.setAttribute('name','contents');
        input_contents.addEventListener('change',onChange);
        input_title.className = 'input-title';
        input_contents.className = 'input-contents';

        const cancle_button = document.createElement("button");
        cancle_button.setAttribute('type','button');
        cancle_button.innerHTML = "취소";
        const register_button = document.createElement("button");
        register_button.setAttribute('type','button');
        register_button.innerHTML = "등록";
        register_button.disabled = true;
        const buttons = document.createElement("div");
        cancle_button.className = 'cancel-button';
        register_button.className = 'register-button';
        buttons.appendChild(cancle_button);
        buttons.appendChild(register_button);

        newForm.appendChild(input_title);
        newForm.appendChild(input_contents);
        newForm.appendChild(buttons);

        lst_item.appendChild(newForm);

        lst_item.className = 'input-items';
        lst_item.setAttribute("tabindex",'-1');

        // 취소버튼
        cancle_button.addEventListener('click',()=>{
            input_data['title'] ='';
            input_data['contents']  = '';
            lst_item.remove();})

        // 등록버튼
        register_button.addEventListener('mousedown',()=>{
            const new_item = make_new_lst(input_data['title'], input_data['contents']);
            item.parentNode.parentNode.parentNode.childNodes[3].prepend(new_item);
            input_data['title'] ='';
            input_data['contents'] = '';
            lst_item.remove();
        })

        // focusout 이벤트
        lst_item.addEventListener("blur", ()=>{
            setTimeout(()=>{
                input_data['title'] ='';
                input_data['contents'] = '';
                if(lst_item)
                    lst_item.remove();
            },0)
        })

        child.prepend(lst_item);
        input_title.focus();
    })
})

const make_new_lst = (title, contents)=>{
    const item = document.createElement("li");
    item.className='todolist-items';

    const todolist_items_header = document.createElement("div");
    todolist_items_header.className = 'todolist-items-header';

    const item_title = document.createElement("h3");
    item_title.innerHTML = title;

    const delete_btn = document.createElement("button");
    delete_btn.className = 'delete-lst';

    const icon = document.createElement("i");
    icon.className = 'fa-solid fa-x';

    const item_contents = document.createElement("p");
    item_contents.innerHTML = contents;
    delete_btn.addEventListener('click',()=>{
        modal.classList.toggle('act');
        delete_data.contents = delete_btn.parentNode.parentNode;
    })

    todolist_items_header.appendChild(item_title);
    delete_btn.appendChild(icon);
    todolist_items_header.appendChild(delete_btn);

    item.appendChild(todolist_items_header);
    item.appendChild(item_contents);
    return item;
}

const changeNotificationMode = ()=>{
    const notification_menu = document.querySelector('.notification-menu')
    notification_menu.classList.toggle('act');
}

//popupbar 메뉴 보이기와 숨기기
document.querySelector('.fa-bars').addEventListener('click',changeNotificationMode)
document.querySelector('.delete-notification-menu').addEventListener('click',changeNotificationMode);
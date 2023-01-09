const delete_btn = document.querySelectorAll(".delete-lst");

const input_data={
    'title': '',
    'contents': ''
}

const delete_data={
    contents : null
}

const todos_status=['todo','doing','done'];

const todos = [
    {
        Status : 'todo',
        Title : 'Git hub 공부하기',
        Contents: 'add , commit , push'
    },
    {
        Status : 'todo',
        Title : 'Git hub 블로그에 포스팅할 것',
        Contents: '* Git hub 공부내용\n* 모던 자바스크립트 1장 공부 내용'
    },
    {
        Status : 'doing',
        Title : '모던 자바스크립트 예제 실습',
        Contents: 'input 태그'
    }
]

const render = () =>{
    const todolist = document.querySelector('.todolist');

    const sections = todolist.querySelector('section')

    //status에 따라 section 생성
    todos_status.map(status => {
        const items = todos.filter(item=>item.Status===status);
        const parent_element = `
        <section class = "${status}">
            <div class = "todo-header">
                <h2>${status} </h2>
                <div class="list-count">${items.length}</div>
                <div class="buttons">
                    <button class="add"><i class="fa-solid fa-plus"></i></button>
                    <button class="delete"><i class="fa-solid fa-x"></i></button>
                </div>
            </div> 
            <ul class = "todolist-item">
                ${items.map(item=> `<li class = "todolist-items" draggable="true">
                                    <div class="todolist-items-header">
                                        <h3>${item.Title}</h3>
                                        <button class="delete-lst"><i class="fa-solid fa-x"></i></button> 
                                    </div>
                                    <p style={white-space: pre-line;}>${item.Contents}</p> 
                        </li class = "todolist-items">
                    `).join('')}
            </ul>
        </section>`
    todolist.insertAdjacentHTML('beforeend',parent_element);
    // const parent = document.querySelector(`.${status} .todolist-item`);
    //각각의 스테이터스에 해당하는 리스트들 생성
    ;
    /**
     * todo 개행 처리
     *  */ 
    })
}

render();

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
    console.log(e.target);
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

        const child = item.closest('section').querySelector('ul');

        const input_new_element =`
            <li class = 'input-items' , tabindex = -1>
                <form>
                    <textarea class = 'input-title' type = 'text' placeholder = '제목을 입력하세요' maxlength = 500 name = 'title' 'onchange' = 'onChange()'></textarea>
                    <textarea class = 'input-contents' type = 'text' placeholder = '내용을 입력하세요' maxlength = 500 name = 'contents' 'onchange' = onChange'></textarea>
                    <div class = 'buttons'>
                        <button type ='button' class = 'cancel-button'>취소</>
                        <button type ='button' class = 'register-button' disabled>등록</>
                    </div>
                </form>
            </li>
        `;

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
            // const new_item = make_new_lst(input_data['title'], input_data['contents']);
            // item.parentNode.parentNode.parentNode.childNodes[3].prepend(new_item);
            todos.unshift({
                Status:item.closest('section').className,
                Title:input_data['title'],
                Contents:input_data['contents']});
            console.log(todos);
            input_data['title'] ='';
            input_data['contents'] = '';
            lst_item.remove();
            render();
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

        child.insertAdjacentHTML('beforebegin',input_new_element);

        document.querySelector('.input-items').querySelector('.cancel-button').addEventListener('click',(e)=>{
            console.log(e.target);
            input_data['title'] ='';
            input_data['contents']  = '';
            document.querySelector('.input-items').remove();});

        document.querySelector('.input-items').querySelector('.register-button').addEventListener('mousedown',()=>{
            todos.unshift({
                Status:item.closest('section').className,
                Title:input_data['title'],
                Contents:input_data['contents']});
            console.log(todos);
            input_data['title'] ='';
            input_data['contents'] = '';
            document.querySelector('.input-items').remove()
            render();
        });

        document.querySelector('.input-items').addEventListener("blur", ()=>{
            setTimeout(()=>{
                input_data['title'] ='';
                input_data['contents'] = '';
                document.querySelector('.input-items').remove();
            },0)
        })


        // child.prepend(lst_item);
        // input_title.focus();
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


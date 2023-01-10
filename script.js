import { input_data, delete_data, todos_status, todos} from "./store.js";

//임시 id 나중에 UUID로 바꾸고 싶음
let id = 1;

const make_new_lst = (title, contents)=>{
    const item = 
    `<li class="todolist-items" data-id =${id} draggable="true">
            <div class="todolist-items-header">
                <h3>${title}</h3>
            <button class="delete-lst"><i class="fa-solid fa-x" data-id =${id++}></i></button>
        </div>
        <p>${contents}</p>
    </li>`
    return item;
}

const render = () =>{
    let todolist = document.querySelector('.todolist');

    todolist.innerHTML='';

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
                ${items.map(item => make_new_lst(item.Title,item.Contents)).join('')}
            </ul>
        </section>`
    todolist.insertAdjacentHTML('beforeend',parent_element);
    // todolist.innerHTML += parent_element;
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
    todos.splice(todos.findIndex(e => e.Status === delete_data.Status && e.Title === delete_data.Title && e.Contents === delete_data.Contents),1);
    modal.classList.toggle('act');
    render();
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

const changeNotificationMode = ()=>{
    const notification_menu = document.querySelector('.notification-menu')
    notification_menu.classList.toggle('act');
}

//popupbar 메뉴 보이기와 숨기기
document.querySelector('.fa-bars').addEventListener('click',changeNotificationMode)
document.querySelector('.delete-notification-menu').addEventListener('click',changeNotificationMode);

const autoResizeTextarea = (e) => {
    // console.log(e);
    e.target.style.height ='auto';
    e.target.style.height = `${e.target.scrollHeight}px`
    // console.log(e);
};

const addInputEvent = ()=>{
    //input창 이벤트
    document.querySelector('.input-title').focus();
    document.querySelector('.input-title').addEventListener('change',onChange);
    document.querySelector('.input-contents').addEventListener('change',onChange);
    document.querySelector('.input-title').addEventListener('keydown',autoResizeTextarea,true);
    document.querySelector('.input-contents').addEventListener('keydown',autoResizeTextarea,true);
};

const addInputRegisterEvent = (e)=>{
    //등록버튼 이벤트
    document.querySelector('.input-items').querySelector('.register-button').addEventListener('mousedown',()=>{
        todos.unshift({
            Status:e.target.closest('section').className,
            Title:input_data['title'],
            Contents:input_data['contents']});
        input_data['title'] ='';
        input_data['contents'] = '';
        document.querySelector('.input-items').remove();
        render();
    });
};

const addInputFocusOutEvent = ()=>{
    //focusout 이벤트
    document.querySelector('.input-items').addEventListener("blur", ()=>{
        setTimeout(()=>{
            input_data['title'] ='';
            input_data['contents'] = '';
            const input_item = document.querySelector('.input-items');
            if(input_item)
            input_item.remove();
        },0)
    })
}

const addInputCancelEvent = ()=>{
    //취소버튼 이벤트
    document.querySelector('.input-items').querySelector('.cancel-button').addEventListener('click',(e)=>{
        input_data['title'] ='';
        input_data['contents']  = '';
        document.querySelector('.input-items').remove();});
}

const make_new_input = ()=>{
    const newInput =
    `<li class = 'input-items' , tabindex = -1>
        <form>
            <textarea class = 'input-title' type = 'text' placeholder = '제목을 입력하세요' maxlength = 500 name = 'title' 'onchange' = 'onChange()'></textarea>
            <textarea class = 'input-contents' type = 'text' placeholder = '내용을 입력하세요' maxlength = 500 name = 'contents' 'onchange' = onChange'></textarea>
            <div class = 'buttons'>
                <button type ='button' class = 'cancel-button'>취소</>
                <button type ='button' class = 'register-button' disabled>등록</>
            </div>
        </form>
    </li>`
    return newInput;
}


//이벤트 한꺼번에 설정해 위임
const todolist = document.querySelector('.todolist');
todolist.addEventListener('click',(e)=>{
    //add 이벤트
    if(e.target.className === 'add' || e.target.classList[1] === "fa-plus"){
        const input_items = document.querySelector('.input-items');
        if(input_items){
            input_items.remove();
            return;
        }
        const section = e.target.closest('section').querySelector('ul');
        const input_new_element = make_new_input();
        section.insertAdjacentHTML('afterbegin',input_new_element);

        addInputEvent();
        addInputCancelEvent();
        addInputRegisterEvent(e);
        addInputFocusOutEvent();
        return;
    }

    //delete 이벤트
    const id = e.target.dataset.id;
    if(!e.target.dataset.id || e.target.tagName !== 'I')
        return;
    storeDeletedItem(id);
    modal.classList.toggle('act');
})

const storeDeletedItem = (id)=>{
    const toBedeleted = document.querySelector(`.todolist-items[data-id = "${id}"]`);
    delete_data.Status = toBedeleted.closest('section').className;
    delete_data.Title = toBedeleted.querySelector('h3').innerText;
    delete_data.Contents = toBedeleted.querySelector('p').innerText;
}
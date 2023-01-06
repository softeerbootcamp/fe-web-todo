let cond = false;

function top_erase(){
    console.log("erase!")
}
function top_id_erase(){
    console.log("id_erase!")
}
function make_button(){
    let putarea = document.getElementById('todo_thing');

    let unit = document.createElement('div')
    unit.setAttribute('class','plus_todo')
    //input title, input context
    let inputtext1 = document.createElement('input');
    let inputtext2 = document.createElement('input');

    inputtext1.setAttribute('placeholder','제목을 입력하세요')
    inputtext2.setAttribute('placeholder','내용을 입력하세요')

    inputtext1.setAttribute('class','input_title')
    inputtext2.setAttribute('class','input_context')
    unit.appendChild(inputtext1)
    unit.appendChild(inputtext2)

    //input button1, input button2

    let button_container = document.createElement('div');
    button_container.setAttribute('class','plus_button_between');

    let button1 = document.createElement('button');
    let button2 = document.createElement('button');

    button1.innerHTML = '취소';
    button2.innerHTML = '등록';

    button1.setAttribute('class','plus_button_cancel');
    button2.setAttribute('class','plus_button_join');

    button1.setAttribute('onclick',`top_plus_cancel()`);

    button_container.appendChild(button1);
    button_container.appendChild(button2);

    unit.appendChild(button_container);

    return unit;
}
function top_plus(){
    cond = !cond;
    let putarea = document.getElementById('todo_thing');

    unit = make_button();

    if(cond){
        putarea.appendChild(unit);
    }
    else{
        let erase_unit = document.getElementsByClassName('plus_todo')[0];
        putarea.removeChild(erase_unit);
    }
}
function top_plus_cancel(){
    let putarea = document.getElementById('todo_thing');
    unit = putarea.childNodes;
    putarea.removeChild(unit[unit.length-1]);
    cond = false;
}
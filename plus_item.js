let cond = false;
let id = 0;

function top_erase(){

}
function top_id_erase(){
    console.log("id_erase!")
}
function make_button(){
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

    button1.setAttribute('class','plus_item_cancel');
    button2.setAttribute('class','plus_item_join');

    button1.setAttribute('id','plus_item_cancel');
    button2.setAttribute('id','plus_item_join');
    
    button1.addEventListener('click',(event)=>{
        console.log('취소')
    })
    button2.addEventListener('click',(event)=>{
        console.log('추가')
    })
    button_container.appendChild(button1);
    button_container.appendChild(button2);

    unit.appendChild(button_container);

    return unit;
}

function item_input_button(){

}
function item_input_cancel(){
    let plus_item_cancel = document.getElementsByClassName('plus_item_cancel')[0];

}
function top_plus(){

    cond = !cond;
    let putarea = document.getElementById('todo_thing');

    let unit = make_button();

    item_input_cancel()
    if(cond){
        putarea.appendChild(unit);
    }
    else{
        unit = document.getElementsByClassName('plus_todo')[0];
        putarea.removeChild(unit);
    }
}

window.onload = function(){
    var item_plus = document.getElementsByClassName("button_plus")[0];
    item_plus.addEventListener('click',function(event){
        top_plus();
    });
    
}

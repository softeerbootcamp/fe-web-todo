import {list} from './data.js'
import {initialize_list} from './initialize_list.js'

function initialize_modal(){
    let modal_input_location = document.getElementById('main');
    let templates = document.getElementsByClassName('todo_plus_modal')[0];
    let input_modal = document.importNode(templates.content,true);
    modal_input_location.appendChild(input_modal)
    document.getElementById('modal').style.display = "none"
}

const button = document.getElementById('plus_list');
button.addEventListener('click',(event) =>{
    document.getElementById('modal').style.display = ""
    onload_function()

});

function directly_add_list(){
        let plus_item_name = document.getElementById('item_plus_name').value
        console.log(plus_item_name)
        const add_list = 
            {
                name : plus_item_name
            }
        

        list.push(add_list);
        initialize_list(list.length-1)
        document.getElementById('modal').style.display = "none"
    
}
function onload_function(){
    let modal_close = document.getElementById('modal_close');
    modal_close.addEventListener('click',(event)=>{
        document.getElementById('modal').style.display = "none"
    })

    let modal_plus = document.getElementById('modal_plus');
    
    modal_plus.addEventListener('click',directly_add_list)
}

export {initialize_modal}
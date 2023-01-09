import {list,item} from './data.js'

function initialize_list(i){
    let initialize_location = document.getElementById('main');
    let node = document.createElement('div');

    let templates = document.getElementsByClassName('template-list')[0];
    var input_name = list[i].name;
    let input_thing = document.importNode(templates.content,true);
    node.appendChild(input_thing);
    node.setAttribute('class',"initialize_item_here");
    initialize_location.appendChild(node);
    document.getElementsByClassName('list_name')[i].innerHTML = input_name;
    let count = 0;
    let j;
    for(j = 0; j < item.length; j++){
        if(item[j].list == input_name)
            count++;
    }

    document.getElementsByClassName('circle')[i].innerHTML = count;

}

export {initialize_list}
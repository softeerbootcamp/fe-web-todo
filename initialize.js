import {initialize_list} from './initialize_list.js'
import {initialize_item} from './initialize_item.js'
import {initialize_modal} from './plus_list.js'

import {list,item} from './data.js'


function main(){
    let i = 0;

    for(i = 0; i < list.length; i++)
        initialize_list(i)
    for(i = 0; i < item.length; i++)
        initialize_item(i)
    
    initialize_modal();
}

main();
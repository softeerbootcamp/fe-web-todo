let { todos, TODO} = require("./todos");
let id = todos.length+1;

function add_input(input){
    const inputName = input[1];
    const inputTags = input[2];

    let ele={};
    ele.id = id++;
    ele.name = inputName;
    ele.status = TODO;
    let tag = inputTags.slice(1 , -1).split(',').map(e => e.trim().slice(1,-1).trim());
    ele.tags = tag;

    todos.push(ele);
    console.log("공부하기 1개가 추가되었습니다. (id : " , ele.id +")");
    require('./utils').show_status;
}

module.exports.add = add_input;

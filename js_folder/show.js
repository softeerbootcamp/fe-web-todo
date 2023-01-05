let { todos,TODO,DOING,DONE } = require("./todos");

function show_input(input){
    const utils = require('./utils');
    const inputOption = input[1];

    const todo = todos.filter( tmp => tmp.status === TODO);
    const doing = todos.filter( tmp => tmp.status === DOING);
    const done = todos.filter( tmp => tmp.status === DONE);
    if(inputOption ==='all'){
        console.log("현재상태 : todo: " + todo.length +"개, doing:" + doing.length+"개, done:"+ done.length+"개");
        return;
    }

    if(inputOption=== TODO){
        utils.show_lst(inputOption, todo);
        return;
    }

    if(inputOption === DOING){
        utils.show_lst(inputOption, doing);
        return;
    }

    if(inputOption === DONE){
        utils.show_lst(inputOption , done);
        return;
    }

    console.log('잘못된 입력입니다.');
}

exports.show = show_input;
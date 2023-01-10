let { todos, TODO, DOING, DONE } = require("./todos");

function update_input(input){
    const inputId = input[1];
    const inputStatus = input[2];

    if(!Number(inputId) || !(inputStatus == TODO || inputStatus == DOING || inputStatus == DONE)){
        console.log("잘못된 입력입니다.");
        return;
    }

    let findValue = todos.findIndex((tmp) => tmp.id === Number(inputId))
    if(findValue === -1){
        console.log("해당하는 id가 없습니다.")
        return;
    }

    todos[findValue] = {...todos[findValue], status: inputStatus}
    process.stdout.write(todos[findValue].name + " " + todos[findValue].status + "으로 상태가 변경됐습니다.\n");

    require('./utils').show_status;
}

exports.update = update_input;
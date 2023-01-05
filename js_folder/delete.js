let { todos } = require("./todos");

function delete_input(input){
    const inputId = input[1];

    if(!Number(inputId)){
        console.log("잘못된 입력입니다.");
        return;
    }

    let findValue = todos.findIndex((tmp) => tmp.id === Number(inputId))
    if(findValue === -1){
        console.log("해당하는 id가 없습니다.")
        return;
    }

    let del_elem = todos[findValue];
    todos.splice(findValue,1);
    process.stdout.write(del_elem.name + " " + del_elem.status + "가 목록에서 삭제되었습니다\n");
    require('./utils').show_status;
}

module.exports.delete = delete_input;
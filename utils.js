function show_status(){
    const todo = todos.filter( tmp => tmp.status === TODO);
    const doing = todos.filter( tmp => tmp.status === DOING);
    const done = todos.filter( tmp => tmp.status === DONE);

    console.log("현재상태 : todo: " + todo.length +"개, doing:" + doing.length+"개, done:"+ done.length+"개");
}

function show_lst(status, lst){
    if(!lst.length){
        console.log("해당 리스트가 없습니다.")
        return;
    }

    process.stdout.write(status+"리스트 : 총" + lst.length + "건 : ");
    for(let i = 0; i < lst.length ; i++){
        process.stdout.write("'" + lst[i].name + ", " + lst[i].id + "번'");
        if(i !== lst.length - 1) process.stdout.write(", ");
    }
    console.log();
}

module.exports.show_status = show_status;
module.exports.show_lst = show_lst;
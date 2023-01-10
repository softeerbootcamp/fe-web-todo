const healthObj = {
    name:"달리기",
    lasttime:"PM10:12",
    showHealth(){
        console.log(this.name + "님, 오늘은 " + this.lasttime + "에 운동을 하셨네요");
    }
}

healthObj.showHealth();

class Todo{
    constructor(initialTodo){
        this.todos={};
    }

    addTodo(item){
        this.todos=[...this.todos,item];
        this._log(`ADD_TODO ${item}`);
    }

    _log(msg){
        console.log(`[event]: `,msg);
        console.log(this.todos);
    }
}

const todo = new Todo();
let addTodoButton = document.querySelector('.todo-add-button');
let contentTodo = document.querySelector('.havetodo-container');

let addDoingButton = document.querySelector('.doing-add-button');
let contentDoing = document.querySelector('.doing-container');

let addDoneButton = document.querySelector('.done-add-button');
let contentDone = document.querySelector('.done-container');

let todolistToDo = document.querySelector('#todolist-todo');
let listToDo = document.querySelector('#list-title-todo');
let captionToDo = document.querySelector('#caption-todo');

let newTodoTitle = document.querySelector('.todo-title-input');
let newTodoCaption = document.querySelector('.todo-caption-input');

let newDoingTitle = document.querySelector('.doing-title-input');
let newDoingCaption = document.querySelector('.doing-caption-input');

let newDoneTitle = document.querySelector('.done-title-input');
let newDoneCaption = document.querySelector('.done-caption-input');


function valid_input(target){
    if(!target.value){
        alert('제목을 입력해주세요');
        return -1;
    }
    else{
        return 0;
    }
}

function registerModal(target){

    let newSection = document.createElement("section");
    let newClass = document.createAttribute("class");
    let newId = document.createAttribute("id");

    newClass.value = "todolist";
    newSection.setAttributeNode(newClass);
    
    let newDiv = document.createElement("div");
    let newClass2 = document.createAttribute("class");
    newClass2.value="list-title";
    newDiv.setAttributeNode(newClass2);
    newSection.appendChild(newDiv);

    let newDiv2 = document.createElement("div");
    let newClass3 = document.createAttribute("class");
    newClass3.value = "caption";
    newDiv2.setAttributeNode(newClass3);
    newSection.appendChild(newDiv2);

    target.appendChild(newSection);
}


addTodoButton.addEventListener('click', () => {
    if(valid_input(newTodoTitle) === 0){
        registerModal(contentTodo);
    }
});
//addTodoButton.addEventListener('click', () => registerModal(contentTodo));

addDoingButton.addEventListener('click', () => {
    if(valid_input(newDoingTitle) === 0){
        registerModal(contentDoing);
    }
});

//addDoingButton.addEventListener('click', () => registerModal(contentDoing));

addDoneButton.addEventListener('click', () => {
    if(valid_input(newTodoTitle) === 0){
        registerModal(contentDone);
    }
});
//addDoneButton.addEventListener('click', () => registerModal(contentDone));

//const addbutton = document.getElementsByClassName('todo-add-button');
//console.log(addbutton); 
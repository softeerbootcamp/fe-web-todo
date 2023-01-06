import { closeModal, openTodoModal, openDoingModal, openDoneModal } from "./inputContent.js";

let addTodoButton = document.querySelector('.todo-add-button');
let contentTodo = document.querySelector('.havetodo-container');

let addDoingButton = document.querySelector('.doing-add-button');
let contentDoing = document.querySelector('.doing-container');

let addDoneButton = document.querySelector('.done-add-button');
let contentDone = document.querySelector('.done-container');

let todolistToDo = document.querySelector('#todolist-todo');
let titleToDo = document.querySelector('#list-title-todo');
let captionToDo = document.querySelector('#caption-todo');

let newTodoTitle = document.querySelector('.todo-title-input');
let newTodoCaption = document.querySelector('.todo-caption-input');

let newDoingTitle = document.querySelector('.doing-title-input');
let newDoingCaption = document.querySelector('.doing-caption-input');

let newDoneTitle = document.querySelector('.done-title-input');
let newDoneCaption = document.querySelector('.done-caption-input');

//let todo_list = {};
//let doing_list = [];
//let done_list = [];

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

    const newTitle = document.querySelector('#title-input').value;
    const newContent = document.querySelector('#caption-input').value;
    //todo_list[newTitle] = newContent;

    let newSection = document.createElement("section");
    let newClass = document.createAttribute("class");
    let newId = document.createAttribute("id");

    newClass.value = "todolist";
    newSection.setAttributeNode(newClass);
    
    let newDiv = document.createElement("div");
    let newClass2 = document.createAttribute("class");
    newClass2.value="list-title";
    newDiv.setAttributeNode(newClass2);
    newDiv.innerText = newTitle;
    newSection.appendChild(newDiv);

    let newDiv2 = document.createElement("div");
    let newClass3 = document.createAttribute("class");
    newClass3.value = "caption";
    newDiv2.setAttributeNode(newClass3);
    newDiv2.innerText = newContent;
    newSection.appendChild(newDiv2);

    target.appendChild(newSection);
}


addTodoButton.addEventListener('click', () => {
    if(valid_input(newTodoTitle) === 0){
        registerModal(contentTodo);
        closeModal(openTodoModal);
    }
});

addDoingButton.addEventListener('click', () => {
    if(valid_input(newDoingTitle) === 0){
        registerModal(contentDoing);
        closeModal(openDoingModal);
    }
});

addDoneButton.addEventListener('click', () => {
    if(valid_input(newDoneTitle) === 0){
        registerModal(contentDone);
        closeModal(openDoneModal);
    }
});

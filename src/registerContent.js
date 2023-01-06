import { closeModal, openTodoModal, openDoingModal, openDoneModal, closeTodo, closeDoing, closeDone, todoTitleInput, doingTitleInput, doneTitleInput } from "./inputContent.js";

let addTodoButton = document.querySelector('.todo-add-button');
let cancelTodoButton = document.querySelector('.todo-cancel-button');
let contentTodo = document.querySelector('.havetodo-container');

let addDoingButton = document.querySelector('.doing-add-button');
let cancelDoingButton = document.querySelector('.doing-cancel-button');
let contentDoing = document.querySelector('.doing-container');

let addDoneButton = document.querySelector('.done-add-button');
let cancelDoneButton = document.querySelector('.done-cancel-button');
let contentDone = document.querySelector('.done-container');

let newTodoTitle = document.querySelector('.todo-title-input');
let newDoingTitle = document.querySelector('.doing-title-input');
let newDoneTitle = document.querySelector('.done-title-input');

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

    let newTitle='';
    let newContent='';

    if(target === contentDoing){
        console.log(document.querySelector('#title-input'));
        newTitle = document.querySelector('#title-input').value;
        newContent = document.querySelector('#caption-input').value;
    }
    
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

addTodoButton.addEventListener('click', (e) => {
    if(valid_input(todoTitleInput) === 0){
        registerModal(contentTodo);
        closeTodo();
    }
});

addDoingButton.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(e);

    if(valid_input(doingTitleInput) === 0){
        registerModal(contentDoing);
        closeDoing();
    }
});

addDoneButton.addEventListener('click', () => {
    if(valid_input(doneTitleInput) === 0){
        registerModal(contentDone);
        closeDone();
    }
});


cancelTodoButton.addEventListener('click', () => closeTodo());
cancelDoingButton.addEventListener('click', () => closeDoing());
cancelDoneButton.addEventListener('click', () => closeDone());

var todolistToDo = document.getElementById('todolist-todo');
var listToDo = document.getElementById('list-title-todo');
var captionToDo = document.getElementById('caption-todo');
var addTodoContent = document.getElementById('plus-todo-button');
var closeTodoContent = document.getElementById('x-todo-button');
var todoTitleInput = document.getElementsByClassName('todo-title-input');
var todoCaptionInput = document.getElementsByClassName('todo-caption-input');
var openTodoModal = document.getElementById('open-modal-todo');
var addTodoButton = document.getElementsByClassName('todo-add-button');
var contentTodo = document.getElementsByClassName('todo-content');

var addDoingContent = document.getElementById('plus-doing-button');
var doingTitleInput = document.getElementsByClassName('doing-title-input');
var doingCaptionInput = document.getElementsByClassName('doing-caption-input');
var openDoingModal = document.getElementById('open-modal-doing');
var addDoingButton = document.getElementsByClassName('doing-add-button');
var contentDoing = document.getElementsByClassName('doing-content');
var closeDoingContent = document.getElementById('x-doing-button');

var addDoneContent = document.getElementById('plus-done-button');
var doneTitleInput = document.getElementsByClassName('done-title-input');
var doneCaptionInput = document.getElementsByClassName('done-caption-input');
var openDoneModal = document.getElementById('open-modal-done');
var addDoneButton = document.getElementsByClassName('done-add-button');
var contentDone = document.getElementsByClassName('done-content');
var closeDoneContent = document.getElementById('x-done-button');


function openDoModal(){
    openTodoModal.style.display="block";
    openTodoModal.classList.add("show");
    todoTitleInput.value = '';
    todoCaptionInput.value = '';
}

addTodoContent.onClick = function(event){
    openDoModal();
}

function openIngModal(){
    openDoingModal.style.display="block";
    openDoingModal.classList.add("show");
    doingTitleInput.value = '';
    doingCaptionInput.value = '';
}

addDoingContent.onClick = function(event){
    openIngModal();
}

function openNeModal(){
    openDoneModal.style.display="block";
    openDoneModal.classList.add("show");
    doneTitleInput.value = '';
    doneCaptionInput.value = '';
}

addDoneContent.onClick = function(event){
    openNeModal();
}

function closeTodoModal(){
    var modalDiv = document.getElementById('open-modal-todo');
    modalDiv.style.display = 'none';
}

closeTodoContent.onClick = function(event){
    closeTodoModal();
}

function closeDoingModal(){
    var modalDiv = document.getElementById('open-modal-doing');
    modalDiv.style.display = 'none';
}

closeDoingContent.onClick = function(event){
    closeDoingModal();
}

function closeDoneModal(){
    var modalDiv = document.getElementById('open-modal-done');
    modalDiv.style.display = 'none';
}

closeDoneContent.onClick = function(event){
    closeDoneModal();
}


function registerToDo(){
    var newDiv = document.createElement("div");
    var newSection = document.createElement("section");
    var newClass = document.createAttribute("class");
    var newId = document.createAttribute("id");

    newId.value = "todolist-todo";
    newClass.value = "todolist";
    newSection.setAttributeNode(newClass);
    newSection.setAttributeNode(newId);

    document.contentTodo.appendChild(openTodoModal);
}

addTodoButton.onClick = function(event){
    registerToDo();
}
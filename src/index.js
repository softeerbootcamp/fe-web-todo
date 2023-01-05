var todolistToDo = document.getElementById('todolist-todo');
var listToDo = document.getElementById('list-title-todo');
var captionToDo = document.getElementById('caption-todo');
var addContent = document.getElementById('plus-todo-button');
var closeContent = document.getElementsByClassName('x-button');
var todoTitleInput = document.getElementsByClassName('todo-title-input');
var todoCaptionInput = document.getElementsByClassName('todo-caption-input');
var openTodoModal = document.getElementById('open-modal');
var addContentButton = document.getElementsByClassName('add-button');
var contentTodo = document.getElementsByClassName('todo-content');

function openModal(){
    openTodoModal.style.display="block";
    openTodoModal.classList.add("show");
    todoTitleInput.value = '';
    todoCaptionInput.value = '';
}

addContent.onClick = function(event){
    openModal();
}

function closeModal(){
    var modalDiv = document.getElementById('open-modal');
    modalDiv.style.display = 'none';
}

closeContent.onClick = function(event){
    closeModal();
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

addContentButton.onClick = function(event){
    registerToDo();
}
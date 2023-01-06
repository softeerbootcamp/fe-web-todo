let addTodoContent = document.querySelector('#plus-todo-button');
let closeTodoContent = document.querySelector('#x-todo-button');
let todoTitleInput = document.querySelector('.todo-title-input');
let todoCaptionInput = document.querySelector('.todo-caption-input');
export let openTodoModal = document.querySelector('#open-modal-todo');

let addDoingContent = document.querySelector('#plus-doing-button');
let doingTitleInput = document.querySelector('.doing-title-input');
let doingCaptionInput = document.querySelector('.doing-caption-input');
export let openDoingModal = document.querySelector('#open-modal-doing');
let closeDoingContent = document.querySelector('#x-doing-button');

let addDoneContent = document.querySelector('#plus-done-button');
let doneTitleInput = document.querySelector('.done-title-input');
let doneCaptionInput = document.querySelector('.done-caption-input');
export let openDoneModal = document.querySelector('#open-modal-done');
let closeDoneContent = document.querySelector('#x-done-button');

function openModal(target){
    target.style.display="block";
    target.classList.add("show");
    ///todoTitleInput.value = '';
    //todoCaptionInput.value = '';
}

addTodoContent.addEventListener('click', () => openModal(openTodoModal));
addDoingContent.addEventListener('click', () => openModal(openDoingModal));
addDoneContent.addEventListener('click', () => openModal(openDoneModal));

export function closeModal(target){
    target.style.display = 'none';
    ///todoTitleInput.value = '';
    //todoCaptionInput.value = '';
}

closeTodoContent.addEventListener('click', () => closeModal(openTodoModal));
closeDoingContent.addEventListener('click', () => closeModal(openDoingModal));
closeDoneContent.addEventListener('click', () => closeModal(openDoneModal));


//import {example, aaa} = 'aaaa.js';

/*
export function example(target){
    target.style.display="block";
    target.classList.add("show");
    todoTitleInput.value = '';
    todoCaptionInput.value = '';
}
*/
//example(openTodoModal)
//example(openDoingModal)

/*
//module.exports.openDoModal = openDoModal;
//module.exports.openIngModal = openIngModal;
//module.exports.openNeModal = openNeModal;
//module.exports.closeTodoModal = closeTodoModal;
module.exports.closeDoingModal= closeDoingModal;
module.exports.closeDoneModal = closeDoneModal;
*/
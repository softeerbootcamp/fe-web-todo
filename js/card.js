import { findParentTag, clearDomValue } from "./common.js"
import { makeCardDragEvent } from "./drag/addDragEvent.js"
import { manager } from "./drag/dragIDManager.js"
import { TODO, DOING, DONE, PATH_TODO_LIST, PATH_DOING_LIST, PATH_DONE_LIST, getData } from "./data-storage/dataFunctions.js"
import { addCardDeleteEvent } from "./section.js"

const RegisterForm = document.querySelector(".card-register-form")
const RegisterInput = document.getElementById("register-form");
const RegistrCancelBtn = document.querySelector("#register-cancel-button")
const RegistrBtn = document.querySelector("#register-accept-button")
const hiddenNewCard = document.querySelector(".hidden.card-frame");

let todoLists = [[], [], []]

async function updateTodoLists() {
    todoLists[TODO] = await getData(PATH_TODO_LIST)
    todoLists[DOING] = await getData(PATH_DOING_LIST)
    todoLists[DONE] = await getData(PATH_DONE_LIST)
}

function makeCard(title, content) {
    let newCard = hiddenNewCard.cloneNode(true)

    newCard.classList = "card-frame"
    newCard.setAttribute("draggable", true)

    newCard.id = manager.giveCardID()
    makeCardDragEvent(newCard)
    
    newCard.children[0].innerHTML = title + '<i class="fa-solid fa-xmark card-close-button"></i>'
    newCard.children[1].innerHTML = content
    newCard.children[2].innerHTML = "author by web"

    return newCard
}

async function cardCounts() {
    await updateTodoLists()

    let cardLengths = document.querySelectorAll("span.cardlist-length")

    cardLengths.forEach((cardLength, index) => {
        cardLengths[index].innerHTML = todoLists[index].length
    })

    addCardDeleteEvent()
}

async function cardShow() {
    await updateTodoLists()

    let cards = [[], [], []]
    let Headers = document.querySelectorAll(".section-header")

    todoLists[TODO].forEach((todoList) => {
        cards[TODO].push(makeCard(todoList.title, todoList.content))
    })

    todoLists[DOING].forEach((doingList) => {
        cards[DOING].push(makeCard(doingList.title, doingList.content))
    })

    todoLists[DONE].forEach((doneList) => {
        cards[DONE].push(makeCard(doneList.title, doneList.content))
    })

    Headers.forEach((Header, index) => {
        cards[index].forEach((card) => {
            Header.after(card)
        })
    })

    await cardCounts()
}

function appearRegisterForm(parentHeader) {
    if(RegisterForm.style.display != "block"){
        RegisterForm.style.display = "block";
    }
    else{
        RegisterForm.style.display = "none";
    }
    parentHeader.after(RegisterForm)
}

function registerCard() {
    let NewCardContent = RegisterForm.children[1].value.replace(/\r\n|\n|\r/g,"<br>")
    console.log(NewCardContent)
    let newCard = makeCard(RegisterForm.children[0].value, NewCardContent)
    hiddenNewCard.cloneNode(true)
    let currentSection = findParentTag(RegisterForm, "SECTION")

    RegisterForm.style.display = "none";
    
    makeCardDragEvent(newCard)

    clearDomValue([RegisterForm.children[0], RegisterForm.children[1]])
    RegisterForm.style.height = "14.5vh";
    RegisterInput.style.height = "8vh";
    RegistrBtn.disabled = true;

    currentSection.children[0].after(newCard)
    cardCounts()
}

function registerCancel() {
    clearDomValue([RegisterForm.children[0], RegisterForm.children[1]])
    RegisterForm.style.display = "none";
}

let cardPlusBtns = document.querySelectorAll("i.card-plus-button")
cardPlusBtns.forEach((cardPlusBtn) => {
    cardPlusBtn.addEventListener("click", () => appearRegisterForm(cardPlusBtn.parentElement.parentElement))
})

RegistrCancelBtn.addEventListener("click", () => {
    registerCancel();
})

RegistrBtn.addEventListener("click", () => {
    registerCard();
})

cardShow();

export { cardCounts }
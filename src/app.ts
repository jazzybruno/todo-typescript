import { Todo } from "./classes/Todo.js"

let button : HTMLButtonElement
let div : HTMLDivElement
let form : HTMLFormElement
let input : HTMLInputElement

button = document.querySelector('.main-button-add')!
div = document.querySelector('.main-form')!


button.addEventListener('click', () => {
 console.log("Hellp");
 div.style.opacity = '1'
})

form = document.querySelector('form')!
input = document.querySelector('input')!

form.addEventListener('submit', (e : Event) => {
    e.preventDefault()
    let todo = new Todo(1, input.value , false)
    console.log(todo);
})





import { Todo } from "./classes/Todo.js"
import { ListFormat } from "./classes/ListFormat.js"
import { Local } from "./classes/LocalStorage.js"
import { Formater } from "./interfaces/Format.js"
import { render } from "./functions/rendering.js"
import { load } from "./functions/loading.js"

let iconCheck = document.querySelectorAll('.icon-check')!;
let iconDelete = document.querySelectorAll('.icon-delete');

window.addEventListener('load' , ()=>{
    if(load() == null || load() == undefined){
        let array  : (Todo)[]= []
        localStorage.setItem('todos' , JSON.stringify(array))
    }else{
        let todoArray : (Todo)[] = load()
        render(todoArray , document.querySelector('ul')!)
        iconCheck = document.querySelectorAll('.icon-check')!
        iconDelete = document.querySelectorAll('.icon-delete')!
    }

    iconCheck.forEach(icon => {
        icon.addEventListener('click' , (e : Event) => {
            console.log("Clicked the checking icon");
        })
    })
    
    iconDelete.forEach(icon => {
        icon.addEventListener('click' , (e : Event) => {
            console.log("Clicked the deleting icon");
            
        })
        
    })

})

let button : HTMLButtonElement
let div : HTMLDivElement
let form : HTMLFormElement
let input : HTMLInputElement
let error : HTMLDivElement





button = document.querySelector('.main-button-add')!
div = document.querySelector('.main-form')!
error = document.querySelector('.error-message')!


button.addEventListener('click', () => {
 div.style.opacity = '1'
})

form = document.querySelector('form')!
input = document.querySelector('input')! 

form.addEventListener('submit', (e : Event) => {
    e.preventDefault()
    if(input.value == ""){
     error.innerText = "Please Enter a Valid Task"
    }else{
    error.innerText = " "
    let list = new ListFormat(document.querySelector('ul')!)
    let todo = new Todo(1, input.value , false)
    let todoArray : (Todo)[] = []

    if(list.load() == undefined || list.load() == null ){

        todoArray = [todo]
        let local = new Local(todoArray) 
        local.save()
    }else{
        todoArray = list.load()
        todoArray.push(todo)
        let local = new Local(todoArray) 
        local.save()
    }
    
    list.render(todoArray, 'start')
    input.value = ""
    }
})



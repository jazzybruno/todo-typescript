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
            let container : HTMLDivElement = icon.childNodes[1] as HTMLDivElement
            let word : string = JSON.stringify(container.innerText)
            let id : number = eval(word)
            let array : (Todo)[] = load()   
            let noChecked = array.filter((todo => {
                return todo.id != id
             }))
             let checked = array.filter((todo => {
                return todo.id == id
             }))
             
             if(checked[0].completed == true){
                checked[0].completed = false
             }else{
                checked[0].completed = true
             }
             
                let newArray = [...noChecked , ...checked]
                localStorage.setItem('todos' , JSON.stringify(newArray))
                // let list : HTMLUListElement = document.querySelector('ul')!
                // list.innerHTML = ""
                // load()
                window.location.reload()
        })
    })
    
    iconDelete.forEach(icon => {
        icon.addEventListener('click' , (e : Event) => {
            let container : HTMLDivElement = icon.childNodes[1] as HTMLDivElement
            let word : string = JSON.stringify(container.innerText)
            let id : number = eval(word)
            // filtering the array
            let array : (Todo)[] = load()
            let filtered : (Todo)[] =  array.filter((todo => {
               return todo.id != id
            }))
           //refreshing the list
            //  let list : HTMLUListElement = document.querySelector('ul')!
             localStorage.setItem('todos' , JSON.stringify(filtered))
                // list.innerHTML = ""
             window.location.reload()
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
    let length = load().length
    console.log(length);
    let todo = new Todo(length + 1, input.value , false)
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
    
    window.location.reload()
    input.value = ""
    }
})



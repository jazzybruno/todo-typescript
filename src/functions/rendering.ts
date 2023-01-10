import { Todo } from "../classes/Todo.js";


export const render :Function = (todo :(Todo)[] , container : HTMLUListElement) =>{

        let length = todo.length
        for (let i = 0; i < length; i++) {

            let li = document.createElement('li')
            let divOne = document.createElement('div')
            let divTwo = document.createElement('div')
            let divTwoOne = document.createElement('div')
            let divTwoTwo = document.createElement('div') 
    
            divOne.innerText = todo[i].text
            divTwoOne.innerHTML = '<i class="fa-solid fa-check"></i>'
            divTwoOne.className = "icon-check"
            divTwoTwo.innerHTML = '<i class="fa-solid fa-trash"></i>'
            divTwoTwo.className = "icon-delete"
    
            divTwo.append(divTwoOne)
            divTwo.append(divTwoTwo)
            li.append(divOne)
            li.append(divTwo)
            container.prepend(li)
            
        }
    }

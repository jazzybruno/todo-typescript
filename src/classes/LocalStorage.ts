import { Formater } from '../interfaces/Format';
import { LocalStorage } from '../interfaces/LocalStorage';
import { Todo } from './Todo';
export class Local implements LocalStorage {
    constructor(
        public todos : (Formater)[]
    ){}
    //the function that saves 
      save(){
        localStorage.setItem('todos', JSON.stringify(this.todos))
      }
    //the function that saves 

}
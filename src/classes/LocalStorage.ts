import { LocalStorage } from '../interfaces/LocalStorage';
import { Todo } from './Todo';
export class Local implements LocalStorage {
    constructor(
        public todos : (Todo)[]
    ){}
    //the function that saves 
      save(){
        localStorage.setItem('todos', JSON.stringify(this.todos))
      }
    //the function that saves 

}
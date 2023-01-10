import { Todo } from '../classes/Todo';
 export const load :Function = ():(Todo)[] =>{
    return JSON.parse(localStorage.getItem('todos')!)
  }
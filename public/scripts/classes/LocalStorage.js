export class Local {
    constructor(todos) {
        this.todos = todos;
    }
    //the function that saves 
    save() {
        localStorage.setItem('todos', JSON.stringify(this.todos));
    }
}

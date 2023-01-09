export class Todo {
    constructor(id, text, completed = false) {
        this.id = id;
        this.text = text;
        this.completed = completed;
    }
    format() {
        return this.text;
    }
    logger() {
        console.log(this.format());
    }
}

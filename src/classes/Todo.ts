import { Formater } from "../interfaces/Format.js";

export class Todo implements Formater {
    
   constructor(
    protected id : number ,
    private text : string,
    public completed : boolean = false,
   ){}

    format() : string {
        return this.text
    }

    logger() :void {
        console.log(this.format())
    }

}
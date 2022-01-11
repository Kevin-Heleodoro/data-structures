// ES6 instantiation
export default class Stack {
    constructor(){
        this.items = [];
    }

    push(string){
        this.items.push(string);
    }

    pop(){
        return this.items.pop();
    }

    size(){
        return this.items.length
    }
}
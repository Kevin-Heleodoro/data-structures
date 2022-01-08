// ES6 instantiation
export default class Queue {
    constructor(){
        this.items = [];
    }

    enqueue(e){
        this.items.push(e)
    }

    dequeue(){
        return this.items.shift()
    }

    size(){
        return this.items.length
    }

    peek(){
        return this.items[0]
    }

    isEmpty(){
        return this.size() === 0;
    }
}

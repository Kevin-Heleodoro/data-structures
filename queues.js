class Queue {
    constructor(){
        this.items = new Array[0];
    }

    enqueue(e){
        this.items.push(e)
    }

    dequeue(){
        return this.items.shift()
    }
}
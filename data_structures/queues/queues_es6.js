// ES6 instantiation

// Using an array
// export default class Queue {
//     constructor(){
//         this.items = [];
//     }

//     enqueue(e){
//         this.items.push(e)
//     }

//     dequeue(){
//         return this.items.shift()
//     }

//     size(){
//         return this.items.length
//     }

//     peek(){
//         return this.items[0]
//     }

//     isEmpty(){
//         return this.size() === 0;
//     }
// }

export default class Queue {
    constructor(){
        this.items = 0;
        this.queue = {}
    }

    enqueue(e){
        this.queue[this.items] = e
        this.items++
    }

    dequeue(){
        return this.queue[this.items--]
    }

    size(){
        return this.items;
    }

    peek(){
        return this.queue[this.items - 1]
    }

    isEmpty(){
        return this.size() === 0
    }
}
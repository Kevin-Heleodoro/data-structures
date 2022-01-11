// ES6 instantiation

// Using an array
// export default class Stack {
//     constructor(){
//         this.items = [];
//     }

//     push(string){
//         this.items.push(string);
//     }

//     pop(){
//         return this.items.pop();
//     }

//     size(){
//         return this.items.length
//     }
// }

// Using an object -> basically a linked list
// export default class Stack {
//     constructor(){
//         this.stack = {}
//         this.head = 0
//         this.tail = 0
//     }

//     push(val) {
//         this.stack[this.tail] = val;
//         this.tail++
//     }

//     pop(){
//         let last = this.stack[this.tail - 1];
//         delete this.stack[this.tail - 1];
//         this.head++
//         return last
//     }

//     size(){
//         return this.tail - this.head
//     }
// }

// Using an object
export default class Stack {
    constructor(){
        this.stack = {}
        this.items = 0
    }

    push(val){
        this.stack[this.items++] = val
    }

    pop(){
        if(this.size() === 0){return null;}

        let last = this.stack[this.items - 1];
        delete this.stack[this.items-1]
        this.items--

        return last
    }

    size(){
        return this.items;
    }
}
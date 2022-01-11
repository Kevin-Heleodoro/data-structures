import Queue from "./data_structures/queues/queues_es6.js";
import QueueD from "./data_structures/queues/queues_decorator.js";
import sharedQueue from "./data_structures/queues/queues_funcShared.js"

import Stack from "./data_structures/stacks/stacks_es6.js";
import StackD from "./data_structures/stacks/stacks_decorator.js";
import sharedStack from "./data_structures/stacks/stacks_funcShared.js";

// STACKS

// ES6
// const plates = new Stack();

// plates.push("Fine China")
// plates.push("Dixie Double Thick")
// plates.push("Piece of Paper Towel")
// plates.size();
// plates.pop();

// console.log(plates.pop())
// console.log(plates.size())
// console.log(plates)

// Decorator
// const plates = StackD();
// const cups = StackD();

// plates.push('A')
// plates.push('B')
// plates.push('C')
// // plates.pop()

// cups.push('1')
// cups.push('2')
// cups.push('3')

// console.log(plates.size())
// console.log(plates.pop())
// console.log(plates.size())

// console.log(cups.size())
// console.log(cups.pop())
// console.log(cups.size())
// console.log(plates)


// QUEUES

// ES 6
// // const cars = new Queue()

// cars.enqueue("Jetta")
// cars.enqueue("Civic")
// cars.enqueue("Cherokee")
// // cars.dequeue();
// // cars.size();
// // cars.isEmpty();

// console.log(cars)
// console.log(cars.dequeue())
// console.log(cars)
// console.log(cars.peek())

// Functional 
const cars = sharedQueue()

cars.enqueue("Jetta")
cars.enqueue("Civic")
cars.enqueue("Cherokee")
// cars.dequeue();
// cars.size();
// cars.isEmpty();

console.log(cars)
console.log(cars.dequeue())
console.log(cars.size())

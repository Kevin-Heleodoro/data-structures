import Queue from "./data_structures/queues/queues_es6.js";
import QueueD from "./data_structures/queues/queues_decorator.js";
import sharedQueue from "./data_structures/queues/queues_funcShared.js";
import QueueProto from "./data_structures/queues/queues_prototype.js";
import QueuePseudo from "./data_structures/queues/queues_pseudo.js";

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

// const cars = sharedQueue()

// cars.enqueue("Jetta")
// cars.enqueue("Civic")
// cars.enqueue("Cherokee")
// // cars.dequeue();
// // cars.size();
// // cars.isEmpty();

// console.log(cars)
// console.log(cars.dequeue())
// console.log(cars.size())


// Prototypes

// const cars = QueueProto();
// cars.enqueue('Chevy')
// cars.enqueue('Toyota')
// cars.enqueue('Honda')
// cars.dequeue();
// console.log(cars.dequeue())

// Pseudoclassical

const cars = new QueuePseudo();
cars.enqueue('GM')
cars.enqueue('Chrysler')
console.log(cars)
cars.dequeue()
console.log(cars)
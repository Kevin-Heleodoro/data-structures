import Queue from "./data_structures/queues/queues_es6.js";
import Stack from "./data_structures/stacks/stacks_es6.js";

const cars = new Queue();

cars.enqueue("Jetta")
cars.enqueue("Civic")
cars.enqueue("Cherokee")
cars.dequeue();
cars.size();
cars.isEmpty();

// console.log(cars)

const plates = new Stack();

plates.push("Fine China")
plates.push("Dixie Double Thick")
plates.push("Piece of Paper Towel")
plates.size();
plates.pop();

// console.log(plates)
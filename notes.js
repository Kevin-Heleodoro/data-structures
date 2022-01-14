// // Prototype Chains

// const gold = {a: 'Property in gold'};

// // console.log(gold.a)
// // console.log(gold.b) // returns undefined because that value hasn't been assigned

// const blue = Object.assign({}, gold)
// // console.log(blue)

// blue.b = 'Property in blue'
// // console.log(blue)

// gold.c = 'Testing' // Will not translate to blue 
// // console.log(gold)
// // console.log(blue)

// const rose = Object.create(gold);
// console.log(rose) // Empty object
// rose.b = 'flowers'
// console.log(rose.b)
// console.log(rose.c) // Will refer to gold 
// console.log(gold)

// const Car = function(loc){
//     const obj = Object.create(Car.prototype)
//     obj.loc = loc
//     return obj
// }

// Car.prototype = {
//     move: function(){this.loc++}
// }

// const vw = Car(1)
// vw.move()
// console.log(vw.constructor)
// console.log(Car.prototype.constructor)
// console.log(vw instanceof Car)







// Functional Subclasses



// const Car = function(loc) {
//     const obj = {loc:loc};
//     obj.move = function(){obj.loc++};
//     return obj;
// };

// const Cop = function(loc){
//     const obj = Car(loc);
//     obj.siren = function(){console.log('Weeee-Uooooo')}
//     return obj;
// }

// const Van = function(loc){
//     const obj = Car(loc);
//     obj.smoke = function(){console.log('smokescreen')}
//     return obj;
// }

// let amy = Van(1);
// amy.move();
// let ben = Cop(9);
// ben.move();

// console.log(ben.siren())
// console.log(amy.smoke())





// Pseudoclassical Subclasses

// const Car = function(loc){
//     this.loc = loc;
//     // Object.create(Car.prototype)
// }

// Car.prototype = {
//     move: function(){this.loc++},
//     honk: function(){console.log('beep')},
//     constructor: Car
// }

// const Van = function(loc){
//     Car.call(this,loc); // bind the keyword this to the new instance of Van before passing it into Car().
// }

// Van.prototype = Object.create(Car.prototype // delegates Car.prototype as the prototype that Van pulls from. 
//     ,{
//         grab: {
//             value: function(){console.log('Grabbing...')}},
//         constructor : {
//             value: Van
//         }
//     }
// ); 
// // call to Van -> Van prototype -> Car prototype -> Object prototype

// const billy = new Car(5)
// billy.move()

// const betty = new Van(2)
// betty.move()
// console.log(betty.honk())
// console.log(betty.constructor)
// console.log(billy.constructor)
// // console.log(betty instanceof Van)









// Trees

// Binary search -> O(log n) time complexity -> only works if the data is actually sorted.
// Based on a true/false conditional

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    insert(data) {
        const node = new Node(data);
        if(!this.root) {this.root = node;}

        else {
            let current = this.root;
            while(true) {
                if(data.id < current.data.id) {
                    if(!current.left) {
                        current.left = node;
                        return this;
                    } else {
                        current = current.left;
                    }
                } else {
                    if(!current.right) {
                        current.right = node;
                        return this;
                    } else {
                        current = current.right;
                    }
                }
            }
        }
    }

    lookup(id) {
        if(!this.root) {return -1};

        if(this.root.data.id === id) {return this.root.data}
        else {
            let current = this.root;
            while(current) {
                if(id < current.data.id) {
                    if(!current.left) { return -1}
                    else {current = current.left}
                }
                else if(id > current.data.id) {
                    if(!current.right) {return -1}
                    else{current = current.right}
                }
                else{return current.data}
            }
        }
    }
}

const newTree = new BST();

const data1 = {
    name: 'Junior',
    id:1
}
const data2 = {
    name: 'Senior',
    id:2
}
const data3 = {
    name: 'Original',
    id:3
}

newTree.insert(data1)
newTree.insert(data2)
newTree.insert(data3)

console.log(newTree.lookup(2))
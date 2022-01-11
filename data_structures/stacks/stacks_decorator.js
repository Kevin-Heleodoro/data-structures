// Decorator pattern
// push, pop, size

// Using an object
// const Stack = function() {
//     let newStack = {};
//     let items = 0;
//     let stack = {};

//     newStack.push = function(val){
//         stack[items++] = val
//     }

//     newStack.pop = function(){
//         if(newStack.size() === 0){return null;}

//         let popped = stack[items-1];
//         delete stack[items--];

//         return popped;
//     }

//     newStack.size = function(){
//         return items;
//     }

//     return newStack;
// }

const Stack = function(){
    let newStack = [];
    let items = 0
    let stack = []

    newStack.size = function(){
        return items;
    }

    newStack.push = function(val){
        stack[items++] = val
    }

    newStack.pop = function(){
        if(newStack.size() === 0){return null;}

        let last = stack[items - 1];
        delete stack[items--]

        return last
    }

    return newStack
}

export default Stack;
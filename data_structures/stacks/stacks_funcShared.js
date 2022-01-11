// Functional Instatiation with shared methods

// const Stack = function(){
//     let newStack = {};
//     let items = 0;
//     let stack = {};
//     // extends(newStack, Stack.methods)
// }

// Stack.size = function(){
//     return items;
// }

// Stack.push = function(val){
//     stack[items++] = val
//     return stack
// }

// Stack.pop = function() {
//     if(Stack.size() === 0){return null}

//     let last = stack[items-1];
//     delete stack[items-1]
//     return last
// }

const Stack = function(){
    const newStack = {}

    newStack.stack = {}
    newStack.items = 0
    Object.assign(newStack, Stack.methods)

    return newStack;
}

Stack.methods = {};

Stack.methods.push = function(val){
    this.stack[this.items++] = val;
}

Stack.methods.pop = function(){
    if(this.size() === 0) {return null}

    let last = this.stack[this.items - 1]
    delete this.stack[this.items--]

    return last
}

Stack.methods.size = function(){
    return this.items;
}


export default Stack
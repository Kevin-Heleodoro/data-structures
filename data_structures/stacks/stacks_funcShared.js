// Functional Instatiation with shared methods

// Using object without Object.assign -> This is not the way to do it, but it works for this scenario
// const Stack = function(){
//     let newStack = {};
//     let items = 0;
//     let stack = {};
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

// Using object
// const Stack = function(){
//     const newStack = {}

//     newStack.stack = {}
//     newStack.items = 0
//     Object.assign(newStack, Stack.methods)

//     return newStack;
// }

// Stack.methods = {};

// Stack.methods.push = function(val){
//     this.stack[this.items++] = val;
// }

// Stack.methods.pop = function(){
//     if(this.size() === 0) {return null}

//     let last = this.stack[this.items - 1]
//     delete this.stack[this.items--]

//     return last
// }

// Stack.methods.size = function(){
//     return this.items;
// }

// Direct assignment using the 'this' keyword
const Stack = function(){
    let newStack = {};
    newStack.items = 0
    newStack.stack = {}
}

Stack.size = function(){
    return this.items;
}

Stack.push = function(val){
    this.stack[this.items++] = val;
}

Stack.pop = function() {
    if(this.size() === 0){return null}

    let last = this.stack[this.items-1];
    delete this.stack[this.items-1]
    return last
}


export default Stack
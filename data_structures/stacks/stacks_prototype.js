// Prototype

const Stack = function(){
    const newStack = Object.create(Stack.prototype)
    newStack.items = 0;
    newStack.stack = {};
    return newStack
}

Stack.prototype = {
    size: function(){
        return this.items;
    },
    push: function(val){
        this.stack[this.items++] = val;
    },
    pop: function(){
        if(this.size() === 0) return null;
        let last = this.stack[this.items - 1];
        delete this.stack[this.items - 1];
        this.items--

        return last;
    }
}

export default Stack;
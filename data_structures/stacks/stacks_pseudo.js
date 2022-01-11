//Pseudoclassical -> pattern is 'let example = new Stack();'
const Stack = function(){
    this.stack = {};
    this.items = 0;
}

Stack.prototype = {
    push: function(val){
        this.stack[this.items++] = val;
    },
    pop: function(){
        if(this.size() === 0) return null;

        let last = this.stack[this.items - 1]
        delete this.stack[this.items - 1]
        this.items--

        return last
    },
    size: function(){
        return this.items;
    }
}

export default Stack;
// Pseudoclassical

const Queue = function(){
    this.queue = {}
    this.items = 0
    this.front = 0
}

Queue.prototype = {
    size: function(){
        return this.items;
    },
    enqueue: function(val){
        this.queue[this.items++] = val;
    },
    dequeue: function(){
        if(this.size() === 0) return null;

        let first = this.queue[this.front]
        delete this.queue[this.front++]
        this.items--

        if(this.items === 0) this.front = 0;

        return first;
    }
}

export default Queue;
// Prototype

const Queue = function(){
    const newQueue = Object.create(Queue.prototype);
    newQueue.queue = {}
    newQueue.items = 0
    newQueue.front = 0
    return newQueue
}

Queue.prototype = {
    enqueue: function(val){
        this.queue[this.items++] = val;
    },
    dequeue: function(){
        if(this.size() === 0) return null;

        let first = this.queue[this.front];
        delete this.queue[this.front++];
        this.items--

        if(this.items === 0) return null;

        return first
    },
    size: function(){
        return this.items;
    }
}

export default Queue;
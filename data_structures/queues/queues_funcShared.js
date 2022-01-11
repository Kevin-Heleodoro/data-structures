// Functional instantiation with shared methods

const Queue = function(){
    const obj = {}

    obj.queue= {}
    obj.front = 0;
    obj.items = 0;

    Object.assign(obj, Queue.methods)
    return obj;
}

Queue.methods = {
    enqueue: function(e){
        this.queue[this.items++] = e
    },
    dequeue: function(){
        if(this.size() === 0){return null}

        let last = this.queue[this.front]
        delete this.queue[this.front++]
        this.items--

        if(this.items === 0){this.front = 0;}
        return last;
    },
    size: function(){
        return this.items;
    }
}


export default Queue;
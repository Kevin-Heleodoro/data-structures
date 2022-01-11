// Functional instantiation with shared methods

const Queue = function(){
    const obj = {}

    const queue= {}
    let front = 0;
    let items = 0;

    Object.assign(obj, Queue.methods)
    return obj;
}

Queue.methods = {
    enqueue: function(e){
        queue[items++] = e
    },
    dequeue: function(){
        if(obj.size() === 0){return null}

        let last = queue[front]
        delete queue[front++]
        items--

        if(items === 0){front = 0;}
        return last;
    },
    size: function(){
        return items;
    }
}


export default Queue;
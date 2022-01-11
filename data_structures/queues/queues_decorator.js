// Functional Instantiation

const Queue = function(){
    const obj = {}

    const queue = {}
    let items = 0
    let front = 0

    obj.enqueue = function(e){
        queue[items++] = e
    }

    obj.dequeue = function(){
        if(obj.size() === 0){return null}

        let first = queue[front]
        delete queue[front++]
        items--

        if(items === 0) {front = 0}
        return first
    }

    obj.size = function(){
        return items
    }
    return obj
}

export default Queue
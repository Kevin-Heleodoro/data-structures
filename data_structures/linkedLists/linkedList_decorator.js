// Decorator Pattern
const Node = function(data){
    const node = {};
    node.data = data;
    node.next = null;
}

const LinkedList = function(){
    const list = {};
    list.head = null;
    list.tail = null;
    list.length = 0;

    
}

export default LinkedList;
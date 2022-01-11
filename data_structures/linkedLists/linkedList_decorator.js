// Decorator Pattern
const Node = function(data){
    const node = {};
    node.data = data;
    node.next = null;
}

const LinkedList = function(){
    const newList = {};
    
    const list = {};
    let head = null;
    let tail = null;
    let length = 0;

    newList.print = function(){
        const nodeArray = [];
        let current = newList.head;
        while(current){
            nodeArray.push(current.data);
            current = current.next;
        }
        return nodeArray;
    }

    newList.addToTail= function(data){
        const newNode = Node(data);
    }
}

export default LinkedList;
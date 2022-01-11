// Prototype

const LinkedList = function() {
    this.head = null;
    this.tail = null;
}

LinkedList.prototype.makeNode = function(data){
    const node = {};
    node.data = data;
    node.next = null;
    return node;
}

LinkedList.prototype.addToTail = function(data) {
    const newNode = makeNode(data);
    if(!this.head) this.head = newNode;
    this.tail.next = newNode;
    this.tail = newNode;
}


export default LinkedList;
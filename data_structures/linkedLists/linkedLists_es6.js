// ES6 Instantiation
class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

export default class LinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    print(){
        const list = []
        let current = this.head
        while(current) {
            list.push(current.data)
            current = current.next
        }
        return list;
    }

    addHead(data) {
        const newNode = new Node(data);
        if(!this.head) { // If no head,
            this.head = newNode; // assign to head and
            this.tail = newNode; // assign to tail
        }
        else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this
    }

    removeHead(){
        if(!this.head) return false;
        else {
            let temp = this.head;
            this.head = this.head.next;
        }
        this.length--
        return this;
    }
    
    addToTail(data){
        const newNode = new Node(data);
        if(!this.tail) {
            this.tail = newNode;
            this.head = newNode;
        }
        else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++
        return this;
    }

    contains(query){
        if(!this.head) return false;
        else {
            let current = this.head;
            while(current) {
                if(current.data === query) return true;
                current = current.next
            }
        }
        return false;
    }

    readNode(index) {
        if(index < 0 || index > this.length) return false;
        else {
            let current = this.head;
            let counter = 0;
            while(counter < index) {
                counter++
                current = current.next
            }
            return current.data;
        }
    }

    delete(index){
        if(index < 0 || index > this.length) return false;
        else {
            let current = this.head;
            let counter = 0;
            while(counter < index - 1) {
                counter++
                current = current.next;
            }
            let temp = current.next;
            current.next = temp.next;
            this.length--
        }
        return this.print();
    }

    reverse(){
        if(!this.head) return -1;
        
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        
        let prev = null;
        let next;
        for(let i = 0; i < this.length; i++){
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
    }

    insert(index, data) {
        if(index < 0 || index > this.length) return false;

        else if(index === 0) this.addHead(data);

        else if(index === this.length) this.addToTail(data);

        else {
            const newNode = new Node(data);
            let current = this.head;
            let counter = 0;

            while(counter < index - 1){
                counter++;
                current = current.next;
            }
            let temp = current.next;
            current.next = newNode;
            newNode.next = temp;
            this.length++
        }
    }
}
// ES6 instantiation


// Simple Data Tree
// export default class TreeNode {
//     constructor(value){
//         this.value = value
//         this.descendants = [];
//     }
// }


// Binary Search Tree
const LEFT = 0;
const RIGHT = 1;

class TreeNode {
    constructor(value){
        this.value = value;
        this.descendants = [];
        this.parent = null;
    }

    get left() {
        return this.descendants[LEFT]
    }

    set left(node) {
        this.descendants[LEFT] = node;
        if(node) {
            node.parent = this;
        }
    }

    get right() {
        return this.descendants[RIGHT];
    }

    set right(node) {
        this.descendants[RIGHT] = node;
        if(node) {
            node.parent = this;
        }
    }
}

export default class BinarySearchTree {
    constructor() {
        this.root = null;
        this.size = 0;
    }

    add(value){
        const newNode = new TreeNode(value);

        if(this.root) {
            const {found, parent} = this.findNodeAndParent(value);
            if(found) {
                found.meta.multiplicity = (found.meta.multiplicity || 1 ) + 1;
            } else if (value < parent.value) {
                parent.left = newNode;
            } else {
                parent.right = newNode;
            }
        }
        else {
            this.root = newNode;
        }
        this.size++
        return newNode;
    }
    find(value){}
    remove(value){}
    getMax(){}
    getMin(){}

    findNodeAndParent(value) {
        let node = this.root;
        let parent;

        while(node){
            if(node.value === value){
                break;
            }
            parent = node;
            node = (value >= node.value) ? node.right : node.left;
        }
        return {found: node, parent};
    }
}
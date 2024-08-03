class Node {
    constructor(value){
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }

    insert(value){
        let newNode  = new Node(value);

        if(!this.root){
            this.root = newNode;
            return this;
        }

        let tree = this.root;

        while(true){
            if(value < tree.value){
                if(!tree.left){
                    tree.left = newNode;
                    return this;
                }
                tree = tree.left;
            }else{
                if(!tree.right){
                    tree.right = newNode;
                    return this;
                }
                tree = tree.right;
            }
        }
        return this;
    }


    search(value){




        
        return value;
    }
}

const tree = new BinarySearchTree();

console.log(tree.insert(3));
console.log(tree.insert(6));
console.log(tree.insert(1));
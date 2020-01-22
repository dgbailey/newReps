class BST{
    constructor(head){
        this.head = head || null
    }

    addNode(node,current=this.head){
        if(!this.head){
            this.head = node;
           
           
        }
        else if(current){


            if(current.value > node.value){
                if(current.left){
                    this.addNode(node,current.left);
                }
                else{
                    current.left = node;
                }
            }

            else if(current.value < node.value){
                if(current.right){
                    this.addNode(node,current.right);
                }
                else{
                    current.right = node;
                }
            }

        }
    }

    inOrder(node){
        if(!node){
            return;
        }

        this.inOrder(node.left);
        console.log(node.value);
        this.inOrder(node.right);

    }

    preOrder(node){
        //parents first
        if(!node){
            return
        }
        console.log(node.value);
        this.preOrder(node.left);
        this.preOrder(node.right);
       

    }

    postOrder(node){
        if(!node){
            return
        }
        //children first
        this.postOrder(node.left)
        this.postOrder(node.right)
        console.log(node.value)
    }
}


class Node{
    constructor(value){
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

let testList = [1,3,4,5,2]

let myBST = new BST();

testList.forEach(item => {

        let newItem = new Node(item);
        myBST.addNode(newItem);
})

console.log(myBST.head)
// myBST.inOrder(myBST.head)
// myBST.preOrder(myBST.head)
myBST.postOrder(myBST.head);
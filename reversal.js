//create and reverse a doubly linked list

class DLL{
    constructor(node){
        this.head = node;
    }


    add(node,current=this.head){
       
        if(!current.next){
           current.next = node;
            node.prev = this.head;

        }
        else{
            this.add(node,current.next);
        }
    }

    reverse(){
        let prev = null;
        let current = this.head;
       
        while(current){
            let temp = current.next;
            current.next = prev;
            current.previous = temp;
            prev = current;
            current = temp;
        }
        this.head = prev;
    }


}

class Node{
    constructor(val){
        this.next = null;
        this.prev = null;
        this.value = val;
    }
}


let myHead = new Node(3);
let myDLL = new DLL(myHead);


let values = [1,2,3,4,5];
values.forEach(v => {
    let nv = new Node(v);
    myDLL.add(nv);
})
myDLL.reverse();



let current = myDLL.head;
while(current){
    console.log(current.value);
    current = current.next;
}
    

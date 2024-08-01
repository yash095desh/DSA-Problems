

// Creatin singly linked list and methods

class Node {
    constructor(value){
        this.value = value;
        this.next  = null ;
    }
}


class SinglyLinkedList {
    constructor(){
        this.head = null ;
        this.tail = null ;
        this.length = 0;
    }

    push(value){
        if(!value) throw new Error ("value required");
        let node = new Node(value)
        if(!this.head){
            this.head = node;
            this.tail = node;
        }else{
            this.tail.next = node;
            this.tail = this.tail.next;
        }
        this.length++
        return this;
    }
    pop(){
        if(!this.head) return undefined;
        let current = this.head;
        let prev = current;
        while(current.next){
            prev = current
            current = current.next;
        }
        prev.next = null;
        this.tail = prev;
        this.length--;
        if(this.length == 0){
            this.head = null;
            this.tail = null;
        }
        return current
    }

    shift(){
        if(!this.head)return undefined;
        let prev = this.head;
        this.head = prev.next;
        this.length--
        if(this.length ===0 ){
            this.tail = null;
        }
        return prev
    }

    unshift(value){
        if(!value)return new Error("requied a value");
        let node = new Node(value)
        if(!this.head){
                this.head = node;
                this.tail = node;
        }else{
            node.next = this.head;
            this.head = node;
        }
        this.length++;
        return this
    }

    get(index){
        if(!this.head || index >= this.length )return null;
        let counter = 0;
        let node = this.head
        while(counter !== index){
            node = node.next;
            counter++;
        }
        return node
    }
    set(index,value){
         let node = this.get(index)
         if(node){
             node.value = value
             return true
         }
         return false
    }

    traverse(){
        let current = this.head;
        while(current){
            console.log(current.value);
            current = current.next;
        }
        return this;
    }
    insert(index,value){
        if(index<0 || index>this.length)return false;
        if(index === this.length) return !!this.push(value)
        if(index === 0) return !!this.unshift(value)
        let prevNode = this.get(--index)
        let newNode = new Node(value)
        newNode.next = prevNode.next;
        prevNode.next = newNode;
        this.length++
        return true 
    }
    remove(index){
        if(index<0 || index>= this.length)return false;
        if(index === this.length -1) return this.pop()
        if(index === 0)return this.shift()
        let prevNode = this.get(--index);
        let removedNode = prevNode.next
         prevNode.next = removedNode.next;
         this.length--
         return removedNode;
    }
    reverse(){
        let current = this.head;
        let prev = null;
        let next = current.next;
        this.head = this.tail;
        this.tail = current;
        while(current){
            current.next = prev;
            prev = current;
            current = next;
            next = current?.next;
        } 
        
        return this
    }
}

let S1 = new SinglyLinkedList()

S1.push("hello")
S1.push("how")
S1.push("Are")
S1.push("You")
// S1.shift()
// S1.shift()
// S1.shift()
// S1.shift()
console.log(S1.reverse())
console.log(S1.traverse())







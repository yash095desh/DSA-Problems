
class Node {
    constructor(value){
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        let node = new Node(val)
        if(!this.head){
            this.head = node;
            this.tail = node;
        }else{
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.length++
        return this
    }

    pop(){
        if(!this.head)return undefined;
        let node = this.tail ;
        if(!this.head.next){
            this.head = null
            this.tail = null
        }else{
            node.prev.next = null;
            this.tail = node.prev;
            node.prev = null;
        }
        this.length--;
        return node
    }
    shift(){
        if(!this.head)return undefined;
        let popedNode = this.head
        if(!this.head.next){
            this.head = null;
            this.tail = null;
        }else{
            this.head = popedNode.next;
            this.head.prev = null;
            popedNode.next = null;
        }
        return popedNode
    }
    unshift(val){
        let newNode = new Node(val)
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode
        }
        this.length++;
        return true
    }
    get(index){
        if(index<0 || index>=this.length) return null;
        let node ;
        let current;
        if(index >= this.length/2){
            current = this.length -1 ;
            node = this.tail;
            while(current > index){
                node = node.prev;
                current--;
            }  
        }else{
            current = 0;
            node = this.head;
            while(current < index){
                node = node.next;
                current++;
            }
        }
        return node
    }  
    set(index,value){
        let foundNode = this.get(index)
        if(foundNode){
            foundNode.value = value;
            return true
        }
        return false
    }
    insert(index,value){
        if(index<0 || index > this.length) return false;
        if(index === 0) return !!this.unshift(value);
        if(index === this.length) return !!this.push(value);
        let newNode = new Node(value)
        let prevNode = this.get(--index);
        let nextNode = prevNode.next;
        prevNode.next = newNode;
        newNode.prev = prevNode;
        newNode.next= nextNode;
        nextNode.prev = newNode;
        this.length++;
        return true
    }
    remove(index){
        if(index<0 || index>= this.length)return null;
        if(index === 0 )return this.shift();
        if(index === this.length -1) return this.pop();
        let popedNode = this.get(index)
        let prevNode = popedNode.prev
        popedNode.prev.next = popedNode.next;
        popedNode.next.prev = prevNode; 
        this.length--;
        return popedNode;
    }

    print(){
        let arr = [];
        let current = this.head;
        while(current){
            arr.push(current.value)
            current = current.next
        }
        return arr
    }
}

const D1 = new DoublyLinkedList();
D1.push('Hi')
D1.push('Hello')
D1.push('How')
D1.push('Are')
D1.push('You')
console.log(D1.remove(3));
console.log(D1.print());
console.log(D1)
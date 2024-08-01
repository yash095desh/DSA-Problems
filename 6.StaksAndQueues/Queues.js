
class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queues {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    enqueue(value){
        let node = new Node(value);
        if(!this.first){
            this.first = node;
            this.last = node;
        }else{
            this.last.next = node;
            this.last = node;
        }
        return ++this.size;
    }
    dequeue(){
        if(!this.first)return null
        let current = this.first;
        if(this.first == this.last)return this.last = null
        this.first = current.next;
        current.next = null;
        this.size--
        return current
    }
}

const q = new Queues()

console.log(q.enqueue(23))
console.log(q.enqueue(25))
console.log(q.enqueue(26))
console.log(q.dequeue())
console.log(q);

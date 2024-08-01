
class Node {
    constructor(value){
        this.value = value;
        this.next = null ;
    }
}

class Stacks {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    push(val){
        let node = new Node(val);
        if(!this.first){
            this.first = node;
            this.last = node;
        }else{
            node.next = this.first;
            this.first = node;
        }
        return ++this.size;
    }
    pop(){
        if(!this.first)return null;
        let current = this.first;
        if(this.first == this.last){
            this.last = null;
        }
            this.first = current.next;
            current.next = null;
            this.size--;
            return current;
    }
}

const s1 = new Stacks()
console.log(s1.push(23))
console.log(s1.push(25))
console.log(s1.push(26))
console.log(s1.pop())
console.log(s1.pop())
console.log(s1.pop())
console.log(s1.pop())
console.log(s1);
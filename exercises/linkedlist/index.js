// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor(){
    this.head = null;
  }

  insertFirst(data){
    this.head = new Node(data, this.head);
  }

  size(){
    let count = 0;
    let node = this.head;
    while(node){
      count++;
      node = node.next;
    }
    return count;
  }

  getFirst(){
    return this.head;
  }

  getLast(){ //solution without using an IF
    /*let node = this.head;
    let last = null;
    while(node){
      last = node;
      node = node.next;
    }
    return last;*/
    return this.getAt(this.size() - 1);
  }

  clear(){
    this.head = null;
  }

  removeFirst(){
    if(this.head){
      this.head = this.head.next;
    }
  }

  removeLast(){
    if(this.head){
      let previous = this.head;
      let node = this.head.next;
      if(!node){
        this.head = null;
        return;
      }
      while(node.next){
        previous = node;
        node = node.next;
      }
      previous.next = null;
    }
  }

  insertLast(data){
    if(this.head) {
      this.getLast().next = new Node(data);
    }else{
      this.head = new Node(data);
    }
  }

  getAt(index){  //solution without an IF
    let count = 0;
    let node = this.head ? this.head : null;
    while(node && count < index){
      node = node.next;
      count ++;
    }
    return node;
  }

  removeAt(index){
    let node = this.getAt(index);
    if(node){
      if(index === 0){
        this.head = this.head.next;
        return;
      }
      let previous = this.getAt(index - 1);
      let next = this.getAt(index + 1);
      previous.next = next;
    }
  }

  insertAt(data, index){
    let node = this.getAt(index);
    let newNode;
    if(node){
      newNode = new Node(data, node);
      if(index === 0){
        this.head = newNode;
        return;
      }
      let previous = this.getAt(index - 1);
      previous.next = newNode;
    }else{
      this.insertLast(data);
    }
  }

  forEach(fn) {
    let node = this.head;
    let counter = 0;
    while (node) {
      fn(node, counter);
      node = node.next;
      counter++;
    }
  }

  *[Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
  }


}

module.exports = { Node, LinkedList };

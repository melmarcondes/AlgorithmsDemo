// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {

  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }

  //recursive solution
  insert(data) {
    if (data < this.data && this.left) {
      this.left.insert(data);
    } else if (data < this.data) {
      this.left = new Node(data);
    } else if (data > this.data && this.right) {
      this.right.insert(data);
    } else if (data > this.data) {
      this.right = new Node(data);
    }
  }

  //My first solution
  /*insert(data) {
    let next = this;
    let parent;
    while(next){
      parent = next;
      if(data > next.data){
        next = next.right;
      }else{
        next = next.left;
      }
    }
    if(parent.data < data){
      parent.right = new Node(data);
    }else{
      parent.left = new Node(data);
    }
  } */

  contains(data) {
    if (this.data === data) {
      return this;
    }
    if (data > this.data && this.right) {
      return this.right.contains(data);
    }else if (data < this.data && this.left) {
      return this.left.contains(data);
    }
    return null;
  }


/* My first solution
  contains(data) {
    let next = this;
    while(next && next.data != data){
      if(data > next.data){
        next = next.right;
      }else{
        next = next.left;
      }
    }
    return next;
  }*/

}

module.exports = Node;

// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

class Queue {
  constructor(){
    this.data = [];
  }

  add(record){
    this.data.unshift(record);
  }

  remove(){
    let last = this.data.length > 0 ? this.data.length - 1 : 0;
    let element = this.data[last];
    this.data.length = last;
    return element;
    //return this.data.pop();
  }

}

module.exports = Queue;

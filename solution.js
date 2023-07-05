const { nums, words } = require("./data/data.js");
const { inspect } = require("util");

class Node {
  constructor (data, next) {
    this.data = data;
    this.next = next
  }
}

class Queue {
  constructor () {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  peek () {
    return this.first
  }
  count () {
    let count = 0;
    let current = this.first;
    while(current) {
      count++;
      current = current.next
    }
    return count
  }
  enqueue (data) {
    let newNode = new Node(data);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode
    }
  }
  dequeue () {
    let dequeue = "";
    if (this.first) {
      dequeue = this.first;
      this.first = this.first.next
    }
    return dequeue.data;
  }
  findMax () {
    let max = this.first.data;
    let current = this.first;
    while(current) {
      if( max < current.data ) {
        max = current.data
      }
      current = current.next;
    }
    return max;
  }
  getLast () {
    return this.last
  }
  isEmpty () {
    return this.first === null
  }
}

class Stack {
  constructor (top) {
    this.top = top
  }
  push (data) {
    const newNode = new Node(data);
    newNode.next = this.top;
    this.top = newNode;
  }
  pop () {
    let popped = null;
    if (this.top) {
      popped = this.top;
      this.top = this.top.next
    }
    return popped;
  }
  size () {
    let size = 0;
    let current = this.top;
    while(current){
      size++;
      current = current.next;
    }
    return size;
  }
  isEmpty () {
    return this.size() === 0
  }
  peek () {
    return this.top
  }
  findMin () {
    let min = this.top;
    let current = this.top;
    while(current) {
      if(min.data > current.data){
        min = current;
      }
      current = current.next;
    }
    return min.data;
  }
  sort() {
    const sortedStack = new Stack();
    while (!this.isEmpty()) {
      const temp = this.pop();
  
      while (!sortedStack.isEmpty() && sortedStack.peek().data < temp.data) {
        this.push(sortedStack.pop().data);
      }
  
      sortedStack.push(temp.data);
    }
  
    this.top = sortedStack.top;
  }
}

wordStack = new Stack();
for (let word of words) {
  wordStack.push(word);
}
numStack = new Stack();
for (let num of nums) {
  numStack.push(num);
}

// console.log(numStack)
// console.log(numStack.sort())
// console.log(numStack)

numQueue = new Queue();
for (let num of nums) {
  numQueue.enqueue(num);
}
console.log(numQueue.findMax())
// numQueue.dequeue()
// console.log(numQueue)

module.exports = {
  Node,
  Queue,
  Stack,
};

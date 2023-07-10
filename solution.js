const { nums, words } = require("./data/data.js");
const { inspect } = require("util");

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor(top = null) {
    this.top = top;
  }

  peek() {
    if (this.top === null) {
      console.log("The stack is empty");
    }
    return this.top;
  }

  isEmpty() {
    return this.top === null;
  }

  push(data) {
    const newItem = new Node(data);
    newItem.next = this.top;
    this.top = newItem;
  }

  pop() {
    if (this.top === null) {
      console.log("The stack is empty");
    }

    let item = this.top;
    if (item) {
      let newItem = item.next;
      this.top = newItem;
      return item;
    }
  }

  size() {
    let size = 0;
    let item = this.top;
    while(item) {
      size++;
      item = item.next;
    }
    return size;
  }

  findMin() {
    let min = this.top;
    let item = this.top;
    while(item) {
      if (item.data < min.data) {
        min = item;
      }
      item = item.next;
    }
    return min.data;
  }

  sort() {
    let stack = new Stack();
    while(!this.isEmpty()) {
      let item = this.pop();
      
      while(!stack.isEmpty() && stack.peek().data < item.data) {
        this.push(stack.pop().data);
      }

      stack.push(item.data);
    }
    this.top = stack.top;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
    this.max = null;
  }

  enqueue(data) {
    let newItem = new Node(data);
    if (!this.first) {
      this.first = newItem;
      this.last = newItem;
    } else {
      this.last.next = newItem;
      this.last = newItem;
    }

    return ++this.size;
  }

  dequeue() {
    if (this.first === null) {
      console.log("The queue is empty");
    }
    let item = this.first;
    if (this.first === this.last) {
      this.last === null;
    }
    this.first = this.first.next;
    this.size--;
    return item.data;
  }

  count() {
    let count = 0;
    let item = this.first;
    while (item) {
      count++;
      item = item.next;
    }
    return count;
  }

  isEmpty() {
    return this.first === null;
  }

  peek() {
    if (!this.first) {
      console.log("The queue is empty");
    }
    return this.first;
  }

  getLast() {
    if (!this.last) {
      console.log("The queue is empty");
    }
    return this.last;
  }

  findMax() {
    let max = this.first;
    let item = this.first;
    while (item) {
      if (item.data > max.data) {
        max = item;
      }
      item = item.next;
    }
    return max.data;
  }
}





module.exports = {
  Node,
  Queue,
  Stack,
};

class Node {
  constructor(data = null) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(data) {
    const newNode = new Node(data);
    if (this.top === null) {
      this.top = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }
  }

  pop() {
    if (this.top === null) {
      return null;
    }
    const removedNode = this.top;
    this.top = this.top.next;
    return removedNode.data;
  }

  size() {
    let count = 0;
    let current = this.top;
    while (current !== null) {
      count++;
      current = current.next;
    }
    return count;
  }

  isEmpty() {
    return this.top === null;
  }

  peek() {
    if (this.top === null) {
      return null;
    }
    return this.top.data;
  }

  findMin() {
    if (this.top === null) {
      return null;
    }
    let current = this.top;
    let min = this.top.data;
    while (current !== null) {
      if (current.data < min) {
        min = current.data;
      }
      current = current.next;
    }
    return min;
  }

  sort() {
    if (this.top === null) {
      return;
    }
    const tempStack = new Stack();
    while (!this.isEmpty()) {
      const temp = this.pop();
      while (!tempStack.isEmpty() && tempStack.peek() > temp) {
        this.push(tempStack.pop());
      }
      tempStack.push(temp);
    }
    while (!tempStack.isEmpty()) {
      this.push(tempStack.pop());
    }
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
    this.max = Number.NEGATIVE_INFINITY;
  }

  enqueue(data) {
    const newNode = new Node(data);
    if (this.first === null) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.size++;
    if (data > this.max) {
      this.max = data;
    }
  }

  dequeue() {
    if (this.first === null) {
      return null;
    }
    const removedNode = this.first;
    this.first = this.first.next;
    this.size--;
    if (this.size === 0) {
      this.last = null;
      this.max = Number.NEGATIVE_INFINITY;
    }
    return removedNode.data;
  }

  count() {
    return this.size;
  }

  isEmpty() {
    return this.size === 0;
  }

  peek() {
    if (this.first === null) {
      return null;
    }
    return this.first.data;
  }

  getLast() {
    if (this.last === null) {
      return null;
    }
    return this.last.data;
  }

  findMax() {
    return this.max;
  }
}

module.exports = {
  Node,
  Queue,
  Stack,
};

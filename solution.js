class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  push(data) {
    const newNode = new Node(data);
    newNode.next = this.top;
    this.top = newNode;
    this.size++;
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    }

    const poppedNode = this.top;
    this.top = poppedNode.next;
    poppedNode.next = null;
    this.size--;
    return poppedNode.data;
  }

  isEmpty() {
    return this.size === 0;
  }

  findMin() {
    if (this.isEmpty()) {
      return null;
    }

    let currentNode = this.top;
    let minValue = currentNode.data;

    while (currentNode !== null) {
      if (currentNode.data < minValue) {
        minValue = currentNode.data;
      }
      currentNode = currentNode.next;
    }

    return minValue;
  }

  peek() {
    return this.isEmpty() ? null : this.top.data;
  }

  sort() {
    if (this.isEmpty()) {
      return;
    }

    const tempStack = new Stack();
    let current = this.pop();

    while (current) {
      while (!tempStack.isEmpty() && tempStack.peek() > current) {
        this.push(tempStack.pop());
      }
      tempStack.push(current);
      current = this.pop();
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
  }

  enqueue(data) {
    const newNode = new Node(data);

    if (this.isEmpty()) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    this.size++;
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }

    const dequeuedNode = this.first;
    this.first = dequeuedNode.next;
    dequeuedNode.next = null;
    this.size--;

    if (this.isEmpty()) {
      this.last = null;
    }

    return dequeuedNode.data;
  }

  isEmpty() {
    return this.size === 0;
  }

  findMax() {
    if (this.isEmpty()) {
      return null;
    }

    let currentNode = this.first;
    let maxValue = currentNode.data;

    while (currentNode !== null) {
      if (currentNode.data > maxValue) {
        maxValue = currentNode.data;
      }
      currentNode = currentNode.next;
    }

    return maxValue;
  }

  getLast() {
    return this.isEmpty() ? null : this.last.data;
  }

  peek() {
    return this.isEmpty() ? null : this.first.data;
  }
}

module.exports = {
  Node,
  Queue,
  Stack,
};

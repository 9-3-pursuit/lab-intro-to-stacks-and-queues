const { nums, words } = require("./data/data.js");
const { inspect } = require("util");

class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

class Stack {
  constructor() {
    this.top = null
    // this.size = 0
  }
  push(data) {
    const newNode = new Node(data)
    newNode.next = this.top
    this.top = newNode
    // this.size++
  }

  pop() {
    if (!this.top) {
      return null
    }

    const removedNode = this.top
    this.top = removedNode.next
    removedNode.next = null
    // this.size--

    return removedNode
  }

  size() {
    let count = 0
    let current = this.top

    while (current !== null) {
      count++
      current = current.next
    }
    return count
  }

  isEmpty() {
    if (this.top === null) {
      return true
    }

    return false
  }

  peek() {
    if (this.top) {
      return this.top
    }
    return null
  }

  findMin() {
    if (this.top === null) {
      return null
    }

    let current = this.top
    let min = current.data

    while (current !== null) {
      if (current.data < min) {
        min = current.data 
      }
      current = current.next
    }

    return min
  }

  sort() {

    let array = []
    let array1 = new Stack()
    while (this.top != null) {
      let temporary = this.pop().data
      array.push(temporary)
    } 

    
    let sortedArray2 = array.sort().reverse()
    
    for (let element of sortedArray2) {
      array1.push(element)
    }
    this.top = array1.top
    console.log('array1:', array1, 'array2', sortedArray2)
    console.log('test', this.top.data)
    
  }

  
}

class Queue{

  constructor() {
    this.first = null
    this.last = null
    this.size = 0
  }

  enqueue(data) {
    const newNode = new Node(data)

   

    if (!this.first) {
      this.first = newNode
      this.last = newNode
    } else {
      this.last.next = newNode
      this.last = newNode
    }
    this.size++
   
  }

  dequeue() {

    if (!this.first) {
      return null
    }

    const removedNode = this.first
    this.first = removedNode.next
    removedNode.next = null
    this.size--

    if (!this.first) {
      this.last = null
    }

    return removedNode.data
    
  }

  count() {
    let count = 0;

    let current = this.first

    while (current !== null) {
      count++
      current = current.next
    }

    return count

   
  
  }

  isEmpty() {
    if (this.first === null) {
      return true
    }

    return false
  }

  peek() {
    return this.first
  }

  getLast() {
    return this.last
  }

  findMax() {
    if (this.first === null) {
      return null
    }

    let current = this.first
    let max = current.data

    while (current !== null) {
      if (current.data > max) {
        max = current.data 
      }
      current = current.next
    }

    return max
  }
    
}




module.exports = {
  Node,
  Queue,
  Stack,
};

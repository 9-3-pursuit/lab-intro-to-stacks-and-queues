const { nums, words } = require("./data/data.js");
const { inspect, isNull } = require("util");

class Node {
  constructor(data){
    this.data = data;
    this.next = null;
  }
}

class Stack { 
  constructor(top = null){
    this.top = top
  }
  push(data){
    const newNum = new Node(data);
    newNum.next = this.top;
    this.top = newNum;
   
  }
  size(){
    let head = this.top;
    let counter = 0;
    while (head !== null) {
      
      counter++
      head = head.next;
    }
    return counter
  }
  pop(){
    if (this.top === null){
      throw new Error("Empty Stack!");
    }
    let word = this.top;
    if (word){
      let newWord = word.next;
      this.top = newWord;
      return word;
    }
  }
  isEmpty(){
    return this.top === null;
  }
  findMin(){
    if (this.top === null){

      throw new Error("Empty Stack!")
    }
    
    let min  = this.top.data;
    let currentNum = this.top.next;
    while (currentNum !== null){
      if (currentNum.data < min){
        min = currentNum.data;
        
      }
      currentNum = currentNum.next;
      
    }
    return min;

  }
  peek(){
    if (this.top === null){
      throw new Error("Empty Stack");
    }
    return this.top;
  }
  sort(){
    if(this.top === null || this.top.next === null){
      return;
    }
    let currentNode = this.top;
    let nextNode = currentNode.next;
    let size = this.size();

    for (let i = 0; i < size -1; i++){
      currentNode = this.top;
      nextNode = currentNode.next;

      for (let j = 0; j < size -1 - i; j++){
        if (currentNode.data > nextNode.data){
          let placeHolder = currentNode.data;
          currentNode.data = nextNode.data;
          nextNode.data = placeHolder;
        }
        currentNode = nextNode;
        nextNode = nextNode.next;

      }
    }

  }
}
    


class Queue {
  constructor(size = 0,first = null, last = null){
    this.first = first;
    this.last = last;
    this.size = size;
    this.max = this.data;
  }
  enqueue(data){
    let newItem = new Node(data);
    if(!this.first){
      this.first = newItem;
      this.last = newItem;
    } else {
      this.last.next = newItem;
      this.last = newItem;
    }
    return ++this.size;
  }
  dequeue(){
    if (this.first === null){
      throw new Error("Queue Empty!");
    }
    const currentItem = this.first;
    if(currentItem === this.last){
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return currentItem.data;
  }
  count(data){
    let newItem = new Node(data);
    if (!this.first) {
      this.first = newItem;
      this.last = newItem;
    } else {
      this.last.next = newItem;
      this.last = newItem;
    }
    return this.size++;
  }
  
  isEmpty(){
    if (this.first == null){
      return true;
    } else {
      return false;
    }

  }
  peek(){
    return this.first;
  }
  getLast(){
    return this.last;
  }
  findMax(){
    if(this.first === null){
      throw new Error("Queue Empty!")
    }

    let max = this.first.data;
    let currentNum = this.first.next;
    while (currentNum !== null){
      if(currentNum.data > max){
        max = currentNum.data
      }
      currentNum = currentNum.next
    }
    return max;
  }
    
}

let numStack = new Stack();
for (let i = 0; i < nums.length; i++){
  numStack.push(nums[i])
}
let wordStack = new Stack();
for (let i = 0; i < words.length; i++){
  wordStack.push(words[i]);
}
wordStack.pop
wordStack.size();
numStack.size();
numStack.findMin();
numStack.sort();

const numQueue = new Queue();
for (let i = 0; i < nums.length; i++){
  numQueue.enqueue(nums[i]);
}
const wordQueue = new Queue();
for (let i = 0; i < words.length; i++){
  wordQueue.enqueue(words[i]);
}

numQueue.dequeue();
wordQueue.dequeue();
numQueue.isEmpty();
wordQueue.isEmpty();
numQueue.peek();
wordQueue.peek();
numQueue.getLast();
wordQueue.getLast();


module.exports = {
  Node,
  Queue,
  Stack,
};

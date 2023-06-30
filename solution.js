const { nums, words } = require("./data/data.js");
const { inspect } = require("util");


class Node{
  constructor(data){
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor(top = null){
    this.top = top
  }
  push(value){
    let newNode = new Node(value;
      newNode.next = this.top;
      this.top = newNode;
  }
  size(){

  }
  pop(){
    if(this.top === null){
      throw new Error("This stack is empty")
    }
    this.top = this.top.next
    return this.top
  }
  isEmpty(){
    return this.top === null
  }
  findMin(){

  }
  peek(){
    if(this.top === null){
      throw new Error("This stack is empty")
    }
    return this.top
  }
  sort(){

  }
}
class Queue {
  constructor(){
    this.first = first;
    this.last = last;
    this.size = 0;
    this.max = max;
  }
  count(){

  }
  dequeue(){
    if(!this.first){ // if queue is empty
      throw new Error("This queue is empty!")
    }
    const currentFirst = this.first 
    if(this.first === this.last){ /// is the node first and last
      this.last = null;
    }
    this.first = this.first.next; // if one node exists in queue, first will become null. If more nodes exist, first node will become first.next
    this.size--
    return currentFirst.data
  }
  enqueue(data){
    let newItem = new Node(data);
    if(!this.first){ // if the queue is empty
      this.first = newItem;
      this.last = newItem;
    } else {
      this.last.next = newItem; // updating the pointer of the current last
      this.last = newItem //reassinging the newItem to be our new last
    }
    return ++this.size
  }
  findMax(){

  }
  getLast(){

  }
  isEmpty(){
    return this.first === null
  }
  peek(){
    if (this.first == null) {
      throw new Error("The queue is empty");
    }
    return this.first;
  }
  }


module.exports = {
  Node,
  Queue,
  Stack,
};

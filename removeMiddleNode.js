class Node {
  constructor(data){
    this.data = data;
    this.next = null;
  }
}

function removeMiddleNode(node){
  let current = node.next, previous = node;
  //if it is the last node, set its value to null
  if(!current){
    node.data=null;
    return;
  }
  while(current.next){
    previous.data = current.data;
    previous = current;
    current = current.next;
  }
  previous.data = current.data;
  previous.next = null;
}

let a = new Node('a');
let b = new Node('b');
let c = new Node('c');
let d = new Node('d');

a.next = b;
b.next = c;
c.next = d;

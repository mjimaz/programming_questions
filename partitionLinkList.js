class Node {
  constructor(data){
    this.data = data;
    this.next = null;
  }
}

function partitionLinkList(linklist, value){
  let less = null, currentLess;
  let great = null, currentGreat;
  let current = linklist;


  while(current){
    if(current.data <= value){
      if(less){
        currentLess.next = current;
        currentLess = currentLess.next;
      } else {
        less = current;
        currentLess = current;
      }
    } else {
      if(great){
        currentGreat.next = current;
        currentGreat = currentGreat.next;
      } else {
        great = current;
        currentGreat = current;
      }
    }
    current = current.next;
  }

  if(!less){
    currentGreat.next = null;
    return great;
  } else if(!great){
    currentLess.next = null;
    return less;
  } else {
    currentLess.next = great;
    currentGreat.next = null;
    return less;
  }
}

let a = new Node(1);
let b = new Node(2);
let c = new Node(4);
let d = new Node(-1);
let e = new Node(3);

a.next = b;
b.next = c;
c.next = d;
d.next = e;

let newList = partitionLinkList(a, 3)

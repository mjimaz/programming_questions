//implement a function to check if a linked list is a palindrome
class Node {
  constructor(data){
    this.data = data;
    this.next = null;
  }
}

function isPalindrome(list){
  let start = list, mid = list;
  let count = 0;
  let values = [];
  while(start){
    count++;

    if(count%2 === 0){
      values.push(mid.data);
      mid = mid.next;
    }
    start = start.next;
  }
  if(count%2){
    mid = mid.next;
  }

  while(values.length){
    if(values.pop() !== mid.data){
      return false;
    }
    mid = mid.next;
  }
  return true;
}

let a = new Node('a');
let b = new Node('b');
let c = new Node('c');
let d = new Node('b');
let e = new Node('a');

a.next = b;
b.next = c;
c.next = d;
d.next = e;

let result  =  isPalindrome(a)? "palindrome" : "not palindrome";
console.log(result);

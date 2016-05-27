class Node {
  constructor(data){
    this.data = data;
    this.next = null;
  }
}

function add(num1, num2){
  let digit1, digit2, sum;
  let onesDigit = 0, tensDigit = 0;
  let result, current;

  digit1 = num1 ? num1.data:0;
  digit2 = num2 ? num2.data:0;
  sum = digit1 + digit2;
  onesDigit = sum%10;
  tensDigit = Math.floor(sum/10);

  let temp = new Node(onesDigit);

  result = temp;
  current = temp;

  num1 = num1.next;
  num2 = num2.next;

  while(num1 || num2){
    digit1 = num1 ? num1.data:0;
    digit2 = num2 ? num2.data:0;

    sum = digit1 + digit2 + tensDigit;
    onesDigit = sum%10;
    tensDigit = Math.floor(sum/10);

    temp = new Node(onesDigit);

    current.next = temp;
    current = temp;

    num1 = num1?num1.next:null;
    num2 = num2?num2.next:null;

  }
  if(tensDigit){
    temp = new Node(tensDigit);
    current.next = temp;
  }
  return result;
}


let a = new Node(7);
let b = new Node(1);
let c = new Node(6);
let d = new Node(4);
a.next = b;
b.next = c;
c.next = d;

let x = new Node(5);
let y = new Node(9);
let z = new Node(2);
x.next = y;
y.next = z;

let result = add(a, x);

console.log(result.data);
console.log(result.next.data);
console.log(result.next.next.data);
console.log(result.next.next.next.data);

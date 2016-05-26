function removeDuplicate(head){
  let current = head;
  let previous = current;
  let search = current.next;
  while(current && current.next) {
    if(current.data === search.data){
      previous.next = search.next;
    } else {
      previous = search;
    }
    search = previous.next;

    if(!search){
      current = current.next;
      previous = current;
      search = current ? current.next: null;
    }
  }
}

function node(data){
  this.data = data;
  this.next = null;
}

let a = new node(3);
let b = new node(4);
let c = new node(3);
let d = new node(5);

a.next = b;
b.next = c;
c.next = d;

removeDuplicate(a);
console.log(a);

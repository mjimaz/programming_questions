function node(value){
  this.value = value;
  this.left = null;
  this.right = null;
  this.count = 0;
}

class trackIntegers {
  constructor(node){
    this.root = node;
  }

  track(value){
    let current = this.root;
    while(current){
      if(current.value === value){
        return current.count;
      } else if(value < current.value){
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return -1;
  }

  add(node){
    let current = this.root;
    while(current){
      if(node.value <= current.value){
        current.count++;
        if(current.left === null){
          current.left = node;
          break;
        }
        current = current.left;
      }else{
        node.count = current.count+1;
        if(current.right === null){
          current.right = node;
          break;
        }
        current = current.right;
      }
    }
  }
}
let root_node = new node(5);
let tree = new trackIntegers(root_node);
tree.add(new node(1));
tree.add(new node(4));
tree.add(new node(4));
tree.add(new node(5));
tree.add(new node(9));
tree.add(new node(7));
tree.add(new node(13));
tree.add(new node(3));

console.log(tree.track(1)); //0
console.log(tree.track(3)); //1
console.log(tree.track(4)); //3
console.log(tree.track(13)); //7
console.log(tree.track(5)); //5
console.log(tree.track(50)); //-1

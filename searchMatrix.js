function searchMatrix(m, item, row = 0, col=m[0].length-1){
  while(row < m.length && col > -1){
    if(m[row][col] === item){
      return `(${row},${col})`;
    }else if(m[row][col] > item){
      col--;
    }else{
      row++;
    }
  }
  return -1;
}

let m = [
  [0, 3, 5, 10],
  [2, 8, 9, 30],
  [4, 11, 12, 32],
  [6, 13, 20, 40],
  [15, 16, 31, 42]
];
console.log(searchMatrix(m, 13)); //(3, 1)
console.log(searchMatrix(m, 10)); //(0, 3)
console.log(searchMatrix(m, 31)); //(4, 2)
console.log(searchMatrix(m, 30)); //(1, 3)
console.log(searchMatrix(m, 7)); // -1

// merge sort
function mergeSort(arr){
  if(arr.length < 2){
    return arr;
  }

  let mid = Math.floor(arr.length/2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(left, right){
  let result = []
  let i=0, j=0;
  while(i<left.length && j<right.length){
    if(left[i] < right[j]){
      result.push(left[i++]);
    }else {
      result.push(right[j++]);
    }
  }
  return result.concat(left.slice(i)).concat(right.slice(j));
}

console.log(mergeSort([5,2,7,9,0,1]));
console.log(mergeSort([5,2,70, 34,9,0,1]));

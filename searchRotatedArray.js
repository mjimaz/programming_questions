function searchRotatedArray(arr, item, left=0, right=arr.length-1){
  if(left > right){
    return -1
  }

  let mid = Math.floor((left+right)/2);

  if(item === arr[mid]){
    return mid;
  }else {
    if(item > arr[mid] && item <= arr[right]){
      return searchRotatedArray(arr, item, mid+1, right);
    } else{
      return searchRotatedArray(arr, item, left, mid-1);
    }
  }
}

console.log(searchRotatedArray([15, 16, 19, 20, 25, 1, 3, 4, 5, 7, 10, 14], 5)); //8
console.log(searchRotatedArray([15, 16, 19, 20, 25, 1, 3, 4, 5, 7, 10, 14], 14)); //11
console.log(searchRotatedArray([15, 16, 19, 20, 25, 1, 3, 4, 5, 7, 10, 14], 15)); //0
console.log(searchRotatedArray([15, 16, 19, 20, 25, 1, 3, 4, 5, 7, 10, 14], 19)); //2
console.log(searchRotatedArray([15, 16, 19, 20, 25, 1, 3, 4, 5, 7, 10, 14], 2)); //-1

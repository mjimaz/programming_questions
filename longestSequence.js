function longestSequence(arr){

  function longestSequenceHelper(current_sequence = [], index = 0, current_length=0, end_index=0, max_length = 0){
    let len = current_sequence.length;
    if(index > arr.length-1){
      return arr.slice(end_index-max_length+1, end_index+1);
    }
    if(current_sequence[len-1] <= arr[index]){
      current_sequence.push(arr[index]);
      current_length++;
      if(current_length > max_length){
        max_length = current_length;
        end_index = index;
      }
    } else {
      current_sequence = [arr[index]];
      current_length = 1;
    }
    return longestSequenceHelper(current_sequence, index+1, current_length, end_index, max_length)
  }

  return longestSequenceHelper([arr[0]], 1, 1, 0, 1);
}

console.log(longestSequence([13,14,10,11,12])); //[ 10, 11, 12 ]
console.log(longestSequence([1, 2, 3, 0, 5, 6, 7, 8, -1])); //[ 0, 5, 6, 7, 8 ]
console.log(longestSequence([13])); //[ 13 ]
console.log(longestSequence([13,12, 11])); //[ 13 ]


function longestSequencePairs(arr){
  arr.sort((a, b) => a[0]-b[0]);

  function longestSequencePairsHelper(current_sequence, index, current_length, end_index, max_length){
    if(index > arr.length-1){
      return arr.slice(end_index-max_length+1, end_index+1);
    }
    let len = current_sequence.length - 1;
    if(arr[index][1] >= current_sequence[len][1]){
      current_sequence.push(arr[index]);
      current_length++;
      if(current_length > max_length){
        max_length = current_length;
        end_index = index;
      }
    } else {
      current_sequence = [arr[index]];
      current_length=1;
    }
    return longestSequencePairsHelper(current_sequence, index+1, current_length, end_index, max_length);
  }
  return longestSequencePairsHelper([arr[0]], 1, 1, 0, 1)
}

let a = [[65, 100], [70, 150], [56, 90], [75, 190], [60, 95], [68, 110], [70, 150], [40, 200]]
console.log(longestSequencePairs(a)) // [ [ 56, 90 ],[ 60, 95 ],[ 65, 100 ],[ 68, 110 ],[ 70, 150 ],[ 70, 150 ],[ 75, 190 ] ]

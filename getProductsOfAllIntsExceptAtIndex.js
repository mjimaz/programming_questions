/*
  You have an array of integers, 
  and for each index you want to find 
  the product of every integer
  except the integer at that index.
*/

function getProductsOfAllIntsExceptAtIndex(arg) {
    // write the body of your function here   
    function multiplyArray(previous, current) {
      return previous * current;
    }

    function getProductsOfAllIntsExceptAtIndexHelper(array) {
      var result = [];

      for(var i = 0 ; i < array.length ; i++) {
        var temp = array.filter(function(value, index) {
          return index !== i;
        });

        var multResult = temp.reduce(multiplyArray, 1);
          result.push(multResult);
      } 
      return result;
    }
    
    return getProductsOfAllIntsExceptAtIndexHelper(arg);
}
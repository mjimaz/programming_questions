/*
I have an array where every number in the range 1...n1...n appears once except for one number which appears twice.
Write a function for finding the number that appears twice.
*/
function appearsTwice(array){
	var n = array.length-1;
	var sum = n*(n+1)/2;
	var total = array.reduce(function(a, b){return a+b;})

	return total-sum;

}

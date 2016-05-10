/*
You rank players in the game from highest to lowest score.
So far you're using an algorithm that sorts in O(n\lg{n})O(nlgn) time,
but players are complaining that their rankings aren't updated fast enough.
You need a faster sorting algorithm.

Write a function that takes:

an array of unsortedScores
the highestPossibleScore in the game
and returns a sorted array of scores in less than O(n\lg{n})O(nlgn) time.
*/

function topScoreSort(unsortedArray, largestScore){
	var numberCount = new Array(largestScore);
	for(var i=0; i<unsortedArray.length; i++){
		numberCount[unsortedArray[i]] = numberCount[unsortedArray[i]] ? numberCount[unsortedArray[i]]+1 : 1;
	}

	var sortedArray = [];
	for(i=0;i<numberCount.length;i++){
		for(var j=0;j<numberCount[i]; j++){
			sortedArray.push(i);
		}
	}
	return sortedArray;
}

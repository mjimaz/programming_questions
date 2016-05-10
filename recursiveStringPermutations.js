function recursiveStringPermutations(arg){
	var permutations = [];
	function recursiveStringPermutationsHelper(s, permutation){
		var len = s.length;
		if(len){
			for(var i=0; i<len; i++){
				var substring;
				if(i === 0){
					substring = s.substring(1);
				} else if(i === len-1){
					substring = s.substring(0, len-1);
				} else {
					substring = s.substring(0, i) + s.substring(i+1, len);
				}
				recursiveStringPermutationsHelper(substring, permutation+s[i])
			}
		} else{
			permutations.push(permutation);
		}
	}
	recursiveStringPermutationsHelper(arg, '');
	return permutations;
}

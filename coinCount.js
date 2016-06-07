function coinCount(n, currentIndex = 0, count=0){
  let coins = [25, 10, 5, 1];
  let currentCoin = coins[currentIndex];
  if(n === 0){
    return 1;
  }
  for(let i = 0; n-i*currentCoin >= 0 && currentIndex < coins.length; i++){
    count += coinCount(n-i*currentCoin, currentIndex+1);
  }
  return count;
}

console.log(coinCount(1)); //1
console.log(coinCount(2)); //1
console.log(coinCount(5)); //2
console.log(coinCount(10)); //4
console.log(coinCount(100)); //242

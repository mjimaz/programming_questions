// how many possible ways can a robot move in a grid from (0,0) to (X, Y)

function moveRobot(X, Y){
  if(X === 1 && Y === 1){
    return 1;
  } else if(X < 0 || Y < 0){
    return 0;
  }else {
    return moveRobot(X-1, Y) + moveRobot(X, Y-1);
  }
}

console.log(moveRobot(1, 1)); //1
console.log(moveRobot(2, 2)); //2
console.log(moveRobot(3, 3)); //6
console.log(moveRobot(4, 4)); //20

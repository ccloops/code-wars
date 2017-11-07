'use strict';


function cubeOdd(arr) {
  if(arr.some(isNaN)) {return undefined}
  let newArray = arr.map(x => (x*x*x)).filter(x => x % 2 !== 0)
  if(newArray.length === 0) return 0;
  return newArray.reduce((acc, curr) => acc + curr);
}

cubeOdd();

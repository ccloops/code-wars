'use strict';

function insertDash(num) {
  let newNum = num.toString().split('');
  let newNumDashes = [newNum[0]];

  for(var i = 0; i < newNum.length; i++) {
    if ((newNum[i] % 2 !== 0) && (newNum[i + 1] % 2 !== 0)) {
      newNumDashes.push( newNum[i], '-');

    } else {
      newNumDashes.push(newNum[i]);

    }
  }

  if (newNumDashes[newNumDashes.length - 1] === '-') newNumDashes.pop();
  newNumDashes.shift();
  return newNumDashes.join('');

}

insertDash();

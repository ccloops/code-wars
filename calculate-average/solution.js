'use strict';

function find_average(array) {
  return array.reduce(function(acc, curr) {
    return acc + curr;
  }) / array.length;
}

find_average();

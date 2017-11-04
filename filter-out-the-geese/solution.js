'use strict';

function gooseFilter (birds) {
  let geese = ['African', 'Roman Tufted', 'Toulouse', 'Pilgrim', 'Steinbacher'];
  return birds.filter(function(bird) {
    if (!geese.includes(bird)) {
      return bird;
    }
  })
}

gooseFilter();

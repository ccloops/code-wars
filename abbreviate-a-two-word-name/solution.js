'use strict';

function abbrevName(name){
  getLastInitial = name.split(' ');
  return name.charAt(0) + '.' + getLastInitial[1].charAt();
}

abbrevName('Sam Harris');

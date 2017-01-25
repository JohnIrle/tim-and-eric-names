import uniqueRandomArray from 'unique-random-array';
import timEricNames from './names.json';

var getRandomItem = uniqueRandomArray(timEricNames);

module.exports = {
  all: timEricNames,
  random: random
};

function random(number) {
  if (number === undefined) {
    return getRandomItem();
  } else {
    var randomItems = [];
    for (var i = 0; i < number; i++) {
      randomItems.push(getRandomItem());
    }
    return randomItems;
  }
}

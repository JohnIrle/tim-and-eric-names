import uniqueRandomArray from 'unique-random-array';
import timEricNames from './names.json';

const getRandomItem = uniqueRandomArray(timEricNames);

function random(number) {
  if (number === undefined) {
    return getRandomItem();
  }
  let randomItems = [];
  for (let i = 0; i < number; i++) {
    randomItems.push(getRandomItem());
  }
  return randomItems;
}

module.exports = {
  all: timEricNames,
  random: random
};

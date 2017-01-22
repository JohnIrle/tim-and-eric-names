var uniqueRandomArray = require('unique-random-array');
var timEricNames = require('./names.json');

module.exports = {
  all: timEricNames,
  random: uniqueRandomArray(timEricNames)
};

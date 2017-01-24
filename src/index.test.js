var expect = require('chai').expect;
var timEric = require('./index.js');

describe('tim-eric-names', function() {
  describe('all', function(){
    it('should be an array of strings', function(){
      expect(timEric.all).to.satisfy(isArrayOfStrings);

      function isArrayOfStrings(array) {
        return array.every(function(item){
          return typeof item === 'string';
        });
      }
    });
    it('should contain "Dilly"', function(){
      expect(timEric.all).to.include('Dilly');
    });
  });

  describe('random', function(){
    it('should return a random item from the timEric.all', function(){
      var randomItem = timEric.random();
      expect(timEric.all).to.include(randomItem);
    });
  });
});

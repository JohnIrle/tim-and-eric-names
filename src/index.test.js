import {expect} from 'chai';
import timEric from './index.js';

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

    it('should return an array of random items if passed a number', function() {
      var randomItems = timEric.random(3);
      expect(randomItems).to.have.length(3);
      randomItems.forEach(function(item) {
        expect(timEric.all).to.include(item);
      });
    });
  });
});

import timEric from './index.js';

describe('tim-eric-names', () => {
  describe('all', () => {
    it('should be an array of strings', () => {
      const all = timEric.all;

      expect(isArrayOfStrings(all)).toBe(true);

    });
    it('should contain "Dilly"', function(){
      expect(timEric.all).toContain('Dilly');
    });
  });

  describe('random', () => {
    it('should return a random item from the timEric.all', () => {
      const randomItem = timEric.random();

      expect(timEric.all).toContain(randomItem);
    });

    it('should return an array of random items if passed a number', () => {
      const randomItems = timEric.random(3);

      expect(randomItems).toHaveLength(3);
      randomItems.forEach((item) => {
        expect(timEric.all).toContain(item);
      });
    });
  });
});

const isArrayOfStrings = (array) => {
  return array.every((item) => {
    return typeof item === 'string';
  });
}

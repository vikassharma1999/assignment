const { sayHello, addTwo, arr, sum } = require('../app');
const assert = require('chai').assert;
describe('App', () => {
  describe('sayHello', () => {
    it('sayHello should return hello', () => {
      assert.equal(sayHello(), 'hello');
    });
    it('sayHello should return a string', () => {
      assert.typeOf(sayHello(), 'string');
    });
  });
  describe('Add Two number', () => {
    it('function should return a integer', () => {
      let result = addTwo(1, 6);
      assert.typeOf(result, 'number');
    });
    it('result must be above 5', () => {
      let result = addTwo(2, 30);
      assert.isAbove(result, 5);
    });
  });
  describe('Testing on array', () => {
    it('The varaible should be an Array', () => {
      assert.isArray(arr);
    });
    it('Array should contain 5', () => {
      assert.include(arr, 5);
    });
    it('The length of the array must be 5', () => {
      assert.lengthOf(arr, 5);
    });
  });
});

const {sum, fetchData} = require('./sum');

test('adds 1 + 2 tuuo equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
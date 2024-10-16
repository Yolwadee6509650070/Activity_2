const { add, subtract, multiply } = require('../math');

test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3);
});

test('subtracts 5 - 3 to equal 2', () => {
  expect(subtract(5, 3)).toBe(2);
});

test('multiplies 4 * 2 to equal 8', () => {
  expect(multiply(4, 2)).toBe(8);
});

// Add a few more tests
test('adds -1 + 1 to equal 0', () => {
  expect(add(-1, 1)).toBe(0);
});

test('subtracts 0 - 3 to equal -3', () => {
  expect(subtract(0, 3)).toBe(-3);
});

test('multiplies -2 * -2 to equal 4', () => {
  expect(multiply(-2, -2)).toBe(4);
});

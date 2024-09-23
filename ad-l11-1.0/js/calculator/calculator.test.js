const calculator = require('./calculator');

test('adds 1 + 2 to equal 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('adds -4 + 8 to equal 4', () => {
  expect(calculator.add(-4, 8)).toBe(4);
});

test('subtract 5 - 4 to equal 1', () => {
  expect(calculator.subtract(5, 4)).toBe(1);
});

test('subtract -5 - -10 to equal 5', () => {
  expect(calculator.subtract(-5, -10)).toBe(5);
});

test('26 dividido 13 es igual a 2', () => {
  expect(calculator.divide(26, 13)).toBe(2);
});

test('40 dividido 10 es igual a 4', () => {
  expect(calculator.divide(40, 10)).toBe(4);
});

test('26 multiplicado por 13 debe ser igual a 338', () => {
  expect(calculator.multiply(26, 13)).toBe(338);
});

test('40 multiplicado por 10 es igual a 400', () => {
  expect(calculator.multiply(40, 10)).toBe(400);
});


test('2 dividido cero no existe (undefined)', () => {
    expect(calculator.divide(2, 0)).toBe();
  });
  


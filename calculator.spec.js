const {add, multiply, divide, subtract, operate} = require('./calculator');

describe('add', () => {
    test('add two numbers', () => {
        expect(add(1, 2)).toBe(3);
    });
    test('add two negative numbers', () => {
        expect(add(-1, -2)).toBe(-3);
    });
});

describe('subtract', () => {
    test('subtract two numbers', () => {
        expect(subtract(1, 2)).toBe(-1);
    });
    test('subtract two negative numbers', () => {
        expect(subtract(-1, -2)).toBe(1);
    });
});

describe('multiply', () => {
    test('multiply two numbers', () => {
        expect(multiply(1, 2)).toBe(2);
    });
    test('multiply two negative numbers', () => {
        expect(multiply(-1, -2)).toBe(2);
    });
});

describe('divide', () => {
    test('divide two numbers', () => {
        expect(divide(1, 2)).toBe(0.5);
    });
    test('divide two negative numbers', () => {
        expect(divide(-1, -2)).toBe(0.5);
    });
});

describe('operate', () => {
    test('operate with add', () => {
        expect(operate('+', 1, 2)).toBe(3);
    });
    test('operate with subtract', () => {
        expect(operate('-', 1, 2)).toBe(-1);
    });
    test('operate with multiply', () => {
        expect(operate('*', 1, 2)).toBe(2);
    });
    test('operate with divide', () => {
        expect(operate('/', 1, 2)).toBe(0.5);
    });
});
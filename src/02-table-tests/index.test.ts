import { simpleCalculator, Action } from './index';

describe('simpleCalculator tests', () => {
  const testData = [
    { a: 10, b: 7, action: Action.Add, expected: 17 },
    { a: 15, b: 5, action: Action.Subtract, expected: 10 },
    { a: 6, b: 4, action: Action.Multiply, expected: 24 },
    { a: 20, b: 4, action: Action.Divide, expected: 5 },
    { a: 3, b: 4, action: Action.Exponentiate, expected: 81 },
    { a: 5, b: 3, action: 'InvalidAction', expected: null },
    { a: 'invalid', b: 3, action: Action.Add, expected: null },
    { a: 5, b: 'invalid', action: Action.Add, expected: null },
  ];

  testData.forEach(({ a, b, action, expected }) => {
    test(`should ${action} ${a} and ${b} to equal ${expected}`, () => {
      const result = simpleCalculator({ a, b, action });
      expect(result).toBe(expected);
    });
  });
});

import { simpleCalculator, Action } from './index';

describe('simpleCalculator tests', () => {
  test('should add two numbers', () => {
    const result = simpleCalculator({ a: 10, b: 7, action: Action.Add });
    expect(result).toEqual(17);
  });

  test('should subtract two numbers', () => {
    const result = simpleCalculator({ a: 15, b: 5, action: Action.Subtract });
    expect(result).toEqual(10);
  });

  test('should multiply two numbers', () => {
    const result = simpleCalculator({ a: 6, b: 4, action: Action.Multiply });
    expect(result).toEqual(24);
  });

  test('should divide two numbers', () => {
    const result = simpleCalculator({ a: 20, b: 4, action: Action.Divide });
    expect(result).toEqual(5);
  });

  test('should exponentiate two numbers', () => {
    const result = simpleCalculator({
      a: 3,
      b: 4,
      action: Action.Exponentiate,
    });
    expect(result).toEqual(81);
  });

  test('should return null for invalid action', () => {
    const result = simpleCalculator({ a: 5, b: 3, action: 'InvalidAction' });
    expect(result).toBeNull();
  });

  test('should return null for invalid arguments', () => {
    const result1 = simpleCalculator({
      a: 'invalid',
      b: 3,
      action: Action.Add,
    });
    const result2 = simpleCalculator({
      a: 5,
      b: 'invalid',
      action: Action.Add,
    });
    expect(result1).toBeNull();
    expect(result2).toBeNull();
  });
});

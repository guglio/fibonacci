import { describe, it, expect } from 'vitest';
import { fibonacciValue } from '../utils/fibonacciMath';

describe('fibonacciValue', () => {
  it('should return 0 for input 0', () => {
    expect(fibonacciValue(0)).toBe(0);
  });

  it('should return 1 for input 1', () => {
    expect(fibonacciValue(1)).toBe(1);
  });

  it('should return 1 for input 2', () => {
    expect(fibonacciValue(2)).toBe(1);
  });

  it('should return 2 for input 3', () => {
    expect(fibonacciValue(3)).toBe(2);
  });

  it('should return 3 for input 4', () => {
    expect(fibonacciValue(4)).toBe(3);
  });

  it('should return 5 for input 5', () => {
    expect(fibonacciValue(5)).toBe(5);
  });

  it('should return 8 for input 6', () => {
    expect(fibonacciValue(6)).toBe(8);
  });

  it('should return 13 for input 7', () => {
    expect(fibonacciValue(7)).toBe(13);
  });

  it('should return 21 for input 8', () => {
    expect(fibonacciValue(8)).toBe(21);
  });

  it('should return 34 for input 9', () => {
    expect(fibonacciValue(9)).toBe(34);
  });

  it('should return 55 for input 10', () => {
    expect(fibonacciValue(10)).toBe(55);
  });
});
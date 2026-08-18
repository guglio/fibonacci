import { describe, it, expect } from 'vitest';
import { fibonacciValue } from '../utils/fibonacciMath';

describe('fibonacciValue', () => {
  it('should return 0 for input 0', () => {
    expect(fibonacciValue(0).toString()).toBe('0');
  });

  it('should return 1 for input 1', () => {
    expect(fibonacciValue(1).toString()).toBe('1');
  });

  it('should return 1 for input 2', () => {
    expect(fibonacciValue(2).toString()).toBe('1');
  });

  it('should return 2 for input 3', () => {
    expect(fibonacciValue(3).toString()).toBe('2');
  });

  it('should return 3 for input 4', () => {
    expect(fibonacciValue(4).toString()).toBe('3');
  });

  it('should return 5 for input 5', () => {
    expect(fibonacciValue(5).toString()).toBe('5');
  });

  it('should return 8 for input 6', () => {
    expect(fibonacciValue(6).toString()).toBe('8');
  });

  it('should return 13 for input 7', () => {
    expect(fibonacciValue(7).toString()).toBe('13');
  });

  it('should return 21 for input 8', () => {
    expect(fibonacciValue(8).toString()).toBe('21');
  });

  it('should return 34 for input 9', () => {
    expect(fibonacciValue(9).toString()).toBe('34');
  });

  it('should return 55 for input 10', () => {
    expect(fibonacciValue(10).toString()).toBe('55');
  });
  it('should return 4.008056950722404709705149932140657521922894407720633922341161718e+2579 for input 12345', () => {
    expect(fibonacciValue(12345).toString()).toBe(
      '4.008056950722404709705149932140657521922894407720633922341161718e+2579',
    );
  });
});

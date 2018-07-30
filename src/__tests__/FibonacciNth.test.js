import { shallow, mount } from 'enzyme';

import FibonacciNth from '../containers/FibonacciNth';

describe('FibonacciNth', () => {
  it('should be defined', () => {
   expect(FibonacciNth).toBeDefined();
  });
  it('FibonacciNth() = 1', () => {
    expect(`${FibonacciNth()}`).toBe('1');
  });
  it('num > 2; FibonacciNth(num) = integer', () => {
    let testArr = [0,1,1,2,3,5,8,13,21,34,55];

    for ( let i=2; i<10; i++ )
      expect(`${FibonacciNth(i)}`).toBe(`${testArr[i]}`);
  });
  it('reverse test the formula', () => {
    let testArr = [];
    let n = 10;
    for ( let i = 0; i <= n; i++)
      testArr.push(parseInt(`${FibonacciNth(i)}`,10));
    for ( let i = testArr.length - 1; i > 1; i-- ){
      expect(testArr[i] - testArr[i-1]).toBe(testArr[i-2]);
    }
  });
});

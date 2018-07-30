import { shallow, mount } from 'enzyme';

import FibonacciNth from '../containers/FibonacciNth';

describe('FibonacciNth', () => {
  it('should be defined', () => {
   expect(FibonacciNth).toBeDefined();
  });
  it('FibonacciNth() = 1', () => {
    expect(`${FibonacciNth()}`).toBe('1');
  });
  it('num < 2; FibonacciNth(num) = not valid', () => {
    for(let i=-10;i<2;i++)
      expect(`${FibonacciNth(i)}`).toBe('Enter a number >= 2');
  });
  it('num = string; FibonacciNth(num) = not valid', () => {
    expect(`${FibonacciNth('abc')}`).toBe('Not an integer');
  });
  it('num > 2; FibonacciNth(num) = integer', () => {
    let testArr = [0,1,1,2,3,5,8,13,21,34,55];

    for(let i=2;i<10;i++)
      expect(`${FibonacciNth(i)}`).toBe(`${testArr[i]}`);
  });
});

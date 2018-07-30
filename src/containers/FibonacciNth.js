import * as math from 'mathjs'; // handle the BigNumber

math.config({
  number: 'BigNumber', // Set type of number to be 'BigNumber'
  precision: 20 // Number of significant digits for BigNumbers
})

const FibonacciNth = ( num = 2 ) => {
  // calculate the nth on the Fibonacci sequence with iterable object
  let [curr, prev] = [1, 0];
  while (num-- > 0) {
    // I used math.js library to handle bignumbers (if n > 1477, the result was Infinity)
    // the following formula is equal to:
    // [curr, prev] = [curr + prev, curr];
    [curr, prev] = [math.add(math.bignumber(curr), math.bignumber(prev)), math.bignumber(curr)];
  }
  return prev;
};

export default FibonacciNth;

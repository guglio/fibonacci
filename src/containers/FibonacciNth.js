import * as math from 'mathjs';

math.config({
  number: 'BigNumber', // Set type of number to be 'BigNumber'
  precision: 20 // Number of significant digits for BigNumbers
})

const FibonacciNth = ( n = 2 ) => {
  var num = parseInt(n,10);

  if(num < 2){
    return "Enter a number >= 2";
  }
  if(!Number.isInteger(num)){
    return "Not an integer";
  }
  let [curr, next] = [1, 0];
  while (num-- > 0) {
    [curr, next] = [math.add(math.bignumber(curr), math.bignumber(next)), math.bignumber(curr)];
  }
  return next;
};

export default FibonacciNth;

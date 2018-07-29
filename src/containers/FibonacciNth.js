const FibonacciNth = ( num = 2 ) => {
  if(num < 2){
    return "Enter a number >= 2";
  }

  let [curr, next] = [1, 0];
  while (num-- > 0) {
    [curr, next] = [curr + next, curr];
  }
  return next;
};


export default FibonacciNth;

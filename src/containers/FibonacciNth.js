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
    [curr, next] = [curr + next, curr];
  }
  return next;
};

export default FibonacciNth;

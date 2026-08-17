import { create, all } from "mathjs";
import type { BigNumber } from "mathjs";
const mathjs = create(all);
mathjs.config({ number: "BigNumber" });

export const useFibonacciNth = (num = 2) => {
  // calculate the nth on the Fibonacci sequence with iterable object
  let curr: BigNumber = mathjs.bignumber(1);
  let prev: BigNumber = mathjs.bignumber(0);
  while (num-- > 0) {
    // I used math.js library to handle bignumbers (if n > 1477, the result was Infinity)
    // the following formula is equal to:
    // [curr, prev] = [curr + prev, curr];
    [curr, prev] = [
      mathjs.add(mathjs.bignumber(curr), mathjs.bignumber(prev)),
      mathjs.bignumber(curr),
    ];
  }
  return { fibonacci: prev };
};

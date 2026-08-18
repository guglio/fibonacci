import { create, all, type BigNumber } from 'mathjs';
const mathjs = create(all);
mathjs.config({ number: 'BigNumber' });

export const fibonacciValue = (num = 2) => {
  let [curr, prev]: [BigNumber, BigNumber] = [
    mathjs.bignumber(1),
    mathjs.bignumber(0),
  ];
  while (num-- > 0) {
    [curr, prev] = [
      mathjs.add(mathjs.bignumber(curr), mathjs.bignumber(prev)),
      mathjs.bignumber(curr),
    ];
  }
  return prev;
};

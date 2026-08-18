import React, { useCallback, useState } from 'react';

import { fibonacciValue } from '../utils/fibonacciMath';

const Fibonacci = () => {
  const [fibonacciN, setFibonacciN] = useState<number | undefined>(undefined);
  const [message, setMessage] = useState('');
  const calculateDisable = useCallback(() => {
    if (fibonacciN === undefined) return true;
    return +fibonacciN < 2;
  }, [fibonacciN]);

  const calculateFibonacci = useCallback(() => {
    if (fibonacciN === undefined) return;
    setMessage(`F(${fibonacciN}) = ${fibonacciValue(fibonacciN)}`);
  }, [fibonacciN]);

  const resetForm = () => {
    setFibonacciN(undefined);
    setMessage('');
  };

  return (
    <div className='pt-4'>
      <div className='flex flex-col gap-2'>
        <input
          className='border-solid rounded-md border-black border h-12 p-3 text-lg w-64'
          value={fibonacciN ?? ''}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            const value = e.target.value;
            if (value === '') {
              setFibonacciN(undefined);
            } else {
              const num = Number(value);
              if (!isNaN(num)) {
                setFibonacciN(num);
              }
            }
          }}
          autoComplete='off'
          placeholder={'2'}
        />
        <div className='btn-group flex gap-6 mt-4 text-white'>
          <button
            className='btn btn-reset p-3 text-lg bg-emerald-700 rounded-md'
            disabled={calculateDisable()}
            onClick={() => calculateFibonacci()}
          >
            Calculate
          </button>
          <button
            className='btn btn-reset p-3 text-lg bg-blue-400 rounded-md'
            onClick={() => resetForm()}
          >
            Reset
          </button>
        </div>
      </div>
      <div>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Fibonacci;

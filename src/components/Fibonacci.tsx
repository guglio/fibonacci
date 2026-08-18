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
    <div className='fibonacci'>
      <div id='formFibonacci' className='space-y-4'>
        <input
          id='fibonacciNum'
          className='input input-number h-10'
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
              // if NaN, do nothing (keep previous state)
            }
          }}
          autoComplete='off'
          placeholder={'2'}
        />
        <div className='btn-group mt-4'>
          <button
            type='submit'
            id='submit'
            className='btn btn-submit'
            disabled={calculateDisable()}
            onClick={() => calculateFibonacci()}
          >
            Calculate
          </button>
          <button
            type='reset'
            id='reset'
            className='btn btn-reset'
            onClick={() => resetForm()}
          >
            Reset
          </button>
        </div>
      </div>
      <div id='FibonacciNth' className='result'>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Fibonacci;

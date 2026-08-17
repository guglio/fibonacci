import React, { useCallback, useState } from 'react';

// function to calculate the Fibonacci sequence
import { useFibonacciNth } from '../utils/useFibonacciNth';

const Fibonacci = () => {
  const [fibonacciN, setFibonacciN] = useState<number | undefined>(undefined);
  const [message, setMessage] = useState('');
  const { fibonacci } = useFibonacciNth(fibonacciN);

  const calculateDisable = useCallback(() => {
    if (fibonacciN === undefined) return true;
    return +fibonacciN < 2;
  }, [fibonacciN]);

  const calculateFibonacci = () => {
    if (fibonacciN === undefined) return;
    setMessage(`F(${fibonacciN}) = ${fibonacci}`);
  };

  // reset the form to the original state
  const resetForm = () => {
    setFibonacciN(undefined);
    setMessage('');
  };

  return (
    <div className='fibonacci'>
      <div id='formFibonacci'>
        <input
          id='fibonacciNum'
          className='input input-number'
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
        <div className='btn-group'>
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

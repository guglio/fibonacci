import React, { useCallback, useState } from 'react';

import { fibonacciValue } from '../utils/fibonacciMath';

const Fibonacci = () => {
  const [fibonacciN, setFibonacciN] = useState<number | undefined>(undefined);
  const [result, setResult] = useState<string>('');
  const calculateDisable = useCallback(() => {
    if (fibonacciN === undefined) return true;
    return +fibonacciN < 2;
  }, [fibonacciN]);

  const calculateFibonacci = useCallback(() => {
    if (fibonacciN === undefined) return;
    setResult(`${fibonacciValue(fibonacciN)}`);
  }, [fibonacciN]);

  const resetForm = () => {
    setFibonacciN(undefined);
    setResult('');
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
            setResult('');
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
      <div className='mt-2'>
        <p className='formula-text'>
          F({fibonacciN ?? 'x'}) = {result !== '' ? result : 'y'}
        </p>
      </div>
    </div>
  );
};

export default Fibonacci;
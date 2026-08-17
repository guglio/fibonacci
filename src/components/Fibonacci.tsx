import React, { useCallback, useState } from 'react';

// function to calculate the Fibonacci sequence
import { useFibonacciNth } from '../utils/useFibonacciNth';

const Fibonacci = () => {
  const [fibonacciN, setFibonacciN] = useState(2);
  const [message, setMessage] = useState('');
  const { fibonacci } = useFibonacciNth(fibonacciN);

  const calculateDisable = useCallback(() => {
    return fibonacciN < 2;
  }, [fibonacciN]);

  // function called after the input is validated
  // that calculate the Fibonacci nth number
  const calculareFibonacci = () => {
    // shorter variable name and more readable
    let num = fibonacciN;
    // calculate the Fibonacci nth number
    let result = fibonacci;
    // set the result's message for the user
    let message = `F(${num}) = ${result}`;
    // save the calculation into a state to display to the user
    setMessage(message);
  };

  // reset the form to the original state
  const resetForm = () => {
    setFibonacciN(2);
    setMessage('');
  };

  return (
    <div className='fibonacci'>
      <div id='formFibonacci'>
        <input
          // type="number"
          id='fibonacciNum'
          className='input input-number'
          value={fibonacciN}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setFibonacciN(+e.target.value)
          }
          autoComplete='off'
        />
        <div className='btn-group'>
          <button
            type='submit'
            id='submit'
            className='btn btn-submit'
            disabled={calculateDisable()}
            onClick={() => calculareFibonacci()}
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

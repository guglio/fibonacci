import React, { useState } from "react";

// function to calculate the Fibonacci sequence
import FibonacciNth from "../../containers/FibonacciNth";
// errors output
import { error } from "../../errors";

import "./Fibonacci.css";

const Fibonacci = () => {
  const [fibonacciN, setFibonacciN] = useState(2);
  const [message, setMessage] = useState("");

  // validate field in the form
  // if the input is not a valid one, return an error message
  const validateForm = (e) => {
    // avoid the default form submit event
    e.preventDefault();
    // shorter variable name and more readable
    let num = this.state.fibonacciN;
    // if the numer is less than 2, return false
    let numInRange = num >= 2;
    // create a custom error message
    let errorMessage = numInRange ? false : error.NUM_NOT_IN_RANGE;

    // if the errorMessage exists, don't calculate
    // but show the error message as result
    errorMessage ? setMessage(`Error: ${errorMessage}`) : calculareFibonacci();
  };

  // function called after the input is validated
  // that calculate the Fibonacci nth number
  const calculareFibonacci = () => {
    // shorter variable name and more readable
    let num = fibonacciN;
    // calculate the Fibonacci nth number
    let result = FibonacciNth(num);
    // set the result's message for the user
    let message = `F(${num}) = ${result}`;
    // save the calculation into a state to display to the user
    setMessage(message);
  };

  // reset the form to the original state
  const resetForm = () => {
    setFibonacciN(2);
    setMessage("");
  };

  return (
    <div className="fibonacci">
      <form onSubmit={(e) => validateForm(e)} id="formFibonacci">
        <input
          type="number"
          id="fibonacciNum"
          className="input input-number"
          value={fibonacciN}
          onChange={(e) => setFibonacciN(e.target.value)}
          autoComplete="off"
        />
        <div className="btn-group">
          <button type="submit" id="submit" className="btn btn-submit">
            Calculate
          </button>
          <button
            type="reset"
            id="reset"
            className="btn btn-reset"
            onClick={() => resetForm()}
          >
            Reset
          </button>
        </div>
      </form>
      <div id="FibonacciNth" className="result">
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Fibonacci;

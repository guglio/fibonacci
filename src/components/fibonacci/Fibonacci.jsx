import React, { useState } from "react";
import FibonacciNth from "../../containers/FibonacciNth";
import { error } from "../../errors";

const Fibonacci = () => {
  const [fibonacciN, setFibonacciN] = useState(2);
  const [message, setMessage] = useState("");

  // validate field in the form
  // if the input is not a valid one, return an error message
  const validateForm = (e) => {
    // avoid the default form submit event
    e.preventDefault();
    // shorter variable name and more readable
    let num = fibonacciN; // Fixed: use the state variable, not this.state
    // if the numer is less than 2, return false
    let numInRange = num >= 2;
    // create a custom error message
    let errorMessage = numInRange ? false : error.NUM_IN_RANGE;

    // if the errorMessage exists, don't calculate
    // but show the error message as result
    errorMessage ? setMessage(`Error: ${errorMessage}`) : calculateFibonacci();
  };

  // function called after the input is validated
  // that calculate the Fibonacci nth number
  const calculateFibonacci = () => {
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
    <div className="fibonacci p-6">
      <form onSubmit={(e) => validateForm(e)} id="formFibonacci" className="mb-4">
        <input
          type="number"
          id="fibonacciNum"
          className="input w-[280px] px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={fibonacciN}
          onChange={(e) => setFibonacciN(e.target.value)}
          autoComplete="off"
          placeholder="Enter a number (>=2)"
        />
        <div className="btn-group mt-4 flex space-x-3">
          <button
            type="submit"
            id="submit"
            className="btn btn-submit px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Calculate
          </button>
          <button
            type="reset"
            id="reset"
            className="btn btn-reset px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700"
            onClick={() => resetForm()}
          >
            Reset
          </button>
        </div>
      </form>
      <div id="FibonacciNth" className="result p-4 bg-gray-50 rounded-md">
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Fibonacci;

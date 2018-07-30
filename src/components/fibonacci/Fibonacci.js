import React, { Component } from 'react';

// function to calculate the Fibonacci sequence
import FibonacciNth from '../../containers/FibonacciNth';
// errors output
import { error } from '../../errors';

import './Fibonacci.css';

class Fibonacci extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fibonacciN : 2, // integer entered from the user
      message : '', // output message for the user
    }
  }

  // handle the state change
  handleChange(state){
    this.setState(state);
  }

  // validate field in the form
  // if the input is not a valid one, return an error message
  validateForm(e){
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
    errorMessage ?
      this.handleChange({message : `Error: ${errorMessage}`})
      : this.calculareFibonacci(num);
  }

  // function called after the input is validated
  // that calculate the Fibonacci nth number
  calculareFibonacci(){
    // shorter variable name and more readable
    let num = this.state.fibonacciN;
    // calculate the Fibonacci nth number
    let result = FibonacciNth(num);
    // set the result's message for the user
    let message = `F(${num}) = ${result}`;
    // save the calculation into a state to display to the user
    this.handleChange({message});
  }

  // reset the form to the original state
  resetForm(){
    this.handleChange({fibonacciN : 2, message: ''});
  }

  render() {
    const { fibonacciN, message} = this.state;

    return (
      <div className="fibonacci">
        <form
          onSubmit={(e) => this.validateForm(e)}
          id="formFibonacci"
        >
          <input
            type='number'
            id='fibonacciNum'
            className='input input-number'
            value={fibonacciN}
            onChange={(e) => this.handleChange({fibonacciN : e.target.value})}
            autoComplete='off'
          />
          <div className="btn-group">
            <button
              type='submit'
              id='submit'
              className="btn btn-submit"
            >
              Calculate
            </button>
            <button
              type='reset'
              id='reset'
              className="btn btn-reset"
              onClick={() => this.resetForm()}
            >
              Reset
            </button>
          </div>
        </form>
        <div id='FibonacciNth' className='result'>
          <p>{message}</p>
        </div>
      </div>
    )
  }
};

export default Fibonacci;

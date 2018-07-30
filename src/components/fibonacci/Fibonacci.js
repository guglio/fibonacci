import React, { Component } from 'react';

import FibonacciNth from '../../containers/FibonacciNth';

import './Fibonacci.css';

class Fibonacci extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fibonacciN : 2, // interger intered from the user
      result : 0, // nth number on the Fibonacci sequence
    }
  }

  // handle the state change
  handleChange(state){
    this.setState(state);
  }

  // function called on submit, that calculate the Fibonacci nth number
  calculareFibonacci(e){
    e.preventDefault(); // avoid the default form submit event
    let result = (FibonacciNth(this.state.fibonacciN)); // calculation
    this.handleChange({result}); // save the calculation into a state
  }

  // reset the form to the original state
  resetForm(){
    this.handleChange({fibonacciN : 2,result : 0});
  }

  render() {
    const { fibonacciN, result} = this.state;
    return (
      <div className="fibonacci">
        <form
          onSubmit={(e) => this.calculareFibonacci(e)}
          id="formFibonacci"
        >
          <input
            type='number'
            value={fibonacciN}
            onChange={(e) => this.handleChange({fibonacciN : e.target.value})} id='fibonacciNum'
            className='input input-number'
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
          <p>{result !== 0 && `The ${fibonacciN} nth of the Fibonacci sequence is ${result}`}</p>
        </div>
      </div>
    )
  }
};

export default Fibonacci;

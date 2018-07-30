import React, { Component } from 'react';

import FibonacciNth from '../../containers/FibonacciNth';

import './Fibonacci.css';

class Fibonacci extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fibonacciN : 2,
      result : 0,
    }
  }

  handleChange(state){
    this.setState(state);
  }

  calculareFibonacci(e){
    e.preventDefault();
    let result = (FibonacciNth(this.state.fibonacciN));
    this.handleChange({result});
  }

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
        </form>
        <div id='FibonacciNth' className='result'>
          {result !== 0 && `The ${fibonacciN} nth of the Fibonacci sequence is ${result}`}
        </div>
      </div>
    )
  }
};

export default Fibonacci;

import React, { Component } from 'react';

import FibonacciNth from '../containers/FibonacciNth';

class Fibonacci extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fibonacciN : 0,
      result : 0,
    }
  }

  handleChange(state){
    this.setState(state);
  }

  calculareFibonacci(e){
    e.preventDefault();
    let result = FibonacciNth(this.state.fibonacciN);
    this.handleChange({result});
  }

  render() {
    const { fibonacciN, result} = this.state;
    return (
      <div>
        <form onSubmit={(e) => this.calculareFibonacci(e)} id="formFibonacci">
          <input type='number' value={fibonacciN} onChange={(e) => this.handleChange({fibonacciN : e.target.value})} id='fibonacciNum'/>
          <button type='submit' id='submit'>Calculate</button>
        </form>
        <div id='FibonacciNth'>{result}</div>
      </div>
    )
  }
};

export default Fibonacci;

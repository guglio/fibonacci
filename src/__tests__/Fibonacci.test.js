import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';

import Fibonacci from '../components/Fibonacci';

describe('Fibonacci component', () => {
  const wrapper = shallow(<Fibonacci />);
  describe('Form (#formFibonacci)', () => {
    it('is present', () => {
      expect(wrapper.find('#formFibonacci').exists()).toBe(true)
    });
    describe('Fibonacci input field (#fibonacciNum)', () => {
      it('is present', () => {
        expect(wrapper.find('#fibonacciNum').exists()).toBe(true)
      });
      it('should accept only numbers', () => {
        expect(wrapper.find('#fibonacciNum[type="number"]').exists()).toBe(true);
      });
      it('should respond to change event and change the state of the value', () => {
        wrapper.find('#fibonacciNum').simulate('change', {target: {value: 10}});
        expect(wrapper.state('fibonacciN')).toEqual(10);
      });
    });
    describe('Submit button', () => {
      it('is present', () => {
        expect(wrapper.find('#submit').exists()).toBe(true)
      });
    });
  });
});

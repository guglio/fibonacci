import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';

import Fibonacci from '../components/fibonacci/Fibonacci';

describe('<Fibonacci />', () => {
  it('should be defined', () => {
   expect(Fibonacci).toBeDefined();
  });
  const wrapper = shallow(<Fibonacci />);
  describe('Form', () => {
    let form = wrapper.find('form');
    let inputNumber = wrapper.find('input[type="number"]');
    let submitButton = wrapper.find('button[type="submit"]');
    it('is present', () => {
      expect(form.exists()).toBe(true)
    });
    describe('input field', () => {
      it('is present and type=number', () => {
        expect(inputNumber.exists()).toBe(true);
      });
      it('should respond to change event and change the state of the value', () => {
        inputNumber.simulate('change', {target: {value: 10}});
        expect(wrapper.state('fibonacciN')).toEqual(10);
      });
    });
    describe('Submit button', () => {
      it('is present', () => {
        expect(submitButton.exists()).toBe(true)
      });
      it('should submit the form and get a result', () => {
        inputNumber.simulate('change', {target: {value: 10}});
        form.simulate('submit', { preventDefault () {} });
        expect(`${wrapper.state('result')}`).toEqual("55");
      });
    });
  });
});

import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';

import Header from '../components/header/Header';

describe('<Header />', () => {
  it('should be defined', () => {
   expect(Header).toBeDefined();
  });
  const wrapper = shallow(<Header />);
  it('contains <header>', () => {
    expect(wrapper.find('header').exists()).toBe(true)
  });
  it('contains <h1>', () => {
    expect(wrapper.find('h1').exists()).toBe(true)
  });
  it('title is \'Fibonacci Calculator\'', () => {
    expect(wrapper.find('h1').text()).toBe('Fibonacci Calculator')
  });
});

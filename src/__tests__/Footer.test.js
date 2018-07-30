import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';

import Footer from '../components/footer/Footer';

describe('<Footer />', () => {
  it('should be defined', () => {
   expect(Footer).toBeDefined();
  });
  const wrapper = shallow(<Footer />);
  it('contains <footer>', () => {
    expect(wrapper.find('footer').exists()).toBe(true)
  });
});

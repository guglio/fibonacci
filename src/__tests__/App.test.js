import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import App from '../components/App';

import Header from '../components/header/Header';
import Fibonacci from '../components/fibonacci/Fibonacci';
import Footer from '../components/footer/Footer';

describe('App', () => {
  it('renders without crashing', () => {
    const app = shallow(<App />);
    expect(app).toMatchSnapshot();
  });
  describe('Render all child components', () => {
    it('Header', () => {
      const header = shallow(<Header />);
      expect(header).toMatchSnapshot();
    });
    it('Fibonacci', () => {
      const fibonacci = shallow(<Fibonacci />);
      expect(fibonacci).toMatchSnapshot();
    });
    it('Footer', () => {
      const footer = shallow(<Footer />);
      expect(footer).toMatchSnapshot();
    });
  });
});

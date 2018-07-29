import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from '../components/App';

import Header from '../components/Header';
import Fibonacci from '../components/Fibonacci';
import Footer from '../components/Footer';

describe('App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  describe('Render all child components', () => {
    it('Header', () => {
      const header = shallow(<Header />);
       expect(header).toMatchSnapshot();
    });
    it('Fibonacci', () => {
      const fibonacci = shallow(
         <Fibonacci />
       );
       expect(fibonacci).toMatchSnapshot();
    });
    it('Footer', () => {
      const footer = shallow(
         <Footer />
       );
       expect(footer).toMatchSnapshot();
    });
  });
});

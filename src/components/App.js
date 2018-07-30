import React, { Component } from 'react';

import Header from './header/Header';
import Fibonacci from './Fibonacci';
import Footer from './footer/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Fibonacci />
        <Footer />
      </div>
    );
  }
}

export default App;

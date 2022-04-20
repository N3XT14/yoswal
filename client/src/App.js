import React from 'react';

import { About, Header, Work } from './containers';
import { Navbar } from './components';
import './App.scss'

const App = () => {
  return (
    <div className='app'>
        <Navbar />
        <Header />
        <About />
        <Work />
    </div>
  );
};

export default App;
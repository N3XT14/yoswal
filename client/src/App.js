import React from 'react';

import { About, Header, Work, Skills, Testimonials, Contact } from './containers';
import { Navbar } from './components';
import './App.scss'

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default App;
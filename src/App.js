import React from 'react';
import './App.css';
import About from './components/about/About';
import Hero from './components/hero/Hero';
import Logos from './components/logos/Logos';
import Navbar from './components/navbar/Navbar'

const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Hero/>
      <Logos/>
      <About/>
    </div>
  )
}

export default App
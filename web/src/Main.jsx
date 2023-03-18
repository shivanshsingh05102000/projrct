import React from 'react';
import Footer from './components/Footer/Footer';
import Hero from './components/hero/Hero.jsx';
import Join from './components/Join/Join';
import Plans from './components/Plans/Plans';
import Programs from './components/Programs/Programs';
import Reasons from './components/Resons/Reasons';
import Testimonials from './components/Testimonials/Testimonials';

const Main = () => {
  return (
      <div className="App">
      <Hero/>
      <Programs/>
      <Reasons/>
      <Plans/>
      <Testimonials/>
      <Join/>
      <Footer/>
  </div>
  )
}

export default Main
import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Intro from './components/intro/Intro';
import Services from './components/services/services';
import Works from './components/work/Work';
import wave from './img/wavesOpacity.svg'
import Portfolio from './portfolio/Portfoli';
import Contact from './contact/Contact';
import Footer from './footer/Footer';


function App() {
  return (
    <>
    <div className="  pt-5 overflow-hidden App font-gumela text-white bg-[#1E2B48] container mx-auto " >
      <Navbar/>
      <Intro/>
      <Services/>
      <Works/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>
    </>
  );
}

export default App;

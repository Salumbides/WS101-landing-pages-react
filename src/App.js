// src/App.js
import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './style.css';

const App = () => {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Services />
      <Contact />
      <Footer />
      <div className="copyright">
        <p>Create By <a href="">Salumbides</a> | All Right Reserved @2024.</p>
      </div>
    </div>
  );
};

export default App;

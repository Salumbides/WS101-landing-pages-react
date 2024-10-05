// src/components/Home.js
import React from 'react';

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="social">
        <a href="https://github.com/shansalumbides"><i className='bx bxl-github'></i></a>
        <a href="https://dribbble.com/cjbonsol?onboarding=true&designer=true"><i className='bx bxl-dribbble'></i></a>
        <a href="https://www.behance.net/jealobonsol"><i className='bx bxl-behance'></i></a>
      </div>
      <div className="home-img">
        <img src="https://img.freepik.com/free-photo/web-design-concept-with-drawings_1134-77.jpg" alt="" />
      </div>
      <div className="home-text">
        <span></span>
        <h1>WEB DEVELOPMENT BACKGROUND</h1>
        <p>Web development is the process of building and maintaining websites. It includes everything from coding the structure of a site to designing how it looks and making sure it works well for users.</p>
      </div>
    </section>
  );
};

export default Home;

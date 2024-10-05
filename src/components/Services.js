// src/components/Services.js
import React from 'react';

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="heading">
        <h2>More details about the tools in the Web Development</h2>
      </div>
      <div className="services-content">
        <div className="services-box">
          <h3>JavaScript</h3>
          <a href="https://www.w3schools.com/js/default.asp"><i className='bx bx-code-alt'></i></a>
        </div>
        <div className="services-box">
          <h3>HTML</h3>
          <a href="https://www.w3schools.com/html/html_intro.asp"><i className='bx bx-server'></i></a>
        </div>
        <div className="services-box">
          <h3>CSS</h3>
          <a href="https://www.w3schools.com/css/css_intro.asp"><i className='bx bx-brush'></i></a>
        </div>
      </div>
    </section>
  );
};

export default Services;

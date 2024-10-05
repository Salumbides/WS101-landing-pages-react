// src/components/About.js
import React from 'react';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="heading">
        <h2>About the Web Development</h2>
      </div>
      <div className="about-container">
        <div className="about-img">
          <img src="https://img.freepik.com/free-photo/web-design-concepts-with-blurred-background_1134-82.jpg" alt="" />
        </div>
        <div className="about-text">
          <p>Web development is the process of creating and maintaining websites. It involves coding, designing, and managing the technical aspects to ensure that websites function properly and look good to users. It can include front-end development (what users see), back-end development (server-side), and full-stack development (both front-end and back-end).</p>
        </div>
      </div>
    </section>
  );
};

export default About;

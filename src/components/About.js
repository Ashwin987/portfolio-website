// src/components/About.js
import React from 'react';
import resume from '../assets/Resume_Ashwin.pdf';

const About = () => {
  return (
    <section className="about">
      <h2>About Me</h2>
      <p>I am a upcoming Computer Science graduate from UC Riverside.</p>
      <a href={resume} target="_blank" rel="noopener noreferrer">Download Resume</a>
    </section>
  );
};

export default About;

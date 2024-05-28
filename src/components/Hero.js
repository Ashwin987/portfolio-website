
import React, { useEffect } from 'react';
import photo from '../assets/photo.jpg';
import './Hero.css';  

const Hero = () => {
  useEffect(() => {
    const handleScroll = () => {
      const hero = document.querySelector('.hero');
      const scrolled = window.pageYOffset;
      const rate = scrolled * 0.5;
      hero.style.transform = `translate3d(0px, ${rate}px, 0px)`;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="hero">
      <img src={photo} alt="Ashwin Ramaseshan" className="hero-photo" />
      <h1>Ashwin Ramaseshan</h1>
      <p> Upcoming Computer Science Graduate and Aspiring Data Scientist</p>
    </section>
  );
};

export default Hero;

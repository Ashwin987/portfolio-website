
import React, { useState } from 'react';
import './ExperienceProjects.css';  

const ExperienceProjects = () => {
  const [hovered, setHovered] = useState(null);

  const handleMouseEnter = (index) => {
    setTimeout(() => {
      setHovered(index);
    }, 3000);  
  };

  const handleMouseLeave = () => {
    setHovered(null);
  };

  return (
    <section className="experience-projects">
      <h2>Experience</h2>
      <ul>
        <li 
          onMouseEnter={() => handleMouseEnter(0)}
          onMouseLeave={handleMouseLeave}
          className={hovered === 0 ? 'hovered' : ''}
        >
          NFL Sherpa Fantasy Analytics - Intern
          {hovered === 0 && <div className="summary">Utilized a variety of algorithms, including decision trees, random forests, neural networks, and regression models,
to achieve accurate predictions for over 1000+ players</div>}
        </li>
      </ul>
      <h2>Projects</h2>
      <ul>
        <li 
          onMouseEnter={() => handleMouseEnter(1)}
          onMouseLeave={handleMouseLeave}
          className={hovered === 1 ? 'hovered' : ''}
        >
          NBA Rookie Prediction Project
          {hovered === 1 && <div className="summary">Used machine learning models such as K means
clustering, linear regression and random forest to represent and effectively predict the performance of each rookie</div>}
        </li>
      </ul>
    </section>
  );
};

export default ExperienceProjects;

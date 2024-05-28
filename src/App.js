
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import EducationSkills from './components/EducationSkills';
import ExperienceProjects from './components/ExperienceProjects';
import Extracurriculars from './components/Extracurriculars';
import Footer from './components/Footer';
import LiveClock from './components/LiveClock'; 
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <LiveClock /> {/* Add the LiveClock component here */}
        <Hero />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/education-skills" element={<EducationSkills />} />
          <Route path="/experience-projects" element={<ExperienceProjects />} />
          <Route path="/extracurriculars" element={<Extracurriculars />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

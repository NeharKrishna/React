import React from 'react';
import Hero from './Hero.jsx';
import Navbar from './Navbar1.jsx';
import About from './About.jsx';
import Project from './Project.jsx';
import Contact from './Contact.jsx';
import Footer from './Footer.jsx';
import './App.css'; // Assuming you have some global styles
import Skills from './Skills.jsx';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Project />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

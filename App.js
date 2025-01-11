import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import User from './components/User';
import { ThemeProvider } from './context/ThemeContext'; // Ensure correct import path

const App = () => {
  return (
    <ThemeProvider> {/* Wrap your app with ThemeProvider */}
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/user" element={<User />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;

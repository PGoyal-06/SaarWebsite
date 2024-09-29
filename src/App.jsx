import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import Hero from './components/hero/Hero';
import Services from './components/services/Services';
import Team from './components/team/Team';
import Testimonials from './components/testimonials/Testimonials';
import Footer from './components/footer/Footer';
import Contact from './components/contact/Contact';
import ServicesPage from './components/services/ServicesPage';
import About from './components/about/About';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar isScrolled={false} />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Services />
              <Team />
              <Testimonials />
            </>
          } />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

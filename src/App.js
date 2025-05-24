import React from 'react';
<<<<<<< HEAD
import { Routes, Route } from 'react-router-dom';

=======
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle.min';
>>>>>>> b953fe75f312377e6aa4ca7ca3a05e2fea6659a2
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import ContactUs from './pages/ContactUs';
import Portfolio from './pages/Portfolio';
<<<<<<< HEAD

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  return (
    <>
=======
function App() {
  return (
    <div> {/* ✅ Use Router wrapper */}
>>>>>>> b953fe75f312377e6aa4ca7ca3a05e2fea6659a2
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
<<<<<<< HEAD
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Footer />
    </>
=======
      
        <Route path="/portfolio" element={<Portfolio />} />

        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Footer/>
    </div>
>>>>>>> b953fe75f312377e6aa4ca7ca3a05e2fea6659a2
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import ContactUs from './pages/ContactUs';
import Portfolio from './pages/Portfolio';
function App() {
  return (
    <div> {/* ✅ Use Router wrapper */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
      
        <Route path="/portfolio" element={<Portfolio />} />

        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;

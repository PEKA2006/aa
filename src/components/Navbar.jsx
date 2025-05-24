import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar px-4">
      <Link className="navbar-brand text-white fw-bold fs-3" to="/">OTP</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse justify-content-end" id="navbarContent">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link text-white mx-2" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white mx-2" to="/services">Services</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white mx-2" to="/portfolio">Portfolio</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white mx-2" to="/contact">Contact Us</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

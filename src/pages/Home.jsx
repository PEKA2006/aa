import React from 'react';
import './Home.css';
import heroImage from '../assets/hero-banner.jpg';
import aboutImage from '../assets/aboutImage.jpg';

import { QuoteIcon } from 'lucide-react';

// Example icons for Why Choose Us section — replace these imports with your actual icons
import { CameraIcon, StarIcon, HeartIcon } from 'lucide-react';

const APP_NAME = 'OTP';

const Home = () => {
  return (
    <div className="home-page">

      {/* Hero Section */}
      <section className="hero-section" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="overlay">
          <h1 className="hero-text">Capture Moments, Create Memories</h1>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="about-content">
          <img src={aboutImage} alt="About OTP" className="about-img" />
          <div className="about-text">
            <h2>About {APP_NAME}</h2>
            <p>
              At OTP Studios, we specialize in turning your special moments into timeless memories. Whether it's a wedding,
              corporate event, or a personal photo session, our dedicated team brings creativity and passion to every project.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section - no map, items hardcoded */}
      <section className="why-choose-section">
        <h2>Why Choose {APP_NAME} Studios?</h2>
        <div className="why-choose-grid">

          <div className="why-card">
            <div className="icon-wrapper">
              <CameraIcon className="icon" />
            </div>
            <h2>Creative Vision</h2>
            <p>We bring a unique artistic perspective to every shot, ensuring your photos are not just pictures, but pieces of art.</p>
          </div>

          <div className="why-card">
            <div className="icon-wrapper">
              <StarIcon className="icon" />
            </div>
            <h2>Client-Focused Approach</h2>
            <p>Your story and satisfaction are our top priorities. We listen, adapt, and deliver a personalized experience.</p>
          </div>

          <div className="why-card">
            <div className="icon-wrapper">
              <HeartIcon className="icon" />
            </div>
            <h2>Customer Focused</h2>
            <p>We prioritize your vision and satisfaction above all else.</p>
          </div>

        </div>
      </section>

      {/* Testimonials Section - no map, items hardcoded */}
      <section className="testimonials-section">
        <h2>Kind Words From Our Clients</h2>
        <div className="testimonials-grid">

          <div className="testimonial-card">
            <QuoteIcon className="quote-icon" />
            <blockquote>"Amazing experience, highly professional!"</blockquote>
            <footer>
              <h4 className="client-name">Swathi and Suhaas</h4>
              <p className="client-service">Wedding Photography</p>
            </footer>
          </div>

          <div className="testimonial-card">
            <QuoteIcon className="quote-icon" />
            <blockquote>"Captured our corporate event perfectly."</blockquote>
            <footer>
              <p className="client-name">Michael Smith</p>
              <p className="client-service">Corporate Event</p>
            </footer>
          </div>

          <div className="testimonial-card">
            <QuoteIcon className="quote-icon" />
            <blockquote>"Highly recommend for any special occasion."</blockquote>
            <footer>
              <p className="client-name">Sarah Lee</p>
              <p className="client-service">Personal Photoshoot</p>
            </footer>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Home;

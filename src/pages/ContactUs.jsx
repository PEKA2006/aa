import React, { useState } from 'react';
import './ContactUs.css';

const SERVICES = [
  'Portrait Sessions',
  'Event Coverage',
  'Wedding Photography',
  'Commercial & Branding',
  'Maternity & Newborn',
  'Real Estate Photography'
];

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    address: '',
    mobileAddress: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Your message has been submitted!");
  };

  return (
    <div className="contact-container">
      <h2 className="contact-title">Contact Us</h2>
      <div className="contact-wrapper">
        <form onSubmit={handleSubmit} className="contact-form">
          <label>Full Name</label>
          <input type="text" name="name" required onChange={handleChange} placeholder="Enter your full name" />

          <label>Phone Number</label>
          <input type="tel" name="phone" required onChange={handleChange} placeholder="Enter your phone number" />

          <label>Email ID</label>
          <input type="email" name="email" required onChange={handleChange} placeholder="Enter your email" />

          <label>Type of Service</label>
          <select name="service" required onChange={handleChange}>
            <option value="">-- Select a service --</option>
            {SERVICES.map((service, index) => (
              <option key={index} value={service}>{service}</option>
            ))}
          </select>

          <label>Address</label>
          <textarea name="address" rows="3" required onChange={handleChange} placeholder="Enter your full address"></textarea>

          <label>Mobile Address (Location)</label>
          <textarea name="mobileAddress" rows="2" required onChange={handleChange} placeholder="Nearby landmark or mobile pickup location"></textarea>

          <button type="submit">Submit</button>
        </form>

        <div className="contact-details">
          <h3>Get in Touch</h3>
          <p><strong>Phone:</strong> +91-9876543210</p>
          <p><strong>Email:</strong> contact@otpstudios.com</p>
          <p><strong>Address:</strong> OTP Studios, 123 Creative Lane, Hyderabad, Telangana, India</p>
          <p><strong>Instagram:</strong> <a href="https://instagram.com/otpstudios" target="_blank">instagram.com/otpstudios</a></p>
          <p><strong>Facebook:</strong> <a href="https://facebook.com/otpstudios" target="_blank">facebook.com/otpstudios</a></p>
          <p><strong>YouTube:</strong> <a href="https://youtube.com/otpstudios" target="_blank">youtube.com/otpstudios</a></p>
          <iframe
            title="OTP Studios Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.263407365053!2d78.3762294141883!3d17.4475749880389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93e5b6ef0dfb%3A0x30c62f3a569ffcf5!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1651090644736!5m2!1sen!2sin"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

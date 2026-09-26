import React, { useState } from 'react';
import axios from 'axios';
import '../css/Contact.css';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [responseMessage, setResponseMessage] = useState('');
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResponseMessage('');
    setIsError(false);
    setIsLoading(true);

    try {
      const response = await axios.post(`${API_BASE_URL}/api/contact`, formData);
      setResponseMessage(response.data.message || 'Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      const serverMessage = error.response?.data?.message || 'Failed to send message. Please try again later.';
      setResponseMessage(serverMessage);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="contact-section">
      <h1 className="section-title">Contact Me</h1>
      
      <div className="contact-container">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="contact-btn" disabled={isLoading}>
            {isLoading ? (
              <div className="btn-content">
                <div className="spinner"></div>
                <span>Sending...</span>
              </div>
            ) : (
              'Send Message'
            )}
          </button>
        </form>

        {responseMessage && (
          <p className={`response-message ${isError ? 'error' : 'success'}`}>
            {responseMessage}
          </p>
        )}
      </div>
    </div>
  );
};

export default Contact;

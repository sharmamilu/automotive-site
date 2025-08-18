import React, { useState } from "react";
import { FiMail, FiPhone, FiMapPin, FiClock, FiSend } from "react-icons/fi";
import "../styles/contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare the WhatsApp message
    const message = `
      Name: ${formData.name}
      Email: ${formData.email}
      Phone: ${formData.phone}
      Subject: ${formData.subject}
      Message: ${formData.message}
    `;

    // URL-encode the message to make it suitable for use in a URL
    const encodedMessage = encodeURIComponent(message.trim());

    // WhatsApp phone number (include country code, no + sign)
    const phoneNumber = "8015059351"; // Replace this with your WhatsApp phone number

    // Construct the WhatsApp link
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Redirect to WhatsApp
    window.location.href = whatsappURL;
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="hero-content">
          <h1>Get in Touch</h1>
          <p>We're here to help and answer any questions you might have.</p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="contact-grid">
        <div className="container">
          {/* Contact Info */}
          <div className="contact-info">
            <h2>Contact Information</h2>
            <p className="info-description">
              Fill out the form or contact us through other channels listed
              below
            </p>

            <div className="info-cards">
              <div className="info-card">
                <div className="info-icon">
                  <FiMail />
                </div>
                <div className="info-content">
                  <h3>Email Us</h3>
                  <p>info@autopartspro.com</p>
                  <p>support@autopartspro.com</p>
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon">
                  <FiPhone />
                </div>
                <div className="info-content">
                  <h3>Call Us</h3>
                  <p>+1 (800) 123-4567</p>
                  <p>Mon-Fri: 9am-6pm</p>
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon">
                  <FiMapPin />
                </div>
                <div className="info-content">
                  <h3>Visit Us</h3>
                  <p>123 Automotive Way</p>
                  <p>Detroit, MI 48201</p>
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon">
                  <FiClock />
                </div>
                <div className="info-content">
                  <h3>Business Hours</h3>
                  <p>Monday - Friday: 9am - 6pm</p>
                  <p>Saturday: 10am - 4pm</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form">
            <h2>Send Us a Message</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="submit-btn">
                Send Message <FiSend />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="map-container">
          <iframe
            title="AutoPartsPro Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.6302034694468!2d77.6055853758568!3d12.931472815755182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1452d43c05e3%3A0xa28e9225b7ec4ecc!2sKannur%20Food%20Point!5e0!3m2!1sen!2sin!4v1755533695143!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>What are your shipping options?</h3>
              <p>
                We offer standard (3-5 business days), expedited (2 business
                days), and overnight shipping options for all orders within the
                continental US.
              </p>
            </div>
            <div className="faq-item">
              <h3>Do you offer international shipping?</h3>
              <p>
                Yes, we ship to most countries worldwide. International shipping
                rates and delivery times vary by destination.
              </p>
            </div>
            <div className="faq-item">
              <h3>What is your return policy?</h3>
              <p>
                We offer a 30-day return policy for unused items in original
                packaging. Some items may have different return policies as
                noted on the product page.
              </p>
            </div>
            <div className="faq-item">
              <h3>How can I track my order?</h3>
              <p>
                Once your order ships, you'll receive a tracking number via
                email. You can track your package using the link provided or
                through our Order Status page.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

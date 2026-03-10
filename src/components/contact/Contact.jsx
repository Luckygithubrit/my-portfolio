import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <div id="contact" className="contact-section py-5">
      <div className="container">
        <h2 className="text-center sub-title mb-5">
          <span>Contact</span> Me
        </h2>
        <div className="row">
          {/* Left Side - Contact Details */}
<div className="col-md-6 mb-4">
  <div className="contact-details">
    <h4>Get in Touch</h4>
    <p><strong>Email:</strong> laveenpappu547@gmail.com</p>
    <p><strong>Phone:</strong> +91 9182543736</p>
    <p><strong>Location:</strong> Visakhapatnam, Andhra Pradesh, India</p>
    <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/laveen-pappu547/" target="_blank" rel="noreferrer">linkedin.com/in/laveen-pappu547</a></p>
    <p><strong>GitHub:</strong> <a href="https://github.com/Luckygithubrit" target="_blank" rel="noreferrer">github.com/Luckygithubrit</a></p>
  </div>
</div>


          {/* Right Side - Contact Form */}
          <div className="col-md-6">
            <form className="contact-form">
              <div className="form-group mb-3">
                <input type="text" className="form-control" placeholder="Your Name" required />
              </div>
              <div className="form-group mb-3">
                <input type="email" className="form-control" placeholder="Your Email" required />
              </div>
              <div className="form-group mb-3">
                <input type="text" className="form-control" placeholder="Subject" required />
              </div>
              <div className="form-group mb-3">
                <textarea className="form-control" rows="4" placeholder="Your Message" required></textarea>
              </div>
              <button type="submit" className="btn btn-dark w-100">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    console.log('Newsletter subscription:', email);
    setEmail('');
    // Aquí iría la lógica de suscripción
  };

  return (
    <footer className="footer-area">
      <div className="footer-widget">
        <div className="container">
          <div className="row footer-widget-wrapper pt-100 pb-70">
            <div className="col-md-6 col-lg-4">
              <div className="footer-widget-box about-us">
                <Link to="/" className="footer-logo">
                  <img src="/assets/img/logo/logo-light.png" alt="" />
                </Link>
                <p className="mb-3">
                  We are many variations of passages available but the majority have suffered alteration
                  in some form by injected humour words believable.
                </p>
                <ul className="footer-contact">
                  <li>
                    <a href="tel:+21236547898">
                      <i className="far fa-phone"></i>+2 123 654 7898
                    </a>
                  </li>
                  <li>
                    <i className="far fa-map-marker-alt"></i>25/B Milford Road, New York
                  </li>
                  <li>
                    <a href="mailto:info@example.com">
                      <i className="far fa-envelope"></i>info@example.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-lg-2">
              <div className="footer-widget-box list">
                <h4 className="footer-widget-title">Quick Links</h4>
                <ul className="footer-list">
                  <li>
                    <Link to="/about">
                      <i className="fas fa-caret-right"></i> About Us
                    </Link>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fas fa-caret-right"></i> Update News
                    </a>
                  </li>
                  <li>
                    <Link to="/terms">
                      <i className="fas fa-caret-right"></i> Terms Of Service
                    </Link>
                  </li>
                  <li>
                    <Link to="/privacy">
                      <i className="fas fa-caret-right"></i> Privacy policy
                    </Link>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fas fa-caret-right"></i> Our Team
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="footer-widget-box list">
                <h4 className="footer-widget-title">Support Center</h4>
                <ul className="footer-list">
                  <li>
                    <a href="#">
                      <i className="fas fa-caret-right"></i> Help Center
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fas fa-caret-right"></i> FAQ's
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fas fa-caret-right"></i> Booking Tips
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fas fa-caret-right"></i> Live Chat
                    </a>
                  </li>
                  <li>
                    <Link to="/contact">
                      <i className="fas fa-caret-right"></i> Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="footer-widget-box list">
                <h4 className="footer-widget-title">Newsletter</h4>
                <div className="footer-newsletter">
                  <p>Subscribe Our Newsletter To Get Latest Update And News</p>
                  <div className="subscribe-form">
                    <form onSubmit={handleNewsletterSubmit}>
                      <input 
                        type="email" 
                        className="form-control" 
                        placeholder="Your Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                      <button className="theme-btn" type="submit">
                        Subscribe Now <i className="far fa-paper-plane"></i>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <div className="row">
            <div className="col-md-6 align-self-center">
              <p className="copyright-text">
                &copy; Copyright <span id="date">{new Date().getFullYear()}</span> <Link to="/"> carway </Link> All Rights Reserved.
              </p>
            </div>
            <div className="col-md-6 align-self-center">
              <ul className="footer-social">
                <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                <li><a href="#"><i className="fab fa-youtube"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
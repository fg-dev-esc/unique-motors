import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const location = useLocation();

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <header className="header">
      {/* top header */}
      <div className="header-top">
        <div className="container">
          <div className="header-top-wrapper">
            <div className="header-top-left">
              <div className="header-top-contact">
                <ul>
                  <li>
                    <div className="header-top-contact-icon">
                      <img src="/assets/img/icon/mail.svg" alt="" />
                    </div>
                    <div className="header-top-contact-info">
                      <a href="mailto:info@example.com">info@example.com</a>
                    </div>
                  </li>
                  <li>
                    <div className="header-top-contact-icon">
                      <img src="/assets/img/icon/clock.svg" alt="" />
                    </div>
                    <div className="header-top-contact-info">
                      <a href="#">Sun - Fri (08AM - 10PM)</a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="header-top-right">
              <div className="header-top-social">
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* main navigation */}
      <div className="main-navigation">
        <nav className="navbar navbar-expand-lg">
          <div className="container custom-nav">
            <Link className="navbar-brand" to="/">
              <img src="/assets/img/logo/logo-full-light.png" alt="logo" />
            </Link>
            
            <div className="mobile-menu-right">
              <div className="header-account header-mobile-account">
                <div className="dropdown">
                  <button type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="far fa-user-circle"></i>
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end">
                    <li><a className="dropdown-item" href="profile.html"><i className="far fa-user"></i> My Profile</a></li>
                    <li><a className="dropdown-item" href="billing.html"><i className="far fa-clipboard-list"></i> Billing Info</a></li>
                    <li><a className="dropdown-item" href="setting.html"><i className="far fa-cog"></i> Settings</a></li>
                    <li><a className="dropdown-item" href="#"><i className="far fa-sign-out"></i> Log Out</a></li>
                  </ul>
                </div>
              </div>
              <button 
                className="navbar-toggler" 
                type="button" 
                onClick={handleNavCollapse}
                aria-expanded={!isNavCollapsed} 
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-mobile-icon"><i className="far fa-bars"></i></span>
              </button>
            </div>

            <div className={`collapse navbar-collapse ${isNavCollapsed ? '' : 'show'}`} id="main_nav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className={`nav-link ${isActive('/')}`} to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link ${isActive('/cars')}`} to="/cars">
                    Cars
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Pages</a>
                  <ul className="dropdown-menu fade-down">
                    <li><Link className="dropdown-item" to="/about">About Us</Link></li>
                    <li><a className="dropdown-item" href="#">Our Team</a></li>
                    <li><a className="dropdown-item" href="#">Pricing Plan</a></li>
                    <li><a className="dropdown-item" href="#">Gallery</a></li>
                    <li><a className="dropdown-item" href="#">Faq</a></li>
                    <li><a className="dropdown-item" href="#">Testimonials</a></li>
                    <li className="dropdown-submenu">
                      <a className="dropdown-item dropdown-toggle" href="#">Account</a>
                      <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Login</a></li>
                        <li><a className="dropdown-item" href="#">Register</a></li>
                        <li><a className="dropdown-item" href="#">Forgot Password</a></li>
                      </ul>
                    </li>
                    <li><a className="dropdown-item" href="#">404 Error</a></li>
                    <li><a className="dropdown-item" href="#">Coming Soon</a></li>
                    <li><a className="dropdown-item" href="#">Terms Of Service</a></li>
                    <li><a className="dropdown-item" href="#">Privacy Policy</a></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link ${isActive('/services')}`} to="/services">
                    Services
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link ${isActive('/contact')}`} to="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
              
              <div className="header-nav-right">
                <div className="header-phone">
                  <div className="header-phone-icon">
                    <img src="/assets/img/icon/phone.svg" alt="" />
                  </div>
                  <div className="header-phone-content">
                    <span>Need Car Rent ?</span>
                    <h5 className="header-phone-number"><a href="tel:+2123654789">+2 123 654 789</a></h5>
                  </div>
                </div>
                <div className="header-btn mt-2">
                  <Link to="/cars" className="theme-btn">Explore Cars</Link>
                </div>
                <div className="header-account">
                  <div className="dropdown">
                    <button type="button" data-bs-toggle="dropdown" aria-expanded="false">
                      <i className="far fa-user-circle"></i>
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end">
                      <li><a className="dropdown-item" href="#"><i className="far fa-user"></i> My Profile</a></li>
                      <li><a className="dropdown-item" href="#"><i className="far fa-clipboard-list"></i> Billing Info</a></li>
                      <li><a className="dropdown-item" href="#"><i className="far fa-cog"></i> Settings</a></li>
                      <li><a className="dropdown-item" href="#"><i className="far fa-sign-out"></i> Log Out</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
import React from 'react';
import { Link } from 'react-router-dom';

const AboutArea = () => {
  const aboutFeatures = [
    "At vero eos et accusamus et iusto odio",
    "Established fact that a reader will be distracted",
    "Sed ut perspiciatis unde omnis iste natus sit"
  ];

  return (
    <div className="about-area py-120 mb-50">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 d-flex align-items-center justify-content-center">
            <div className="about-left">
              <div className="about-img">
                <img className="about-img-1" src="/assets/img/about/01.jpg" alt="" />
              </div>
              <div className="about-shape">
                <img src="/assets/img/shape/02.png" alt="" />
              </div>
              <div className="about-experience">
                <div className="about-experience-icon">
                  <img src="/assets/img/icon/car-rent.svg" alt="" />
                </div>
                <b>30 Years Of <br /> Quality Service</b>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-right">
              <div className="site-heading mb-3">
                <span className="site-title-tagline">About Us</span>
                <h2 className="site-title">
                  We Provide Quality <span>Car Rental</span> Services
                </h2>
              </div>
              <p className="about-text">
                There are many variations of passages of Lorem Ipsum available, but the majority have
                suffered alteration in some form, by injected humour, or randomised words which don't
                look even slightly believable.
              </p>
              <div className="about-list-wrapper">
                <ul className="about-list list-unstyled">
                  {aboutFeatures.map((feature, index) => (
                    <li key={index}>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <Link to="/about" className="theme-btn mt-4">
                Discover More <i className="far fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutArea;
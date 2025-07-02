import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const HeroSlider = () => {
  const slides = [
    {
      background: '/assets/img/slider/slider-1.jpg',
      subtitle: '50% Off Reserved Now!',
      title: 'Car Rental In Your <span>Desired</span> Destination',
      description: 'There are many variations of passages orem psum available but the majority have suffered alteration in some form by injected humour or randomised words which don\'t look even making it look like readable slightly believable.'
    },
    {
      background: '/assets/img/slider/slider-2.jpg',
      subtitle: '50% Off Reserved Now!',
      title: 'Car Rental In Your <span>Desired</span> Destination',
      description: 'There are many variations of passages orem psum available but the majority have suffered alteration in some form by injected humour or randomised words which don\'t look even making it look like readable slightly believable.'
    },
    {
      background: '/assets/img/slider/slider-3.jpg',
      subtitle: '50% Off Reserved Now!',
      title: 'Car Rental In Your <span>Desired</span> Destination',
      description: 'There are many variations of passages orem psum available but the majority have suffered alteration in some form by injected humour or randomised words which don\'t look even making it look like readable slightly believable.'
    }
  ];

  useEffect(() => {
    if (window.$ && window.$.fn.owlCarousel) {
      window.$('.hero-slider').owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        nav: true,
        dots: false,
        navText: ['<i class="far fa-arrow-left"></i>', '<i class="far fa-arrow-right"></i>']
      });
    }
  }, []);

  return (
    <div className="hero-section">
      <div className="hero-slider owl-carousel owl-theme">
        {slides.map((slide, index) => (
          <div 
            key={index}
            className="hero-single" 
            style={{ background: `url(${slide.background})` }}
          >
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-9 col-lg-7">
                  <div className="hero-content">
                    <h6 
                      className="hero-sub-title wow animate__animated animate__fadeInUp"
                      data-wow-duration="1s" 
                      data-wow-delay=".25s"
                    >
                      {slide.subtitle}
                    </h6>
                    <h1 
                      className="hero-title wow animate__animated animate__fadeInUp"
                      data-wow-duration="1s" 
                      data-wow-delay=".50s"
                      dangerouslySetInnerHTML={{ __html: slide.title }}
                    />
                    <p 
                      className="wow animate__animated animate__fadeInUp" 
                      data-wow-duration="1s"
                      data-wow-delay=".75s"
                    >
                      {slide.description}
                    </p>
                    <div 
                      className="hero-btn wow animate__animated animate__fadeInUp" 
                      data-wow-duration="1s"
                      data-wow-delay="1s"
                    >
                      <Link to="/about" className="theme-btn">
                        About More<i className="far fa-arrow-right"></i>
                      </Link>
                      <Link to="/services" className="theme-btn theme-btn2">
                        Learn More<i className="far fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
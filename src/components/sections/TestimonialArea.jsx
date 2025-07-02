import React, { useEffect } from 'react';

const TestimonialArea = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sylvia H Green",
      role: "Customer",
      image: "/assets/img/testimonial/01.jpg",
      quote: "There are many variations of passages available but the majority have suffered to the alteration in some injected.",
      rating: 5
    },
    {
      id: 2,
      name: "Gordo Novak",
      role: "Customer",
      image: "/assets/img/testimonial/02.jpg",
      quote: "There are many variations of passages available but the majority have suffered to the alteration in some injected.",
      rating: 5
    },
    {
      id: 3,
      name: "Reid E Butt",
      role: "Customer",
      image: "/assets/img/testimonial/03.jpg",
      quote: "There are many variations of passages available but the majority have suffered to the alteration in some injected.",
      rating: 5
    },
    {
      id: 4,
      name: "Parker Jimenez",
      role: "Customer",
      image: "/assets/img/testimonial/04.jpg",
      quote: "There are many variations of passages available but the majority have suffered to the alteration in some injected.",
      rating: 5
    },
    {
      id: 5,
      name: "Heruli Nez",
      role: "Customer",
      image: "/assets/img/testimonial/05.jpg",
      quote: "There are many variations of passages available but the majority have suffered to the alteration in some injected.",
      rating: 5
    }
  ];

  useEffect(() => {
    // Inicializar Owl Carousel para testimonials si está disponible
    if (window.$ && window.$.fn.owlCarousel) {
      window.$('.testimonial-slider').owlCarousel({
        items: 3,
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        margin: 30,
        nav: false,
        dots: true,
        responsive: {
          0: { items: 1 },
          600: { items: 2 },
          1000: { items: 3 }
        }
      });
    }
  }, []);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <i key={index} className={`fas fa-star ${index < rating ? 'active' : ''}`}></i>
    ));
  };

  return (
    <div className="testimonial-area py-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mx-auto">
            <div className="site-heading text-center">
              <span className="site-title-tagline">Testimonials</span>
              <h2 className="site-title text-white">What Client <span>Say's</span></h2>
              <div className="heading-divider"></div>
            </div>
          </div>
        </div>
        <div className="testimonial-slider owl-carousel owl-theme">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-single">
              <div className="testimonial-content">
                <div className="testimonial-author-img">
                  <img src={testimonial.image} alt={testimonial.name} />
                </div>
                <div className="testimonial-author-info">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.role}</p>
                </div>
              </div>
              <div className="testimonial-quote">
                <span className="testimonial-quote-icon">
                  <i className="flaticon-quote-hand-drawn-symbol"></i>
                </span>
                <p>{testimonial.quote}</p>
                <div className="testimonial-quote-icon">
                  <img src="/assets/img/icon/quote.svg" alt="" />
                </div>
              </div>
              <div className="testimonial-rate">
                {renderStars(testimonial.rating)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialArea;
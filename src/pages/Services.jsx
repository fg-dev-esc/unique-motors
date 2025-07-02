import React from 'react';
import Breadcrumb from '../components/ui/Breadcrumb';

const Services = () => {
  const services = [
    {
      id: 1,
      count: "01",
      icon: "/assets/img/icon/car-rent-2.svg",
      title: "Car Rental",
      description: "There are many variations of passages orem psum available but the majority have suffered alteration in some form by injected.",
      link: "#"
    },
    {
      id: 2,
      count: "02",
      icon: "/assets/img/icon/airport.svg",
      title: "Airport Transfer",
      description: "There are many variations of passages orem psum available but the majority have suffered alteration in some form by injected.",
      link: "#"
    },
    {
      id: 3,
      count: "03",
      icon: "/assets/img/icon/wedding.svg",
      title: "Wedding Ceremony",
      description: "There are many variations of passages orem psum available but the majority have suffered alteration in some form by injected.",
      link: "#"
    },
    {
      id: 4,
      count: "04",
      icon: "/assets/img/icon/city-tour.svg",
      title: "Whole City Tour",
      description: "There are many variations of passages orem psum available but the majority have suffered alteration in some form by injected.",
      link: "#"
    },
    {
      id: 5,
      count: "05",
      icon: "/assets/img/icon/hospital.svg",
      title: "Hospital Transfer",
      description: "There are many variations of passages orem psum available but the majority have suffered alteration in some form by injected.",
      link: "#"
    },
    {
      id: 6,
      count: "06",
      icon: "/assets/img/icon/baggage.svg",
      title: "Baggage Transport",
      description: "There are many variations of passages orem psum available but the majority have suffered alteration in some form by injected.",
      link: "#"
    }
  ];

  const handleServiceClick = (service) => {
    console.log('Service clicked:', service.title);
    // Aquí iría la navegación o lógica específica del servicio
  };

  return (
    <>
      <Breadcrumb title="Services" currentPage="Services" />
      
      <div className="service-area py-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mx-auto">
              <div className="site-heading text-center">
                <span className="site-title-tagline">Services</span>
                <h2 className="site-title">What We <span>Offer</span></h2>
                <div className="heading-divider"></div>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            {services.map((service) => (
              <div key={service.id} className="col-md-6 col-lg-4">
                <div className="service-item">
                  <span className="service-count">{service.count}</span>
                  <div className="service-icon">
                    <img src={service.icon} alt={service.title} />
                  </div>
                  <div className="service-content">
                    <h3 className="service-title">
                      <a 
                        href="#" 
                        onClick={(e) => {
                          e.preventDefault();
                          handleServiceClick(service);
                        }}
                      >
                        {service.title}
                      </a>
                    </h3>
                    <p className="service-text">
                      {service.description}
                    </p>
                    <div className="service-arrow">
                      <button 
                        className="theme-btn"
                        onClick={() => handleServiceClick(service)}
                      >
                        Read More <i className="far fa-arrow-right"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
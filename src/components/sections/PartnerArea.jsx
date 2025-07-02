import React, { useEffect } from 'react';

const PartnerArea = () => {
  const partners = [
    "/assets/img/partner/01.png",
    "/assets/img/partner/02.png",
    "/assets/img/partner/01.png",
    "/assets/img/partner/02.png",
    "/assets/img/partner/01.png",
    "/assets/img/partner/02.png",
    "/assets/img/partner/01.png"
  ];

  useEffect(() => {
    // Inicializar Owl Carousel para partners si está disponible
    if (window.$ && window.$.fn.owlCarousel) {
      window.$('.partner-slider').owlCarousel({
        items: 6,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        margin: 30,
        nav: false,
        dots: false,
        responsive: {
          0: { items: 2 },
          600: { items: 3 },
          768: { items: 4 },
          992: { items: 5 },
          1200: { items: 6 }
        }
      });
    }
  }, []);

  return (
    <div className="partner-area bg pt-50 pb-50">
      <div className="container">
        <div className="partner-wrapper partner-slider owl-carousel owl-theme">
          {partners.map((partner, index) => (
            <div key={index} className="partner-item">
              <img src={partner} alt={`Partner ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnerArea;
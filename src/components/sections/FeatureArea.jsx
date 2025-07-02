import React from 'react';

const FeatureArea = () => {
  const features = [
    {
      icon: '/assets/img/icon/quality-service.svg',
      title: 'Quality Service',
      description: 'There are many variations of passages available but the majority have suffered alteration in some form.'
    },
    {
      icon: '/assets/img/icon/booking.svg',
      title: 'Online Booking',
      description: 'There are many variations of passages available but the majority have suffered alteration in some form.'
    },
    {
      icon: '/assets/img/icon/money.svg',
      title: 'Affordable Pricing',
      description: 'There are many variations of passages available but the majority have suffered alteration in some form.'
    }
  ];

  return (
    <div className="feature-area pt-120">
      <div className="container">
        <div className="feature-wrapper">
          <div className="row">
            {features.map((feature, index) => (
              <div key={index} className="col-md-6 col-lg-4">
                <div className="feature-item">
                  <div className="feature-icon">
                    <img src={feature.icon} alt="" />
                  </div>
                  <div className="feature-content">
                    <h4>{feature.title}</h4>
                    <p>{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureArea;
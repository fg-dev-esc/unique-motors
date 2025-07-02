import React from 'react';

const ProcessArea = () => {
  const processSteps = [
    {
      step: "01",
      icon: "/assets/img/icon/destination.svg",
      title: "Pick Destination",
      description: "It is a long established fact that a reader will be distracted readable content of a page."
    },
    {
      step: "02",
      icon: "/assets/img/icon/choose-car.svg",
      title: "Choose Perfect Car",
      description: "It is a long established fact that a reader will be distracted readable content of a page."
    },
    {
      step: "03",
      icon: "/assets/img/icon/online-payment.svg",
      title: "Online Payment",
      description: "It is a long established fact that a reader will be distracted readable content of a page."
    },
    {
      step: "04",
      icon: "/assets/img/icon/confirm-ride.svg",
      title: "Enjoy Your Car Ride",
      description: "It is a long established fact that a reader will be distracted readable content of a page."
    }
  ];

  return (
    <div className="process-area pt-120 pb-80">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mx-auto">
            <div className="site-heading text-center">
              <span className="site-title-tagline">Process</span>
              <h2 className="site-title">How It's <span>Work</span></h2>
              <div className="heading-divider"></div>
            </div>
          </div>
        </div>
        <div className="row justify-content-between">
          {processSteps.map((step, index) => (
            <div key={index} className="col-lg-3 col-md-6 text-center mb-50">
              <div className="process-single">
                <div className="icon">
                  <span>{step.step}</span>
                  <img src={step.icon} alt="" />
                </div>
                <h4>{step.title}</h4>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProcessArea;
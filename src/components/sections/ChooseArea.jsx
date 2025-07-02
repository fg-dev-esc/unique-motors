import React from 'react';

const ChooseArea = () => {
  const chooseFeatures = [
    {
      icon: "/assets/img/icon/car.svg",
      title: "Best Quality Cars",
      description: "There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration."
    },
    {
      icon: "/assets/img/icon/car-key.svg",
      title: "No Cancellation Fees",
      description: "There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration."
    },
    {
      icon: "/assets/img/icon/driver.svg",
      title: "Personal Driver",
      description: "There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration."
    }
  ];

  const handleVideoPlay = () => {
    // Aquí iría la lógica para abrir el video modal
    console.log('Playing video');
  };

  return (
    <div className="choose-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="choose-content">
              <div className="site-heading">
                <span className="site-title-tagline text-white">Why Choose Us</span>
                <h2 className="site-title text-white mb-10">
                  We are dedicated <span>to provide</span> quality service
                </h2>
                <p className="text-white">
                  It is a long established fact that a reader will be distracted by the readable
                  content of a page when looking at its layout.
                </p>
              </div>
              <div className="choose-content-wrapper">
                {chooseFeatures.map((feature, index) => (
                  <div key={index} className="choose-item">
                    <div className="choose-item-icon">
                      <img src={feature.icon} alt="" />
                    </div>
                    <div className="choose-item-info">
                      <h3>{feature.title}</h3>
                      <p>{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="choose-img">
              <div className="video-wrapper">
                <button 
                  className="play-btn popup-youtube" 
                  onClick={handleVideoPlay}
                  aria-label="Play video"
                >
                  <i className="fas fa-play"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseArea;
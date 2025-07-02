import React, { useState, useEffect, useRef } from 'react';

const CounterArea = () => {
  const [counts, setCounts] = useState({
    cars: 0,
    clients: 0,
    drivers: 0,
    experience: 0
  });
  const [hasAnimated, setHasAnimated] = useState(false);
  const counterRef = useRef(null);

  const counters = [
    {
      icon: "/assets/img/icon/car.svg",
      target: 500,
      title: "+ Available Cars",
      key: "cars"
    },
    {
      icon: "/assets/img/icon/car-rent.svg",
      target: 900,
      title: "+ Happy Clients",
      key: "clients"
    },
    {
      icon: "/assets/img/icon/driver.svg",
      target: 1500,
      title: "+ Experts Driver",
      key: "drivers"
    },
    {
      icon: "/assets/img/icon/experince.svg",
      target: 30,
      title: "+ Years Of Experience",
      key: "experience"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateCounters();
        }
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCounters = () => {
    counters.forEach((counter) => {
      let current = 0;
      const increment = counter.target / 100;
      const timer = setInterval(() => {
        current += increment;
        if (current >= counter.target) {
          current = counter.target;
          clearInterval(timer);
        }
        setCounts(prev => ({
          ...prev,
          [counter.key]: Math.floor(current)
        }));
      }, 30);
    });
  };

  return (
    <div className="counter-area pt-30 pb-30" ref={counterRef}>
      <div className="container">
        <div className="row">
          {counters.map((counter, index) => (
            <div key={index} className="col-lg-3 col-sm-6">
              <div className="counter-box">
                <div className="icon">
                  <img src={counter.icon} alt="" />
                </div>
                <div>
                  <span className="counter">
                    {counts[counter.key]}
                  </span>
                  <h6 className="title">{counter.title}</h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CounterArea;
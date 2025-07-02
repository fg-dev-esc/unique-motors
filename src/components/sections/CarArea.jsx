import React, { useState } from 'react';

const CarArea = () => {
  const [favorites, setFavorites] = useState([]);

  const cars = [
    {
      id: 1,
      name: "Toyota Sports Car",
      image: "/assets/img/car/01.jpg",
      rating: 5.0,
      model: "2020",
      people: "4 People",
      fuel: "Hybrid",
      mileage: "10.15km / 1-litre",
      transmission: "Automatic",
      price: 390
    },
    {
      id: 2,
      name: "Bmw E46 Car",
      image: "/assets/img/car/02.jpg",
      rating: 5.0,
      model: "2020",
      people: "4 People",
      fuel: "Hybrid",
      mileage: "10.15km / 1-litre",
      transmission: "Automatic",
      price: 390
    },
    {
      id: 3,
      name: "Mercedes Benz Car",
      image: "/assets/img/car/03.jpg",
      rating: 5.0,
      model: "2020",
      people: "4 People",
      fuel: "Hybrid",
      mileage: "10.15km / 1-litre",
      transmission: "Automatic",
      price: 390
    },
    {
      id: 4,
      name: "Audi R8 Car",
      image: "/assets/img/car/04.jpg",
      rating: 5.0,
      model: "2020",
      people: "4 People",
      fuel: "Hybrid",
      mileage: "10.15km / 1-litre",
      transmission: "Automatic",
      price: 390
    },
    {
      id: 5,
      name: "Ferrari 458 Car",
      image: "/assets/img/car/05.jpg",
      rating: 5.0,
      model: "2020",
      people: "4 People",
      fuel: "Hybrid",
      mileage: "10.15km / 1-litre",
      transmission: "Automatic",
      price: 390
    },
    {
      id: 6,
      name: "Mercedes Suv Car",
      image: "/assets/img/car/06.jpg",
      rating: 5.0,
      model: "2020",
      people: "4 People",
      fuel: "Hybrid",
      mileage: "10.15km / 1-litre",
      transmission: "Automatic",
      price: 390
    }
  ];

  const toggleFavorite = (carId) => {
    setFavorites(prev => 
      prev.includes(carId) 
        ? prev.filter(id => id !== carId)
        : [...prev, carId]
    );
  };

  const handleRentNow = (car) => {
    console.log('Renting car:', car);
    // Aquí iría la lógica de renta
  };

  return (
    <div className="car-area bg py-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mx-auto">
            <div className="site-heading text-center">
              <span className="site-title-tagline">Cars</span>
              <h2 className="site-title">Featured <span>Cars</span></h2>
              <div className="heading-divider"></div>
            </div>
          </div>
        </div>
        <div className="row">
          {cars.map((car) => (
            <div key={car.id} className="col-lg-6 col-xl-4">
              <div className="car-item">
                <div className="car-img">
                  <img src={car.image} alt={car.name} />
                </div>
                <div className="car-content">
                  <div className="car-top">
                    <h4><span>{car.name}</span></h4>
                    <span><i className="fas fa-star"></i> {car.rating}</span>
                  </div>
                  <ul className="car-list">
                    <li><i className="far fa-car"></i>Model: {car.model}</li>
                    <li><i className="far fa-user-tie"></i>{car.people}</li>
                    <li><i className="far fa-gas-pump"></i>{car.fuel}</li>
                    <li><i className="far fa-road"></i>{car.mileage}</li>
                    <li><i className="far fa-steering-wheel"></i>{car.transmission}</li>
                  </ul>
                  <div className="car-footer">
                    <span className="car-price">${car.price} <sub>/ month</sub></span>
                    <button 
                      className={`car-favorite-btn ${favorites.includes(car.id) ? 'active' : ''}`}
                      onClick={() => toggleFavorite(car.id)}
                    >
                      <i className={favorites.includes(car.id) ? "fas fa-heart" : "far fa-heart"}></i>
                    </button>
                    <button 
                      className="theme-btn"
                      onClick={() => handleRentNow(car)}
                    >
                      Rent Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-4">
          <a href="#" className="theme-btn">Load More <i className="far fa-arrow-rotate-right"></i></a>
        </div>
      </div>
    </div>
  );
};

export default CarArea;
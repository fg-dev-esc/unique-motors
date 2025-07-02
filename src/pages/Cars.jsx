import React, { useState } from 'react';
import Breadcrumb from '../components/ui/Breadcrumb';
import CarSidebar from '../components/ui/CarSidebar';

const Cars = () => {
  const [favorites, setFavorites] = useState([]);
  const [sortBy, setSortBy] = useState('default');
  const [filters, setFilters] = useState({});

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
      price: 390,
      brand: "toyota"
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
      price: 390,
      brand: "bmw"
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
      price: 390,
      brand: "mercedes"
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
      price: 390,
      brand: "audi"
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
      price: 390,
      brand: "ferrari"
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
      price: 390,
      brand: "mercedes"
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
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  const handleFilterChange = (newFilters) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  };

  const sortOptions = [
    { value: 'default', label: 'Sort By Default' },
    { value: 'featured', label: 'Sort By Featured' },
    { value: 'latest', label: 'Sort By Latest' },
    { value: 'low-price', label: 'Sort By Low Price' },
    { value: 'high-price', label: 'Sort By High Price' }
  ];

  return (
    <>
      <Breadcrumb title="Cars" currentPage="Cars" />
      
      <div className="car-area py-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <CarSidebar onFilterChange={handleFilterChange} />
            </div>
            <div className="col-lg-9">
              <div className="col-md-12">
                <div className="car-sort">
                  <h5>Showing 1-6 of {cars.length} Results</h5>
                  <div className="car-sort-box">
                    <select 
                      className="form-select"
                      value={sortBy}
                      onChange={handleSortChange}
                    >
                      {sortOptions.map(option => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              <div className="row">
                {cars.map((car) => (
                  <div key={car.id} className="col-lg-6 col-xl-6">
                    <div className="car-item">
                      <div className="car-img">
                        <img src={car.image} alt={car.name} />
                      </div>
                      <div className="car-content">
                        <div className="car-top">
                          <h4><a href="#">{car.name}</a></h4>
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

              {/* Pagination */}
              <div className="pagination-area">
                <div aria-label="Page navigation example">
                  <ul className="pagination">
                    <li className="page-item">
                      <a className="page-link" href="#" aria-label="Previous">
                        <span aria-hidden="true"><i className="far fa-arrow-left"></i></span>
                      </a>
                    </li>
                    <li className="page-item active"><a className="page-link" href="#">1</a></li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item">
                      <a className="page-link" href="#" aria-label="Next">
                        <span aria-hidden="true"><i className="far fa-arrow-right"></i></span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cars;
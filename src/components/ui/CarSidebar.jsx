import React, { useState } from 'react';

const CarSidebar = ({ onFilterChange }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedTransmission, setSelectedTransmission] = useState([]);
  const [selectedFuel, setSelectedFuel] = useState([]);

  const brands = [
    { id: 'all', label: 'All Brands' },
    { id: 'bmw', label: 'BMW' },
    { id: 'toyota', label: 'Toyota', checked: true },
    { id: 'ferrari', label: 'Ferrari' },
    { id: 'audi', label: 'Audi', checked: true },
    { id: 'tesla', label: 'Tesla' },
    { id: 'mercedes', label: 'Mercedes' },
    { id: 'hyundai', label: 'Hyundai' }
  ];

  const transmissions = [
    { id: 'automatic', label: 'Automatic' },
    { id: 'manual', label: 'Manual', checked: true }
  ];

  const fuels = [
    { id: 'gas', label: 'Gas' },
    { id: 'hybrid', label: 'Hybrid', checked: true },
    { id: 'diesel', label: 'Diesel' },
    { id: 'electric', label: 'Electric' }
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    if (onFilterChange) {
      onFilterChange({ search: searchTerm });
    }
  };

  const handleBrandChange = (brandId) => {
    let newBrands;
    if (brandId === 'all') {
      newBrands = brands.some(b => b.checked) ? [] : brands.map(b => b.id);
    } else {
      newBrands = selectedBrands.includes(brandId)
        ? selectedBrands.filter(id => id !== brandId)
        : [...selectedBrands, brandId];
    }
    setSelectedBrands(newBrands);
    if (onFilterChange) {
      onFilterChange({ brands: newBrands });
    }
  };

  const handleTransmissionChange = (transmissionId) => {
    const newTransmissions = selectedTransmission.includes(transmissionId)
      ? selectedTransmission.filter(id => id !== transmissionId)
      : [...selectedTransmission, transmissionId];
    setSelectedTransmission(newTransmissions);
    if (onFilterChange) {
      onFilterChange({ transmission: newTransmissions });
    }
  };

  const handleFuelChange = (fuelId) => {
    const newFuels = selectedFuel.includes(fuelId)
      ? selectedFuel.filter(id => id !== fuelId)
      : [...selectedFuel, fuelId];
    setSelectedFuel(newFuels);
    if (onFilterChange) {
      onFilterChange({ fuel: newFuels });
    }
  };

  return (
    <div className="car-sidebar">
      <div className="car-widget">
        <div className="car-search-form">
          <h4 className="car-widget-title">Search</h4>
          <form onSubmit={handleSearch}>
            <div className="form-group">
              <input 
                type="text" 
                className="form-control" 
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button type="submit"><i className="far fa-search"></i></button>
            </div>
          </form>
        </div>
      </div>

      <div className="car-widget">
        <h4 className="car-widget-title">Brands</h4>
        <ul>
          {brands.map((brand) => (
            <li key={brand.id}>
              <div className="form-check">
                <input 
                  className="form-check-input" 
                  type="checkbox" 
                  id={`brand-${brand.id}`}
                  checked={brand.id === 'all' ? selectedBrands.length === 0 : selectedBrands.includes(brand.id)}
                  onChange={() => handleBrandChange(brand.id)}
                />
                <label className="form-check-label" htmlFor={`brand-${brand.id}`}>
                  {brand.label}
                </label>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="car-widget">
        <h4 className="car-widget-title">Transmission</h4>
        <ul>
          {transmissions.map((transmission) => (
            <li key={transmission.id}>
              <div className="form-check">
                <input 
                  className="form-check-input" 
                  type="checkbox" 
                  id={`trans-${transmission.id}`}
                  checked={selectedTransmission.includes(transmission.id)}
                  onChange={() => handleTransmissionChange(transmission.id)}
                />
                <label className="form-check-label" htmlFor={`trans-${transmission.id}`}>
                  {transmission.label}
                </label>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="car-widget">
        <h4 className="car-widget-title">Fuel</h4>
        <ul>
          {fuels.map((fuel) => (
            <li key={fuel.id}>
              <div className="form-check">
                <input 
                  className="form-check-input" 
                  type="checkbox" 
                  id={`fuel-${fuel.id}`}
                  checked={selectedFuel.includes(fuel.id)}
                  onChange={() => handleFuelChange(fuel.id)}
                />
                <label className="form-check-label" htmlFor={`fuel-${fuel.id}`}>
                  {fuel.label}
                </label>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CarSidebar;
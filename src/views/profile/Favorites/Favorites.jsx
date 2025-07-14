import React from 'react';

import ProfileLayout from '../ProfileLayout/ProfileLayout';

import { useFavorites } from './useFavorites';

const Favorites = () => {
  const { favoritesHelpers, favoritesData, favorites } = useFavorites();

  return (
    <ProfileLayout title={favoritesData.title}>
      <div className="user-profile-card">
        <div className="user-profile-card-title">
          <h4>{favoritesData.cardTitle}</h4>
        </div>
        <div className="row align-items-center">
          {favorites.map(car => (
            <div key={car.id} className="col-lg-6 col-xl-4">
              <div className="car-item wow fadeInUp" data-wow-delay=".25s">
                <div className="car-img">
                  <img src={favoritesHelpers.getCarImage(car)} alt={favoritesHelpers.getCarName(car)} />
                  <div className="car-btns">
                    <a href="#" className="car-btn">
                      <i className="far fa-eye"></i>
                    </a>
                    <button 
                      type="button"
                      className="car-btn"
                      onClick={() => favoritesHelpers.handleRemoveFavorite(car.id)}
                    >
                      <i className="far fa-heart"></i>
                    </button>
                  </div>
                </div>
                <div className="car-content">
                  <div className="car-top d-flex align-items-center justify-content-between mb-3">
                    <h4 className="mb-0">
                      <a href="#" className="text-decoration-none">
                        {favoritesHelpers.getCarName(car)}
                      </a>
                    </h4>
                    <span className="car-likes d-flex align-items-center">
                      <i className="fas fa-heart text-primary me-1"></i> 
                      {car.likes || '0'}
                    </span>
                  </div>
                  <ul className="car-list">
                    <li><i className="far fa-car"></i>{favoritesData.labels.model}: {car.model}</li>
                    <li><i className="far fa-user-tie"></i>{car.people}</li>
                    <li><i className="far fa-gas-pump"></i>{car.fuel}</li>
                    <li><i className="far fa-road"></i>{car.consumption}</li>
                    <li><i className="far fa-steering-wheel"></i>{car.transmission}</li>
                  </ul>
                  <div className="car-footer d-flex align-items-center justify-content-between">
                    <div className="car-price-section">
                      <span className="car-price">
                        {favoritesHelpers.formatPrice(car.price)} <sub>/{car.period}</sub>
                      </span>
                    </div>
                    <div className="car-actions">
                      <a href="#" className="theme-btn btn btn-primary btn-sm">
                        {favoritesData.labels.bookNow} <i className="fas fa-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {favoritesHelpers.hasNoFavorites() && (
          <div className="text-center py-5">
            <i className="far fa-heart fa-3x text-muted mb-3"></i>
            <h5 className="text-muted">{favoritesData.emptyState.title}</h5>
            <p className="text-muted">{favoritesData.emptyState.description}</p>
            <a href={favoritesData.emptyState.buttonLink} className="theme-btn">
              {favoritesData.emptyState.buttonText}
            </a>
          </div>
        )}
      </div>
    </ProfileLayout>
  );
};

export default Favorites;
import React from 'react';
import { Link } from 'react-router-dom';

import BiddingInterface from './BiddingInterface/BiddingInterface';
import { useCarInfo } from './useCarInfo';
import { useBiddingHistory } from '../BiddingHistory/useBiddingHistory';
const CarInfo = ({ hasDeposit = false }) => {
  const {
    data,
    car,
    loading,
    error,
    isAuthenticated,
    formatPrice,
    timeLeft,
    isActive,
    carTerms,
    isAuctionActive
  } = useCarInfo();

  // Get real bidding data for current bid display
  const { auctionDetails, loading: biddingLoading } = useBiddingHistory(car?.montoSalida || car?.precio || 0, isActive, car);

  if (loading || !car) return null;
  if (error) return null;

  return (
    <div className="col-lg-4">
      <div className="car-single-info h-100 d-flex flex-column">
        {/* Header Section - Fixed at top */}
        <div className="car-single-header flex-shrink-0 mb-4">
          <h3 className="car-single-title mb-3">{car.nombre}</h3>
          
          <div className="car-single-rating mb-3">
            <div className="rating-stars">
              <i className="fas fa-star text-warning"></i>
              <i className="fas fa-star text-warning"></i>
              <i className="fas fa-star text-warning"></i>
              <i className="fas fa-star-half-alt text-warning"></i>
              <i className="far fa-star text-warning"></i>
              <span className="rating-count ms-2 text-muted">({data.labels.customerReviews})</span>
            </div>
          </div>

          {/* auction status */}
          <div className="car-single-auction-status mb-3">
            {isActive ? (
              <span className="badge bg-success px-3 py-2">
                <i className="far fa-clock me-2"></i>
                {data.labels.activeAuction}
              </span>
            ) : (
              <span className="badge bg-danger px-3 py-2">
                <i className="far fa-clock me-2"></i>
                {data.labels.auctionEnded}
              </span>
            )}
          </div>

          {/* Price Section */}
          <div className="car-single-price-section mb-4">
            <div className="current-price text-center">
              <div className="car-price fs-3 fw-bold text-primary mb-1">
                {biddingLoading ? formatPrice(car.montoSalida || car.precio || 0) : formatPrice(auctionDetails.currentBid || car.montoSalida || car.precio || 0)}
              </div>
              <div className="price-label text-muted small">{data.labels.currentBid}</div>
              {isActive && (
                <div className="mt-3">
                  <a href="#pujar" className="btn btn-primary w-100">
                    <i className="fas fa-gavel me-2"></i>
                    {data.labels.bidNow}
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Main Content - Flexible height */}
        <div className="car-single-content flex-grow-1 d-flex flex-column">
          
          {/* Car Terms */}
          {carTerms.length > 0 && (
            <div className="car-single-terms mb-4">
              <h5 className="section-title mb-3">{data.labels.auctionTerms}</h5>
              <div className="terms-list">
                {carTerms.map((term, index) => (
                  <div key={index} className="term-item d-flex justify-content-between align-items-center p-2 mb-2 bg-light rounded">
                    <span className="term-label">{term.label}</span>
                    <span className="term-value fw-bold text-primary">{term.value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
          {/* Spacer to push content to bottom */}
          <div className="flex-grow-1"></div>
          
          {/* Bidding Interface - Only show if user is logged in */}
          {isAuthenticated && isActive && (
            <div className="car-single-bidding flex-shrink-0" id="pujar">
              <div className="bidding-section">
                <h5 className="section-title mb-3">
                  <i className="fas fa-gavel me-2"></i>
                  {data.labels.makeOffer}
                </h5>
                <BiddingInterface car={car} isActive={isActive} hasDeposit={hasDeposit} />
              </div>
            </div>
          )}
          
          {/* Show login message if user is not logged in */}
          {!isAuthenticated && isActive && (
            <div className="car-single-auth-message flex-shrink-0">
              <div className="alert alert-info border-0 shadow-sm">
                <div className="d-flex align-items-start">
                  <i className="fas fa-info-circle me-3 mt-1 text-info"></i>
                  <div className="flex-grow-1">
                    <h6 className="alert-heading mb-2">{data.labels.loginToParticipate}</h6>
                    <p className="mb-3 small">{data.labels.loginMessage}</p>
                    <div className="d-flex gap-2">
                      <Link to="/login" className="btn btn-primary btn-sm">
                        <i className="fas fa-sign-in-alt me-2"></i>
                        {data.labels.loginButton}
                      </Link>
                      <Link to="/register" className="btn btn-outline-primary btn-sm">
                        <i className="fas fa-user-plus me-2"></i>
                        {data.labels.registerButton}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default CarInfo;
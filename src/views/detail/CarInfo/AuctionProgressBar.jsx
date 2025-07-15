import React from 'react';
import { useAuctionProgressBar } from './useAuctionProgressBar';

const AuctionProgressBar = ({ fechaFin }) => {
  const { 
    percentage, 
    getProgressColor, 
    getProgressText, 
    isActive,
    shouldShow
  } = useAuctionProgressBar(fechaFin);

  if (!shouldShow) return null;

  return (
    <div className="auction-progress-bar mb-3">
      <div className="d-flex justify-content-between align-items-center mb-2">
        <small className="text-muted">Tiempo de subasta</small>
        <small className={`fw-bold ${isActive ? 'text-primary' : 'text-danger'}`}>
          {getProgressText()}
        </small>
      </div>
      <div className="progress" style={{ height: '8px' }}>
        <div 
          className={`progress-bar ${getProgressColor()} progress-bar-striped`}
          role="progressbar"
          style={{ 
            width: `${percentage}%`,
            transition: 'width 1s ease-in-out'
          }}
          aria-valuenow={percentage}
          aria-valuemin="0"
          aria-valuemax="100"
        >
        </div>
      </div>
      {!isActive && (
        <div className="text-center mt-2">
          <small className="text-danger">
            <i className="fas fa-exclamation-triangle me-1"></i>
            Subasta finalizada
          </small>
        </div>
      )}
    </div>
  );
};

export default AuctionProgressBar;
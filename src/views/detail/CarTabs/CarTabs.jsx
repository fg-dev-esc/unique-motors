import React from 'react';
import { Link } from 'react-router-dom';

import { useCarTabs } from './useCarTabs';
import BiddingHistory from '../BiddingHistory/BiddingHistory';
import CarComments from '../CarComments/CarComments';
const CarTabs = () => {
  const {
    data,
    car,
    loading,
    error,
    activeTab,
    setActiveTab,
    isAuthenticated,
    formatPrice,
    timeLeft,
    isActive,
    getColumnSpecs,
    calculateMinimumBid
  } = useCarTabs();

  if (loading || !car) return null;
  if (error) return null;

  return (
    <div className="container">
      <div className="car-single-details pt-50">
        <nav>
          <div className="nav nav-tabs" id="nav-tab" role="tablist">
            <button 
              className={`nav-link ${activeTab === 'description' ? 'active' : ''}`}
              id="nav-tab1" 
              onClick={() => setActiveTab('description')}
              type="button" 
              role="tab" 
              aria-controls="tab1" 
              aria-selected={activeTab === 'description'}
            >
              <i className="fas fa-file-text me-2"></i>
              {data.tabs.description}
            </button>
            <button 
              className={`nav-link ${activeTab === 'additional' ? 'active' : ''}`}
              id="nav-tab2" 
              onClick={() => setActiveTab('additional')}
              type="button" 
              role="tab" 
              aria-controls="tab2" 
              aria-selected={activeTab === 'additional'}
            >
              <i className="fas fa-info-circle me-2"></i>
              {data.tabs.additionalInfo}
            </button>
            <button 
              className={`nav-link ${activeTab === 'bidHistory' ? 'active' : ''}`}
              id="nav-tab3" 
              onClick={() => setActiveTab('bidHistory')}
              type="button" 
              role="tab" 
              aria-controls="tab3" 
              aria-selected={activeTab === 'bidHistory'}
            >
              <i className="fas fa-gavel me-2"></i>
              {data.tabs.bidHistory}
            </button>
            <button 
              className={`nav-link ${activeTab === 'reviews' ? 'active' : ''}`}
              id="nav-tab4" 
              onClick={() => setActiveTab('reviews')}
              type="button" 
              role="tab" 
              aria-controls="tab4" 
              aria-selected={activeTab === 'reviews'}
            >
              <i className="fas fa-comments me-2"></i>
              {data.tabs.comments}
            </button>
          </div>
        </nav>
        
        <div className="tab-content" id="nav-tabContent">
          {/* Description Tab */}
          {activeTab === 'description' && (
            <div className="tab-pane fade show active" id="tab1" role="tabpanel" aria-labelledby="nav-tab1">
              <div className="car-single-desc">
                {car.valores && car.valores.length > 0 ? (
                  <div className="row">
                    <div className="col-md-6">
                      <h5>{data.sections.vehicleSpecs}</h5>
                      <ul className="list-unstyled">
                        {getColumnSpecs(car.valores, 'left').map(spec => (
                          <li key={spec.campo} className="mb-2">
                            <strong>{spec.campo}:</strong> {spec.valor}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <h5>{data.sections.technicalFeatures}</h5>
                      <ul className="list-unstyled">
                        {getColumnSpecs(car.valores, 'right').map(spec => (
                          <li key={spec.campo} className="mb-2">
                            <strong>{spec.campo}:</strong> {spec.valor}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ) : (
                  <p>
                    {data.content.descriptionText}
                  </p>
                )}
              </div>
            </div>
          )}
          
          {/* Additional Info Tab */}
          {activeTab === 'additional' && (
            <div className="tab-pane fade show active" id="tab2" role="tabpanel" aria-labelledby="nav-tab2">
              <div className="car-single-additional-info">
                {/* Solo información textual del vehículo */}
                {car.descripcion && (
                  <div className="mb-4">
                    <h5>{data.sections.vehicleDescription}</h5>
                    <p>{car.descripcion}</p>
                  </div>
                )}
                
                {car.informacionAdicional && (
                  <div className="mb-4">
                    <h6>{data.sections.additionalInfo}</h6>
                    <p>{car.informacionAdicional}</p>
                  </div>
                )}
                
                {car.observaciones && (
                  <div className="mb-4">
                    <h6>{data.sections.observations}</h6>
                    <p>{car.observaciones}</p>
                  </div>
                )}
                
                {car.historialMantenimiento && (
                  <div className="mb-4">
                    <h6>{data.sections.maintenanceHistory}</h6>
                    <p>{car.historialMantenimiento}</p>
                  </div>
                )}
                
                {car.condicionesVenta && (
                  <div className="mb-4">
                    <h6>{data.sections.saleConditions}</h6>
                    <p>{car.condicionesVenta}</p>
                  </div>
                )}
                
                {car.garantia && (
                  <div className="mb-4">
                    <h6>{data.sections.warranty}</h6>
                    <p>{car.garantia}</p>
                  </div>
                )}

                {/* Si no hay información textual, mostrar mensaje */}
                {!car.descripcion && !car.informacionAdicional && !car.observaciones && 
                 !car.historialMantenimiento && !car.condicionesVenta && !car.garantia && (
                  <div className="text-center py-4">
                    <i className="fas fa-info-circle fs-1 text-muted mb-3"></i>
                    <p className="text-muted">{data.messages.noInfoAvailable}</p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Bidding History Tab */}
          {activeTab === 'bidHistory' && (
            <div className="tab-pane fade show active" id="tab3" role="tabpanel" aria-labelledby="nav-tab3">
              <BiddingHistory 
                carPrice={car.montoSalida || car.precio || 0} 
                isActive={isActive}
                car={car}
              />
            </div>
          )}

          {/* Comments Tab */}
          {activeTab === 'reviews' && (
            <div className="tab-pane fade show active" id="tab4" role="tabpanel" aria-labelledby="nav-tab4">
              <CarComments car={car} />
            </div>
          )}
          
        </div>
      </div>
    </div>
  );
};

export default CarTabs;
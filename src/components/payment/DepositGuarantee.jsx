import React, { useState } from 'react';
import PaymentForm from './PaymentForm';

const DepositGuarantee = ({ onDepositComplete }) => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(true);

  const handlePaymentSuccess = (paymentData) => {
    console.log('Payment successful:', paymentData);
    onDepositComplete && onDepositComplete(paymentData);
  };

  return (
    <div className="deposit-guarantee-container">
      <div className="alert alert-info mb-4">
        <div className="d-flex align-items-center">
          <i className="fas fa-shield-alt me-3 text-primary fs-4"></i>
          <div>
            <h5 className="mb-1">Subasta Segura</h5>
            <p className="mb-0">Para participar en las pujas, necesitas realizar un depósito de garantía.</p>
          </div>
        </div>
      </div>

      <div className="accordion" id="depositAccordion">
        <div className="accordion-item">
          <h2 className="accordion-header" id="depositHeading">
            <button
              className={`accordion-button ${isAccordionOpen ? '' : 'collapsed'}`}
              type="button"
              onClick={() => setIsAccordionOpen(!isAccordionOpen)}
              aria-expanded={isAccordionOpen}
              aria-controls="depositCollapse"
            >
              <i className="fas fa-credit-card me-2"></i>
              Primero haz tu depósito en garantía para acceder a la subasta
            </button>
          </h2>
          <div
            id="depositCollapse"
            className={`accordion-collapse collapse ${isAccordionOpen ? 'show' : ''}`}
            aria-labelledby="depositHeading"
            data-bs-parent="#depositAccordion"
          >
            <div className="accordion-body">
              <div className="row">
                <div className="col-md-8">
                  <h6 className="mb-3">Depósito de Garantía: $10,000 MXN</h6>
                  <p className="text-muted mb-4">
                    Este depósito garantiza tu participación seria en la subasta. 
                    Si no ganas, se te reembolsará automáticamente.
                  </p>
                  
                  <PaymentForm
                    amount={10000}
                    currency="MXN"
                    onSuccess={handlePaymentSuccess}
                    onError={(error) => console.error('Payment error:', error)}
                  />
                </div>
                <div className="col-md-4">
                  <div className="card border-primary h-100">
                    <div className="card-body text-center d-flex flex-column py-4">
                      <i className="fas fa-lock text-primary mb-4" style={{ fontSize: '2.5rem' }}></i>
                      <h5 className="card-title mb-3">Pago Seguro</h5>
                      <p className="card-text text-muted mb-4" style={{ lineHeight: '1.6' }}>
                        Procesamos tu pago con los más altos estándares de seguridad internacional
                      </p>
                      
                      <div className="flex-grow-1 d-flex flex-column justify-content-center">
                        <div className="mb-4">
                          <h6 className="text-muted mb-3">Métodos de pago aceptados</h6>
                          <div className="d-flex justify-content-center gap-3 mb-4">
                            <i className="fab fa-cc-visa text-primary" style={{ fontSize: '1.5rem' }}></i>
                            <i className="fab fa-cc-mastercard text-danger" style={{ fontSize: '1.5rem' }}></i>
                            <i className="fab fa-cc-paypal text-info" style={{ fontSize: '1.5rem' }}></i>
                          </div>
                        </div>
                        
                        <div className="mb-4">
                          <i className="fas fa-shield-alt text-success mb-3" style={{ fontSize: '2rem' }}></i>
                        </div>
                        
                        <div className="text-muted">
                          <div className="d-flex align-items-center justify-content-center mb-3">
                            <i className="fas fa-check-circle text-success me-2"></i>
                            <span>Transacción segura</span>
                          </div>
                          <div className="d-flex align-items-center justify-content-center mb-3">
                            <i className="fas fa-clock text-info me-2"></i>
                            <span>Procesamiento instantáneo</span>
                          </div>
                          <div className="d-flex align-items-center justify-content-center mb-3">
                            <i className="fas fa-headset text-warning me-2"></i>
                            <span>Soporte 24/7</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-auto pt-3 border-top">
                        <div className="text-muted">
                          <i className="fas fa-question-circle text-info me-2"></i>
                          <span>¿Tienes alguna duda? Contáctanos</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepositGuarantee;
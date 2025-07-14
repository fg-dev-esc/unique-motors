import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const PaymentForm = ({ amount, currency = 'MXN', onSuccess, onError }) => {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.userReducer);
  
  const [paymentData, setPaymentData] = useState({
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: '',
    useStoredCard: false,
    selectedStoredCard: ''
  });
  
  const [cardType, setCardType] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [storedCards, setStoredCards] = useState([]);
  const [showNewCardForm, setShowNewCardForm] = useState(true);

  // Mock stored cards - En producción vendría de la API
  useEffect(() => {
    if (user?.usuarioID) {
      // Simular carga de tarjetas guardadas
      setStoredCards([
        {
          id: '1',
          lastFour: '4242',
          brand: 'visa',
          expiryDate: '12/25'
        },
        {
          id: '2',
          lastFour: '5555',
          brand: 'mastercard',
          expiryDate: '03/26'
        }
      ]);
    }
  }, [user]);

  // Detectar tipo de tarjeta por número
  const detectCardType = (cardNumber) => {
    const number = cardNumber.replace(/\s/g, '');
    
    if (number.startsWith('4')) {
      return 'visa';
    } else if (number.startsWith('5') || (number.startsWith('2') && number.length >= 2 && number.substring(0, 2) >= '22' && number.substring(0, 2) <= '27')) {
      return 'mastercard';
    } else if (number.startsWith('3')) {
      return 'amex';
    }
    
    return '';
  };

  // Formatear número de tarjeta
  const formatCardNumber = (value) => {
    const number = value.replace(/\s/g, '');
    const formatted = number.replace(/(.{4})/g, '$1 ').trim();
    return formatted;
  };

  // Formatear fecha de expiración
  const formatExpiryDate = (value) => {
    const number = value.replace(/\D/g, '');
    if (number.length >= 2) {
      return `${number.substring(0, 2)}/${number.substring(2, 4)}`;
    }
    return number;
  };

  // Manejar cambios en los inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let formattedValue = value;

    if (name === 'cardNumber') {
      formattedValue = formatCardNumber(value);
      const type = detectCardType(value);
      setCardType(type);
    } else if (name === 'expiryDate') {
      formattedValue = formatExpiryDate(value);
    } else if (name === 'cvv') {
      formattedValue = value.replace(/\D/g, '').substring(0, 4);
    }

    setPaymentData(prev => ({
      ...prev,
      [name]: formattedValue
    }));
  };

  // Validar tarjeta
  const validateCard = () => {
    const { cardNumber, cardName, expiryDate, cvv } = paymentData;
    
    if (!cardNumber || cardNumber.replace(/\s/g, '').length < 13) {
      return 'Número de tarjeta inválido';
    }
    
    if (!cardName.trim()) {
      return 'Nombre del titular requerido';
    }
    
    if (!expiryDate || expiryDate.length !== 5) {
      return 'Fecha de expiración inválida';
    }
    
    if (!cvv || cvv.length < 3) {
      return 'CVV inválido';
    }
    
    return null;
  };

  // Procesar pago
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (paymentData.useStoredCard && !paymentData.selectedStoredCard) {
      onError && onError('Selecciona una tarjeta guardada');
      return;
    }
    
    if (!paymentData.useStoredCard) {
      const validationError = validateCard();
      if (validationError) {
        onError && onError(validationError);
        return;
      }
    }
    
    setIsProcessing(true);
    
    try {
      // Simular procesamiento de pago
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const paymentResult = {
        transactionId: Date.now().toString(),
        amount,
        currency,
        cardType: paymentData.useStoredCard ? 
          storedCards.find(card => card.id === paymentData.selectedStoredCard)?.brand : 
          cardType,
        lastFour: paymentData.useStoredCard ? 
          storedCards.find(card => card.id === paymentData.selectedStoredCard)?.lastFour : 
          paymentData.cardNumber.slice(-4),
        status: 'approved'
      };
      
      onSuccess && onSuccess(paymentResult);
    } catch (error) {
      onError && onError('Error procesando el pago');
    } finally {
      setIsProcessing(false);
    }
  };

  // Formatear monto
  const formatAmount = (amount) => {
    return new Intl.NumberFormat('es-MX', {
      style: 'currency',
      currency: 'MXN',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <div className="payment-form">
      <div className="mb-4">
        <div className="card bg-light">
          <div className="card-body text-center">
            <h5 className="card-title mb-1">Total a pagar</h5>
            <h3 className="text-primary mb-0">{formatAmount(amount)}</h3>
          </div>
        </div>
      </div>

      {/* Tarjetas guardadas */}
      {storedCards.length > 0 && (
        <div className="mb-4">
          <h6 className="mb-3">Tarjetas guardadas</h6>
          <div className="row g-2">
            {storedCards.map(card => (
              <div key={card.id} className="col-md-6">
                <div 
                  className={`card cursor-pointer ${paymentData.selectedStoredCard === card.id ? 'border-primary' : ''}`}
                  onClick={() => {
                    setPaymentData(prev => ({
                      ...prev,
                      useStoredCard: true,
                      selectedStoredCard: card.id
                    }));
                    setShowNewCardForm(false);
                  }}
                >
                  <div className="card-body py-2">
                    <div className="d-flex align-items-center">
                      <i className={`fab fa-cc-${card.brand} me-2 ${card.brand === 'visa' ? 'text-primary' : 'text-danger'}`}></i>
                      <span>**** **** **** {card.lastFour}</span>
                      <span className="ms-auto small text-muted">{card.expiryDate}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-3">
            <button
              type="button"
              className="btn btn-outline-primary btn-sm"
              onClick={() => {
                setShowNewCardForm(true);
                setPaymentData(prev => ({
                  ...prev,
                  useStoredCard: false,
                  selectedStoredCard: ''
                }));
              }}
            >
              <i className="fas fa-plus me-1"></i>
              Usar nueva tarjeta
            </button>
          </div>
        </div>
      )}

      {/* Formulario de nueva tarjeta */}
      {showNewCardForm && (
        <form onSubmit={handleSubmit}>
          <div className="row g-3">
            <div className="col-12">
              <label className="form-label">Número de tarjeta</label>
              <div className="input-group">
                <input
                  type="text"
                  name="cardNumber"
                  className="form-control"
                  placeholder="1234 5678 9012 3456"
                  value={paymentData.cardNumber}
                  onChange={handleInputChange}
                  maxLength="19"
                  required
                />
                <span className="input-group-text">
                  {cardType === 'visa' && <i className="fab fa-cc-visa text-primary"></i>}
                  {cardType === 'mastercard' && <i className="fab fa-cc-mastercard text-danger"></i>}
                  {cardType === 'amex' && <i className="fab fa-cc-amex text-success"></i>}
                  {!cardType && <i className="fas fa-credit-card text-muted"></i>}
                </span>
              </div>
            </div>

            <div className="col-12">
              <label className="form-label">Nombre del titular</label>
              <input
                type="text"
                name="cardName"
                className="form-control"
                placeholder="Juan Pérez"
                value={paymentData.cardName}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="col-6">
              <label className="form-label">Fecha de expiración</label>
              <input
                type="text"
                name="expiryDate"
                className="form-control"
                placeholder="MM/AA"
                value={paymentData.expiryDate}
                onChange={handleInputChange}
                maxLength="5"
                required
              />
            </div>

            <div className="col-6">
              <label className="form-label">CVV</label>
              <input
                type="text"
                name="cvv"
                className="form-control"
                placeholder="123"
                value={paymentData.cvv}
                onChange={handleInputChange}
                maxLength="4"
                required
              />
            </div>
          </div>

          <div className="mt-4">
            <button
              type="submit"
              className="btn btn-primary btn-lg w-100"
              disabled={isProcessing}
            >
              {isProcessing ? (
                <>
                  <div className="spinner-border spinner-border-sm me-2" role="status">
                    <span className="visually-hidden">Procesando...</span>
                  </div>
                  Procesando pago...
                </>
              ) : (
                <>
                  <i className="fas fa-shield-alt me-2"></i>
                  Realizar depósito de {formatAmount(amount)}
                </>
              )}
            </button>
          </div>
        </form>
      )}

      {/* Botón para tarjetas guardadas */}
      {!showNewCardForm && paymentData.selectedStoredCard && (
        <div className="mt-4">
          <button
            type="button"
            className="btn btn-primary btn-lg w-100"
            onClick={handleSubmit}
            disabled={isProcessing}
          >
            {isProcessing ? (
              <>
                <div className="spinner-border spinner-border-sm me-2" role="status">
                  <span className="visually-hidden">Procesando...</span>
                </div>
                Procesando pago...
              </>
            ) : (
              <>
                <i className="fas fa-shield-alt me-2"></i>
                Realizar depósito de {formatAmount(amount)}
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );
};

export default PaymentForm;
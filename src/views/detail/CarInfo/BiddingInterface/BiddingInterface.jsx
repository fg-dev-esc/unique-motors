import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startOferta } from '../../../../redux/features/auction/thunks';
import { useBiddingInterface } from './useBiddingInterface';
import DepositGuarantee from '../../../../components/payment/DepositGuarantee';

const BiddingInterface = ({ car, isActive, hasDeposit: propHasDeposit = false, currentPrice = 0 }) => {
  const dispatch = useDispatch();
  const { subastaTorre } = useSelector(state => state.auctionReducer);
  
  // Calculate minimum bid upfront - usar precio actual mostrado en pantalla
  const currentBid = currentPrice;
  const minimumBid = currentBid + 10000;
  
  const [bidAmount, setBidAmount] = useState(minimumBid); // Oferta acumulada
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [hasDeposit, setHasDeposit] = useState(propHasDeposit); // Estado del depósito
  
  // Update hasDeposit when prop changes
  React.useEffect(() => {
    setHasDeposit(propHasDeposit);
  }, [propHasDeposit]);
  
  // Hook data
  const { data } = useBiddingInterface();
  
  // Redux state
  const { user } = useSelector(state => state.userReducer);
  
  // Format currency
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('es-MX', {
      style: 'currency',
      currency: 'MXN',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };
  
  // Handle deposit completion
  const handleDepositComplete = (paymentData) => {
    setHasDeposit(true);
  };

  // Handle add increment buttons  
  const handleAddIncrement = (increment) => {
    if (!isActive) return;
    
    setBidAmount(bidAmount + increment);
    setError('');
  };
  
  // Handle submit final bid
  const handleSubmitBid = async () => {
    if (!isActive) return;
    
    const finalBidAmount = parseInt(bidAmount);
    
    // Validation
    if (!finalBidAmount || finalBidAmount <= 0) {
      setError(data.validation.invalidAmount);
      return;
    }
    
    if (finalBidAmount % 1000 !== 0) {
      setError(data.validation.invalidMultiple);
      return;
    }
    
    if (finalBidAmount < minimumBid) {
      setError(data.validation.belowCurrent.replace('{currentBid}', formatCurrency(minimumBid)));
      return;
    }
    
    await submitBid(finalBidAmount);
  };
  
  // Submit bid to API
  const submitBid = async (amount) => {
    if (!user?.usuarioID) {
      setError(data.validation.loginRequired);
      return;
    }
    
    setIsLoading(true);
    setError('');
    
    // Get correct torreID from URL
    const urlTorreID = window.location.pathname.split('/').pop();
    
    const bidData = {
      monto: amount,
      torreID: subastaTorre?.torreID || urlTorreID,
      usuarioPujaID: user.usuarioID,
      fecha: new Date().toISOString()
    };
    
    
    // Dispatch the same way as BiddingForm
    const result = await dispatch(startOferta(bidData));
    
    // If bid was successful, update the current bid amount for next bid
    if (result?.payload?.ok || result?.type?.includes('fulfilled')) {
      // Update bidAmount to be the new minimum (current bid + 10000)
      const newMinimum = amount + 10000;
      setBidAmount(newMinimum);
    } else {
      // If failed, reset to original minimum
      setBidAmount(minimumBid);
    }
    
    setError('');
    setIsLoading(false);
  };
  
  // Handle input change
  const handleInputChange = (e) => {
    setBidAmount(parseInt(e.target.value) || minimumBid);
    setError('');
  };
  
  // Handle Enter key press
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmitBid();
    }
  };
  
  if (!isActive) {
    return (
      <div className="bidding-interface-disabled">
        <div className="alert alert-warning">
          <i className="fas fa-exclamation-triangle me-2"></i>
          {data.ui.auctionEndedText}
        </div>
      </div>
    );
  }
  
  // Check if user is logged in and has deposit
  const userLoggedIn = user?.usuarioID;
  const needsDeposit = userLoggedIn && !hasDeposit;

  // Show deposit requirement if user is logged in but hasn't made deposit
  if (needsDeposit) {
    return (
      <div className="bidding-interface">
        <div className="alert alert-warning text-center">
          <i className="fas fa-shield-alt me-2"></i>
          Necesitas realizar el depósito de garantía para participar en la subasta
        </div>
      </div>
    );
  }

  return (
    <div className="bidding-interface">
      <div className="current-bid-info mb-3">
        <div className="d-flex justify-content-between align-items-center">
          <span className="text-muted">Tu oferta actual:</span>
          <span className="fw-bold text-success fs-5">
            {formatCurrency(bidAmount)}
          </span>
        </div>
      </div>
      
      {/* Three Quick Bid Buttons */}
      <div className="quick-bid-buttons mb-3">
        <div className="row g-2">
          <div className="col-4">
            <button
              type="button"
              className="btn btn-outline-primary btn-sm w-100"
              onClick={() => handleAddIncrement(10000)}
              disabled={isLoading}
              title={data.tooltips.add10k}
            >
              <i className="fas fa-plus me-1"></i>
              {formatCurrency(10000)}
            </button>
          </div>
          <div className="col-4">
            <button
              type="button"
              className="btn btn-outline-primary btn-sm w-100"
              onClick={() => handleAddIncrement(50000)}
              disabled={isLoading}
              title={data.tooltips.add50k}
            >
              <i className="fas fa-plus me-1"></i>
              {formatCurrency(50000)}
            </button>
          </div>
          <div className="col-4">
            <button
              type="button"
              className="btn btn-outline-primary btn-sm w-100"
              onClick={() => handleAddIncrement(100000)}
              disabled={isLoading}
              title={data.tooltips.add100k}
            >
              <i className="fas fa-plus me-1"></i>
              {formatCurrency(100000)}
            </button>
          </div>
        </div>
      </div>

      {/* Custom Bid Input */}
      <div className="custom-bid-section">
        <div className="row g-2">
          <div className="col-8">
            <div className="input-group">
              <span className="input-group-text">$</span>
              <input
                type="number"
                className="form-control"
                placeholder={data.placeholders.customBid}
                value={bidAmount}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
                min={minimumBid}
                step="1000"
                disabled={isLoading}
              />
            </div>
          </div>
          <div className="col-4">
            <button
              type="button"
              className="btn btn-primary w-100"
              onClick={handleSubmitBid}
              disabled={isLoading || !bidAmount}
            >
              {isLoading ? (
                <div className="loader-ripple me-1" style={{ transform: 'scale(0.3)' }}>
                  <div></div>
                  <div></div>
                </div>
              ) : (
                <i className="fas fa-gavel me-1"></i>
              )}
              {data.ui.bidButtonText}
            </button>
          </div>
        </div>
      </div>
      
      {/* Error Message */}
      {error && (
        <div className="alert alert-danger alert-sm mt-2 mb-0">
          <small>{error}</small>
        </div>
      )}
      
      <div className="bidding-instructions mt-3">
        <small className="text-muted">
        </small>
      </div>
    </div>
  );
};

export default BiddingInterface;
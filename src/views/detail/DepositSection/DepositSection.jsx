import React from 'react';
import DepositGuarantee from '../../../components/payment/DepositGuarantee';

const DepositSection = ({ onDepositComplete }) => {
  const handleDepositComplete = (paymentData) => {
    onDepositComplete && onDepositComplete(paymentData);
  };

  return (
    <div className="deposit-section py-5" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="container">
        <DepositGuarantee onDepositComplete={handleDepositComplete} />
      </div>
    </div>
  );
};

export default DepositSection;
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import CarImages from '../CarImages/CarImages';
import CarInfo from '../CarInfo/CarInfo';
import CarTabs from '../CarTabs/CarTabs';
import RelatedCars from '../RelatedCars/RelatedCars';
import Breadcrumb from '../../../components/ui/Breadcrumb';
import DepositSection from '../DepositSection/DepositSection';
import { useDetailSection } from './useDetailSection';

const DetailSection = () => {
  const { data, loading, error, shouldRender } = useDetailSection();
  const { user } = useSelector(state => state.userReducer);
  const [hasDeposit, setHasDeposit] = useState(false);

  const handleDepositComplete = (paymentData) => {
    setHasDeposit(true);
    console.log('Deposit completed:', paymentData);
  };

  // Check if user is logged in and needs deposit
  const userLoggedIn = user?.usuarioID;
  const needsDeposit = userLoggedIn && !hasDeposit;
  
  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '50vh' }}>
        <div className="loader-ripple">
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }
  
  if (error) {
    return (
      <div className="container">
        <div className="alert alert-danger text-center" role="alert">
          <i className="fas fa-exclamation-circle mb-2"></i>
          <h4>{data.messages.errorTitle}</h4>
          <p>{error}</p>
        </div>
      </div>
    );
  }
  
  if (!shouldRender) {
    return null;
  }
  
  return (
    <>
      {/* <Breadcrumb 
        title={data.breadcrumb.title} 
        currentPage={data.breadcrumb.currentPage}
      /> */}
      
      {/* car single */}
      <div className="car-item-single py-120">
        <div className="container">
          <div className="car-single-wrapper">
            <div className="row">
              <CarImages />
              <CarInfo hasDeposit={hasDeposit} />
            </div>
          </div>
        </div>
      </div>
      
      {/* Show deposit section if user needs to make deposit */}
      {needsDeposit && (
        <DepositSection onDepositComplete={handleDepositComplete} />
      )}
      
      <CarTabs />
      <RelatedCars />
    </>
  );
};

export default DetailSection;
import React, { useState, useEffect } from 'react';

const FindCarForm = () => {
  const [formData, setFormData] = useState({
    car: '',
    pickupLocation: '',
    dropoffLocation: '',
    pickupDate: '',
    pickupTime: '',
    dropoffDate: '',
    dropoffTime: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // aquí iría la lógica de búsqueda
  };

  useEffect(() => {
    if (window.$ && window.$.fn.datepicker) {
      window.$('.date-picker').datepicker({
        dateFormat: 'mm/dd/yy'
      });
    }
    
    if (window.$ && window.$.fn.timepicker) {
      window.$('.time-picker').timepicker({
        timeFormat: 'HH:mm',
        interval: 15,
        minTime: '06:00',
        maxTime: '23:00',
        defaultTime: '09:00',
        startTime: '06:00',
        dynamic: false,
        dropdown: true,
        scrollbar: true
      });
    }
  }, []);

  return (
    <div className="find-car">
      <div className="container">
        <div className="find-car-form">
          <h4 className="find-car-title">Let's Find Your Perfect Car</h4>
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-lg-4">
                <div className="form-group">
                  <label>Your Perfect Car</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Type Car, Model, Brand"
                    name="car"
                    value={formData.car}
                    onChange={handleInputChange}
                  />
                  <i className="far fa-car"></i>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="form-group">
                  <label>Pick Up Location</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Type City, Airport, Station"
                    name="pickupLocation"
                    value={formData.pickupLocation}
                    onChange={handleInputChange}
                  />
                  <i className="far fa-location-dot"></i>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="form-group">
                  <label>Drop Off Location</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Type City, Airport, Station"
                    name="dropoffLocation"
                    value={formData.dropoffLocation}
                    onChange={handleInputChange}
                  />
                  <i className="far fa-location-dot"></i>
                </div>
              </div>
              <div className="col-lg-2">
                <div className="form-group">
                  <label>Pick Up Date</label>
                  <input 
                    type="text" 
                    className="form-control date-picker" 
                    placeholder="MM/DD/YY"
                    name="pickupDate"
                    value={formData.pickupDate}
                    onChange={handleInputChange}
                  />
                  <i className="far fa-calendar-days"></i>
                </div>
              </div>
              <div className="col-lg-2">
                <div className="form-group">
                  <label>Pick Up Time</label>
                  <input 
                    type="text" 
                    className="form-control time-picker" 
                    placeholder="00:00 AM"
                    name="pickupTime"
                    value={formData.pickupTime}
                    onChange={handleInputChange}
                  />
                  <i className="far fa-clock"></i>
                </div>
              </div>
              <div className="col-lg-2">
                <div className="form-group">
                  <label>Drop Off Date</label>
                  <input 
                    type="text" 
                    className="form-control date-picker" 
                    placeholder="MM/DD/YY"
                    name="dropoffDate"
                    value={formData.dropoffDate}
                    onChange={handleInputChange}
                  />
                  <i className="far fa-calendar-days"></i>
                </div>
              </div>
              <div className="col-lg-2">
                <div className="form-group">
                  <label>Drop Off Time</label>
                  <input 
                    type="text" 
                    className="form-control time-picker" 
                    placeholder="00:00 AM"
                    name="dropoffTime"
                    value={formData.dropoffTime}
                    onChange={handleInputChange}
                  />
                  <i className="far fa-clock"></i>
                </div>
              </div>
              <div className="col-lg-4 align-self-end">
                <button className="theme-btn" type="submit">
                  Find Your Car <i className="far fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FindCarForm;
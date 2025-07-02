import React, { useState } from 'react';
import Breadcrumb from '../components/ui/Breadcrumb';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const contactInfo = [
    {
      icon: "fal fa-map-marker-alt",
      title: "Office Address",
      content: "25/B Milford, New York, USA"
    },
    {
      icon: "fal fa-phone",
      title: "Call Us",
      content: "+2 123 4565 789"
    },
    {
      icon: "fal fa-envelope",
      title: "Email Us",
      content: "info@example.com"
    },
    {
      icon: "fal fa-clock",
      title: "Open Time",
      content: "Mon - Sat (10.00AM - 05.30PM)"
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      // Aquí iría la lógica real de envío del formulario
      // Por ahora simulamos el envío
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitMessage('Thank you! Your message has been sent successfully.');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      setSubmitMessage('Sorry, there was an error sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Breadcrumb title="Contact Us" currentPage="Contact Us" />
      
      <div className="contact-area py-120">
        <div className="container">
          <div className="contact-content">
            <div className="row">
              {contactInfo.map((info, index) => (
                <div key={index} className="col-md-3">
                  <div className="contact-info">
                    <div className="contact-info-icon">
                      <i className={info.icon}></i>
                    </div>
                    <div className="contact-info-content">
                      <h5>{info.title}</h5>
                      <p>{info.content}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="contact-wrapper">
            <div className="row">
              <div className="col-lg-6 align-self-center">
                <div className="contact-img">
                  <img src="/assets/img/contact/01.jpg" alt="Contact" />
                </div>
              </div>
              <div className="col-lg-6 align-self-center">
                <div className="contact-form">
                  <div className="contact-form-header">
                    <h2>Get In Touch</h2>
                    <p>
                      It is a long established fact that a reader will be distracted by the readable
                      content of a page randomised words which don't look even slightly when looking at its layout.
                    </p>
                  </div>
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <input 
                            type="text" 
                            className="form-control" 
                            name="name"
                            placeholder="Your Name" 
                            value={formData.name}
                            onChange={handleInputChange}
                            required 
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input 
                            type="email" 
                            className="form-control" 
                            name="email"
                            placeholder="Your Email" 
                            value={formData.email}
                            onChange={handleInputChange}
                            required 
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <input 
                        type="text" 
                        className="form-control" 
                        name="subject"
                        placeholder="Your Subject" 
                        value={formData.subject}
                        onChange={handleInputChange}
                        required 
                      />
                    </div>
                    <div className="form-group">
                      <textarea 
                        name="message" 
                        cols="30" 
                        rows="5" 
                        className="form-control"
                        placeholder="Write Your Message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <button 
                      type="submit" 
                      className="theme-btn"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'} 
                      <i className="far fa-paper-plane"></i>
                    </button>
                    <div className="col-md-12 mt-3">
                      <div className={`form-messege ${submitMessage.includes('Thank you') ? 'text-success' : 'text-danger'}`}>
                        {submitMessage}
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map */}
      <div className="contact-map">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96708.34194156103!2d-74.03927096447748!3d40.759040329405195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4a01c8df6fb3cb8!2sSolomon%20R.%20Guggenheim%20Museum!5e0!3m2!1sen!2sbd!4v1619410634508!5m2!1sen!2s"
          style={{ border: 0, width: '100%', height: '400px' }} 
          allowFullScreen="" 
          loading="lazy"
          title="Contact Location Map"
        />
      </div>
    </>
  );
};

export default Contact;
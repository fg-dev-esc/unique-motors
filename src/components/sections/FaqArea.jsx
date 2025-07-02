import React, { useState } from 'react';

const FaqArea = () => {
  const [activeAccordion, setActiveAccordion] = useState(0);

  const faqs = [
    {
      id: 0,
      question: "How Long Does A Car Rent Take ?",
      answer: "We denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire. Ante odio dignissim quam, vitae pulvinar turpis erat ac elit eu orci id odio facilisis pharetra."
    },
    {
      id: 1,
      question: "How Can I Become A Member ?",
      answer: "We denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire. Ante odio dignissim quam, vitae pulvinar turpis erat ac elit eu orci id odio facilisis pharetra."
    },
    {
      id: 2,
      question: "What Payment Gateway You Support ?",
      answer: "We denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire. Ante odio dignissim quam, vitae pulvinar turpis erat ac elit eu orci id odio facilisis pharetra."
    },
    {
      id: 3,
      question: "How Can I Cancel My Request ?",
      answer: "We denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire. Ante odio dignissim quam, vitae pulvinar turpis erat ac elit eu orci id odio facilisis pharetra."
    }
  ];

  const toggleAccordion = (id) => {
    setActiveAccordion(activeAccordion === id ? null : id);
  };

  return (
    <div className="faq-area py-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="faq-right">
              <div className="site-heading mb-3">
                <span className="site-title-tagline">Faq's</span>
                <h2 className="site-title my-3">General <span>frequently</span> asked questions</h2>
              </div>
              <p className="about-text">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by injected humour, or
                randomised words which don't look even.
              </p>
              <div className="faq-img mt-3">
                <img src="/assets/img/faq/01.jpg" alt="" />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="accordion" id="accordionExample">
              {faqs.map((faq) => (
                <div key={faq.id} className="accordion-item">
                  <h2 className="accordion-header">
                    <button 
                      className={`accordion-button ${activeAccordion === faq.id ? '' : 'collapsed'}`}
                      type="button" 
                      onClick={() => toggleAccordion(faq.id)}
                      aria-expanded={activeAccordion === faq.id}
                    >
                      <span><i className="far fa-question"></i></span> {faq.question}
                    </button>
                  </h2>
                  <div 
                    className={`accordion-collapse collapse ${activeAccordion === faq.id ? 'show' : ''}`}
                  >
                    <div className="accordion-body">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqArea;
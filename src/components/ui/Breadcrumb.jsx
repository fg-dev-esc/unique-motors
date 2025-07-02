import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumb = ({ title, currentPage }) => {
  return (
    <div className="site-breadcrumb" style={{ background: 'url(/assets/img/breadcrumb/01.jpg)' }}>
      <div className="container">
        <h2 className="breadcrumb-title">{title}</h2>
        <ul className="breadcrumb-menu">
          <li><Link to="/">Home</Link></li>
          <li className="active">{currentPage}</li>
        </ul>
      </div>
    </div>
  );
};

export default Breadcrumb;
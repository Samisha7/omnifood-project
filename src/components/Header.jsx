import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <a href="#">
        <img className="logo" alt="Omnifood logo" src="/img/omnifood-logo.png" />
      </a>
      <nav className="main-nav">
        <ul className="main-nav-list">
          <li><a className="main-nav-link" href="#how">How it works</a></li>
          <li><a className="main-nav-link" href="#meals">Meals</a></li>
          <li><a className="main-nav-link" href="#testimonials">Testimonials</a></li>
          <li><a className="main-nav-link" href="#pricing">Pricing</a></li>
          <li><a className="main-nav-link nav-cta" href="#cta">Try for free</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

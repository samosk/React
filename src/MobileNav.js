import React, { useState } from 'react';

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div id="nav-top">
        <button 
          className="hamburger"
          aria-label="öppna meny"
          onClick={toggleMenu}
          aria-expanded={isOpen}
        >
          &#9776;
        </button>
      </div>
      <div className={`nav-top ${isOpen ? 'nav-mobile-open' : ''}`}>
        <ul className="mobile-menu">
          <li><a href="#meny">Meny</a></li>
          <li><a href="#öppettider">Öppettider</a></li>
          <li><a href="#dagens">Dagens</a></li>
          <li><a href="#hitta-hit">Hitta hit</a></li>
          <li><a href="#om-oss">Om oss</a></li>
        </ul>
      </div>
    </>
  );
};

export default MobileNav;
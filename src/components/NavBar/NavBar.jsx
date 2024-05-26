import React, { useState, useEffect, useRef } from 'react';
import './NavBar.css';
import MainMenu from './MainMenu/MainMenu';

const NavBar = (props) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const overlayRef = useRef(null);

  const handleToggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const handleClickOutside = (event) => {
    if (overlayRef.current && !overlayRef.current.contains(event.target)) {
      setMenuVisible(false);
    }
  };

  useEffect(() => {
    if (menuVisible) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuVisible]);

  return (
    <nav>
      <div className="logo"></div>
      <div>
        <div className="rectangle"></div>
        <div
          onClick={handleToggleMenu}
          className={`hamburger-dropdown-menu ${menuVisible ? 'active' : ''}`}
        ></div>
        <div ref={overlayRef} className={`overlay-main-menu ${menuVisible ? 'active' : ''}`}>
          <div
            onClick={handleToggleMenu}
            className={`close-icon ${menuVisible ? 'active' : ''}`}
          ></div>
          <MainMenu {...props} menuVisible={menuVisible} />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

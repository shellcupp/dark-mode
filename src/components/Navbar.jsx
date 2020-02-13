  
import React, { useState } from 'react';
import useDarkMode from '../hooks/useDarkMode';

const Navbar = (key, initialValue) => {
  const [value, toggleMode] = useDarkMode('key', initialValue);
  
  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={value ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;

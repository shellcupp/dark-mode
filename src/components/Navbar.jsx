  
import React, { useState } from 'react';
import useDarkMode from '../hooks/useDarkMode';
//Replace the state hook with our hook, click the toggle, and watch the magic happen!!!
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

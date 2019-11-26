import React, { memo } from "react";

// component
import ToggleSwitch from "../ToggleSwitch";

// styles
import "./Navbar.sass";

const Navbar = memo(({ brandName, onThemeToggle }) => {
  
  return (
    <nav className="navbar">
      <p className="navbar-brand-name">{brandName}</p>
      <div className="navbar-toggle">
        <div className="label">Dark Theme</div>
        <ToggleSwitch onChange={e => onThemeToggle(e.target.checked)} />
      </div>
    </nav>
  );
});

export default Navbar;

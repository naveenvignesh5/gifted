import React, { memo, useState } from "react";

// component
import ToggleSwitch from "../ToggleSwitch";

// styles
import "./Navbar.sass";

const Navbar = memo(({ brandName, onThemeToggle }) => {
  const [darkThemed, updateDarkThemed] = useState(false);

  return (
    <nav className="navbar">
      <p className="navbar-brand-name">{brandName}</p>
      <div className="navbar-toggle">
        <div className="label">{darkThemed ? "Dark Theme" : "Light Theme"}</div>
        <ToggleSwitch
          onChange={e => {
            updateDarkThemed(e.target.checked);
            onThemeToggle(e.target.checked);
          }}
        />
      </div>
    </nav>
  );
});

export default Navbar;

import React from "react";

// styles
import "./Navbar.sass";

const Navbar = ({ brandName, isDarkTheme, children }) => (
  <nav className="navbar">
    <p className="navbar-brand-name">{brandName}</p>
    <div className="navbar-toggle">
      {children}
    </div>
  </nav>
);

export default Navbar;

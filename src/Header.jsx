import React from "react";
import Logo from "./Logo.png";


export default function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={Logo} alt="Logo" className="header__logo-img" />
      </div>
      <nav className="header__nav">
        <p className="header__nav-item">Mobile Phone</p>
        <p className="header__nav-item">Tablet</p>
        <p className="header__nav-item">Laptop</p>
      </nav>
    </header>
  );
}
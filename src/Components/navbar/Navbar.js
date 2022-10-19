import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import logo from "../../assets/logo.png";
import "./style.css";
const Navbar = () => {
  const [checked, setChecked] = useState(false);

  return (
    <div className="wrapper">
      <nav>
        <input
          type="checkbox"
          id="show-menu"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
        <label htmlFor="show-menu" className="menu-icon">
          <i className="fas fa-bars" id="bar"></i>
        </label>
        <div className="logo">
          <Link to="/" id="logo">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="content">
          <ul className="links" id="links">
            <li>
              <Link to="/about#about" className="desktop-link" id="about">
                About Us
              </Link>
              <input type="checkbox" id="show-about" />
              <label htmlFor="show-about">About Us</label>
              <ul>
                <li>
                  <Link to="/about#about" onClick={() => setChecked(false)}>
                    About US
                  </Link>
                </li>
                <li>
                  <Link to="/about#contact" onClick={() => setChecked(false)}>
                    Contact US
                  </Link>
                </li>
              </ul>
            </li>
            {/* Another Nav */}
            <li>
              <Link to="/trading" className="desktop-link" id="webtrade">
                Trading Platforms
              </Link>
              <input type="checkbox" id="show-platform" />
              <label htmlFor="show-platform">Trading Platforms</label>
              <ul>
                <li>
                  <Link to="/trading" onClick={() => setChecked(false)}>
                    Web Trader
                  </Link>
                </li>
                <li>
                  <Link to="/trading" onClick={() => setChecked(false)}>
                    Mobile Trader
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/accounts" className="desktop-link" id="accounts">
                Accounts
              </Link>
              <input type="checkbox" id="show-accounts" />
              <label htmlFor="show-accounts">Accounts</label>
              <ul>
                <li>
                  <Link to="/accounts" onClick={() => setChecked(false)}>
                    Account types
                  </Link>
                </li>

                <li>
                  <Link to="/accounts" onClick={() => setChecked(false)}>
                    Spreads
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/terms" className="desktop-link" id="tools">
                Resources
              </Link>
              <input type="checkbox" id="show-tools" />
              <label htmlFor="show-tools">Resources</label>
              <ul>
                <li>
                  <Link to="/privacy" onClick={() => setChecked(false)}>
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms" onClick={() => setChecked(false)}>
                    Terms and conditions
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <a href="/">
                <button className="header__oa-btn" id="open">
                  Open Account
                </button>
              </a>
              <a href="/">
                <button className="header__lg-btn" id="login">
                  Login
                </button>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

import React from "react";
import { Link } from "react-router-dom";

import "./Header.styles.css";
import logo from "../../assets/images/flight/logo-new.png";
import support from "../../assets/images/flight/support (1).png";
import direction from "../../assets/images/flight/direction.png";
import { phoneNum } from "../../utils/globalVars";

const Header = () => {
  return (
    <header className="cm-header-container">
      <div className="cm-page-center cm-flex-type-1">
        <div className="cm-header-logo">
          <Link to="/">
            <img src={logo} alt="Trian Fly" />
          </Link>
        </div>
        <div className="cm-header-op cm-flex-type-1">
          {/* <div className="cm-primary-menu">
            <ul className="cm-menu-ul cm-flex">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/">Flights</Link>
              </li> 
            </ul>
          </div> */}

          <div className="cm-sec-menu">
            <ul className="cm-menu-ul cm-flex-type-1">
              {/* <li className="cm-flex-type-2">
                <img src={direction} alt="Explore" />
                <span>Explore</span>
              </li> */}
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/packages">Packages</Link>
              </li>
              <li>
                <Link to="/about-us">About Us</Link>
              </li>
              <li>
                <Link to="/contact-us">Contact Us</Link>
              </li>
              <li className="cm-flex-type-2 cm-header-phone">
                {/* <img src={support} alt="Support" /> */}
                <i class="fa fa-headphones cm-white-col cm-flex-type-2" aria-hidden="true"></i>
                <span>
                  <a href={`tel:${phoneNum.label}`}>Support</a>
                </span>
              </li>
              <li className="cm-flex-type-2 cm-header-phone">
                <i className="fa-solid fa-phone cm-white-col cm-flex-type-2"></i>
                <a href={`tel:${phoneNum.label}`}>
                  {phoneNum.label}
                </a>
              </li>
            </ul>
          </div>
          <div className="cm-flex-type-2 cm-header-phone mobile-view">
              <i className="fa-solid fa-phone cm-sec-bg cm-white-col cm-flex-type-2"></i>
              <a href={`tel:${phoneNum.label}`}>
                {phoneNum.label}
              </a>
            </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

import React from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/images/flight/trian_fly_logo.png";
import { phoneNum } from "../../utils/globalVars";
import moment from "moment";
import { useNavigate } from "react-router-dom";


import "./Footer.styles.css";


const Footer = () => {


  const navigate = useNavigate();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handleExpClick = (origin, dest) => {
    navigate({
      pathname: "/flights",
      search: `?search_t=${moment().unix()}&tripType=one-way&dep_loc=${origin}&dest_loc=${dest}&dep_dt=${moment().format(
        "YYYY-MM-DD"
      )}&ret_dt=null&fl_cl=ECONOMY&adt=1&chd=0`,
    });
  };


  return (
    <footer className="cm-footer-container">
      <div className="cm-fixed-footer-cta cm-txt-center cm-white-bg box-shadow-2 cm-wt-600">
        <p>
          Save Instantly on Unpublished Deals - CALL NOW<br></br>{" "}
          <a href={`tel:${phoneNum.value}`} className="cm-white-col">
            <i className="fa-solid fa-phone"></i>
            {phoneNum.label}
          </a>
        </p>
      </div>
      <div className="cm-footer-top">
        <div className="cm-page-center cm-flex-type-2 cm-flex-align-fs">
          <div className="cm-footer-col cm-wd-33">
            <h3>Top Destinations</h3>
            <ul className="cm-menu-ul">
                <li>
                  <a href="#"  onClick={(e) => handleExpClick("NYC", "MIA")}>Miami</a>
                </li>
                <li>
                  <a href="#"  onClick={(e) => handleExpClick("SFO", "LON")}>San Francisco</a>
                </li>
                <li>
                  <a href="#"  onClick={(e) => handleExpClick("LON", "BER")}>London</a>
                </li>
                <li>
                  <a href="#"  onClick={(e) => handleExpClick("LHR", "TYO")}>Tokyo</a>
                </li>
                <li>
                  <a href="#"  onClick={(e) => handleExpClick("SFO", "LON")}>California</a>
                </li>
                <li>
                  <a href="#"  onClick={(e) => handleExpClick("LAS", "TYO")}>Las Vegas</a>

                </li>
              </ul>
            </div>
          <div className="cm-footer-col cm-wd-33">
            <h3>Terms</h3>
            <ul className="cm-menu-ul">
                <li>
                  <Link to="/about-us">About Us</Link>
                </li>
                <li>
                  <Link to="/contact-us">Contact Us</Link>
                </li>
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li><Link to="/terms-and-conditions">Terms & Conditions</Link></li>
              <li><Link to="/disclaimer">Disclaimer</Link></li>
              <li><Link to="/refund-policy">Refund Policy</Link></li>
            </ul>
          </div>
          
          <div className="cm-footer-col cm-wd-33 icon-align">
            <h3>Reach us at</h3>
            <ul className="cm-menu-ul">
              <li>
                <a href={`tel:${phoneNum.value}`}>
                  <i className="fa-solid fa-phone"></i>
                  <span>{phoneNum.label}</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@flighthubdeal.com">
                  <i className="fa-solid fa-envelope"></i>
               
                  <span>info@flighthubdeal.com</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-solid fa-location-dot"></i>
                  <address>25 Willis St 14 <br></br> Framingham, MA 01702, USA</address>
                </a>
              </li>
            </ul>
            <div className="card-box">
              <img src="/images/americn.png" alt="" />
              
              <img src="/images/master.png" alt="" />
              <img src="/images/discover.png" alt="" />
              <img src="/images/visa.png" alt="" />
              <img src="/images/paypal.png" alt="" />

            </div>
          </div>
        </div>
      </div>
      {/* <div className="cm-footer-bottom cm-white-col">
        <div className="cm-page-center cm-txt-center">
          <p>© 2022. All rights reserved.</p>
        </div>
      </div> */}
    </footer>
  );
};

export default Footer;

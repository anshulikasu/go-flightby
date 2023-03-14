import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import FlightSearchForm from "../../components/flight-search-form/FlightSearchForm.component";
import moment from "moment";

import "./Homepage.styles.css";
import { useNavigate } from "react-router-dom";
import girlImg from "../../assets/images/flight/girlImg.png";
import callIcon from "../../assets/images/about/green-icon.png";
import gcallIcon from "../../assets/images/about/res-call.png";
import { phoneNum } from "../../utils/globalVars";
import { useState, useEffect } from "react";

const HomePage = () => {
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

  const [showPopup, setPopup] = useState('active')

  function removePopup(){
    setPopup('')
  }

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  const offersettings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    centerMode: true,
    centerPadding: '100px',
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerPadding: '70px',
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          centerPadding: '50px',
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerPadding: '0px',
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  };


  // const [homepageStatus, setCloseHome] = React.useState(false);
  // var [count, setCount] = React.useState(0);
  // const handleToClick = () => {
  //   count = count + 1;
  //   if (count >= 10) {
  //     setCloseHome(true);
  //   document.body.classList.add('overflow');

  //   } else {
  //     setCount(count);
  //     window.location.href = 'tel:' + phoneNum.value;
  //   }
  // }
  // const handleTocall = () => {
  //   window.location.href = 'tel:' + phoneNum.value;
  // }
  return (
    <>
      {/* <div className={`Modal ${homepageStatus ? "pop-modal-mob" : ""}`} onClick={handleToClick}>
        <a href={`tel:${phoneNum.value}`} class="reservation-popup">
          <div class="reservation-inner">
              <div class="wrapper">
                  <div  class="call-number">
                      <strong><i class="fa fa-phone" aria-hidden="true"></i>{phoneNum.value}</strong>
                      <p>call for reservations</p>
                  </div>
                  <h3>Call for Reservations </h3>
                  <div class="call-btn"><span><i class="fa fa-phone" aria-hidden="true"></i></span>{phoneNum.value}</div>
                  <div class="call-img">
                      <img src={gcallIcon} alt=""/>
                  </div>
              </div>
              <div class="footer">
                  <h3>Call for Reservations</h3>
                  <div class="footer-btn">
                      <span><i class="fa fa-phone" aria-hidden="true"></i></span>
                      <div class="footer-inner">
                          <p>Get Our Best Deals</p>

                          <strong>{phoneNum.value}</strong>
                      </div>
                  </div>
              </div>
          </div>
      </a>
      </div >  */}
      <div className="home-banner">
      <div className="cm-homepage-banner-container cm-bg-prop cm-pos-relative">
        <div className="cm-page-center cm-flex cm-flex-wrap">
          
          <div className="cm-wd-50">
            <h1 className="cm-white-col">Let us bring your dream vacation to new heights.</h1>
            <p className="cm-white-col">From booking to managing, we are here to oblige & make your journey as smooth and enjoyable as possible. With our fully flexible rates, you can readily reserve, amend, or cancel any aspect of your trip in a matter of minutes! </p>
          </div>
          <div className="cm-wd-50">
            <FlightSearchForm />
          </div>
        </div>
      </div>

      <div className="service_section">
      <div className="cm-txt-center">
        <h2>OUR SERVICES</h2>
      </div>
        <div className="cm-flex">
            <div className="cm-wd-25">
               <div className="inner-col">
                <span><i class="fa fa-plane" aria-hidden="true"></i></span>
                <h3>Affordable Flight Bookings</h3>
                <p>Looking for a last-minute cheapest flight deal or the best return flights? To help you with the cheapest airfare, we consider low-cost air carriers you can do great savings on airline tickets.</p>
               </div>
            </div>
            <div className="cm-wd-25">
               <div className="inner-col">
                <span><i class="fa fa-ticket" aria-hidden="true"></i></span>
                <h3>Flight Change with Best Deals</h3>
                <p>Enjoy great savings on flight changes with the lowest airfares. By comparing flight rescheduling deals on hundreds of airline tickets, you can change your existing flight and get the price difference back into your account.</p>
               </div>
            </div>
            <div className="cm-wd-25">
               <div className="inner-col">
                <span><i class="fa fa-hospital-o" aria-hidden="true"></i></span>
                <h3>Flight Cancellation with Full Refund</h3>
                <p>Do you need to cancel your flight but are concerned about losing money? As per air carrier policies, you are entitled to get your money back regardless of the type and class of your airfare.</p>
               </div>
            </div>
            <div className="cm-wd-25">
               <div className="inner-col">
                <span><i class="fa fa-umbrella" aria-hidden="true"></i></span>
                <h3>Alter the Incorrect Name on The Ticket</h3>
                <p>It is viable to alter the misspelt name on your flight ticket already issued with the quick assistance of our travel representatives.</p>
               </div>
            </div>
        </div>
    </div>

      <div className="offer-section">
        <div className=" cm-page-center">
          <div className="offer-title">
            <h2>OUR BEST TOURS</h2>
          </div>
          <div className="offer-slider-row cm-flex cm-flex-wrap">
                  <div className="column cm-wd-33" onClick={(e) => handleExpClick("LHR", "JFK")}>
                      <div className="col-inner">
                          <a href="#" className="image-box">
                          <img src="./images/big-ben-clock-tower-london-england.png" alt="" />
                          </a>
                          <div className="offter-text">
                              <a href="#" className="title">A weekend in London</a>
                              <span><i class="fa fa-angle-right" aria-hidden="true"></i></span>
                          </div>
                      </div>
                  </div>
                  <div className="column cm-wd-33" onClick={(e) => handleExpClick("JFK", "LHR")}>
                      <div className="col-inner">
                          <a href="#" className="image-box">
                              <img src="./images/traditional-gondola-near-world-famous-canal-grande-rialto-bridge.png" alt="" />
                          </a>
                          <div className="offter-text">
                              <a href="#" className="title">Thrilling Italy</a>
                              <span><i class="fa fa-angle-right" aria-hidden="true"></i></span>
                          </div>
                      </div>
                  </div>
                  <div className="column cm-wd-33" onClick={(e) => handleExpClick("JAL", "LHR")}>
                      <div className="col-inner">
                          <a href="#" className="image-box">
                          <img src="./images/colosseum-rome-morning-sun-italy.png" alt="" />
                          </a>
                          <div className="offter-text">
                              <a href="#" className="title">Big in Spain</a>
                              <span><i class="fa fa-angle-right" aria-hidden="true"></i></span>
                          </div>
                      </div>
                  </div>
                  <div className="column cm-wd-33" onClick={(e) => handleExpClick("ATL", "LHR")}>
                      <div className="col-inner">
                          <a href="#" className="image-box">
                          <img src="./images/view-great-sphinx.png" alt="" />
                          </a>
                          <div className="offter-text">
                              <a href="#" className="title">Trip to Ancient Egypt</a>
                              <span><i class="fa fa-angle-right" aria-hidden="true"></i></span>
                          </div>
                      </div>
                  </div>
                  <div className="column cm-wd-33" onClick={(e) => handleExpClick("SYD", "LHR")}>
                      <div className="col-inner">
                          <a href="#" className="image-box">
                          <img src="./images/downtown-chicago-skyline-sunset-illinois-usa.png" alt="" />
                          </a>
                          <div className="offter-text">
                              <a href="#" className="title">Faraway Baston</a>
                              <span><i class="fa fa-angle-right" aria-hidden="true"></i></span>
                          </div>
                      </div>
                  </div>
                  <div className="column cm-wd-33" onClick={(e) => handleExpClick("BER", "LHR")}>
                      <div className="col-inner">
                          <a href="#" className="image-box">
                          <img src="./images/paris-eiffel-tower-skyline-aerial-france.png" alt="" />
                          </a>
                          <div className="offter-text">
                              <a href="#" className="title">Colorful Paris</a>
                              <span><i class="fa fa-angle-right" aria-hidden="true"></i></span>
                          </div>
                      </div>
                  </div>
            </div>
        </div>
    </div>

    

      <div className="cm-section review-section">
        <div className="cm-page-center">
          <h2 className="cm-txt-center">
            Customer Reviews
          </h2>

          <Slider {...settings} className="cm-home-guide-slider">
                <div className="cm-home-guide-slide">
                  <p>Flight Trip Charge created an incredible tour for my family and relatives employing pocket-friendly last-minute travel flights.</p>
                  {/* <strong>Customer Name</strong>   */}
                </div>
                <div className="cm-home-guide-slide">
                  <p>Wonderful time with you all! The service was really helpful in aiding me with all aspects of my flight change procedures.</p>
                  {/* <strong>Customer Name</strong> */}
                </div>
            </Slider>
        </div>
      </div>

    </div>
    </>
    
  );
};

export default HomePage;

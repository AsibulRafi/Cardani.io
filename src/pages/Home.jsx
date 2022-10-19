import React from "react";
import { Link } from "react-router-dom";
import heroIcon1 from "../assets/heroIcon1.png";
import heroIcon2 from "../assets/heroIcon2.png";
import heroIcon3 from "../assets/heroIcon3.png";
import api from "../assets/api.png";
import reviews from "../assets/reviews.png";
import hright from "../assets/hRight.png";
import hLeftt from "../assets/hLeft.png";
import Join from "../Components/Join";
const Home = () => {
  return (
    <>
      <section className="homeHero">
        <div className="homeHero__wrapper">
          <div className="homeHero__content">
            <div className="homeHero__content-info">
              <h2>
                Giving you easy access to Global Markets using a Trading
                Platform consistent with Market Dynamics.
              </h2>
              <p>
                Achieve your financial goals with our state of the art trading
                platform. Trade with confidence, knowing that your funds are
                safe and secure. Ability to trade in Cryptocurrencies, Stocks,
                Indices, Forex and Commodities. Start trading today!
              </p>
              <Link to="/" className="openAcc">
                Open Account
              </Link>
            </div>
          </div>
        </div>
      </section>
      <div className="hero__icon">
        <div className="hero__icon-single">
          <img src={heroIcon1} alt="heroIcon" />
          <h2>Cutting Edge FinTech</h2>
          <hr />
          <p>
            Cardani.io implements advanced technological innovations to deliver
            optimum trading experience
          </p>
        </div>
        <div className="hero__icon-single">
          <img src={heroIcon2} alt="heroIcon" />
          <h2>Best Customer Service</h2>
          <hr />
          <p>
            Cardani.io delivers a personalised service that clients expect and
            deserve.
          </p>
        </div>
        <div className="hero__icon-single">
          <img src={heroIcon3} alt="heroIcon" />
          <h2>Safety of Funds</h2>
          <hr />
          <p>Clients funds are kept in a segregated bank account.</p>
        </div>
      </div>
      <section className="realTime">
        <div className="realTime__wrapper">
          <div className="realTime__heading">
            <div className="realTime__heading-h2">
              <img src={hLeftt} alt="headingIcon" />
              <h2>
                Access to <span>Over 450</span>
                <br /> Real-Time Quotes
              </h2>
              <img src={hright} alt="headingIcon" />
            </div>
            <p>
              Trade with live buy and sell prices from your choice of platforms
            </p>
          </div>

          <div className="realTime__content">
            <div className="realTime__content-img">
              <img src={api} alt="apiImage" />
            </div>
          </div>
        </div>
      </section>
      <section className="info">
        <div className="info__wrapper">
          <div className="info__heading">
            <div className="info__heading-h2">
              <img src={hLeftt} alt="headingIcon" />
              <h2>Cardani.io</h2>
              <img src={hright} alt="headingIcon" />
            </div>
            <p>
              Easy, direct and engaging platforms that
              <br /> work seamlessly across all devices.
            </p>
          </div>
          <div className="info__content">
            <div className="info__content-info">
              <div className="info__content-info-single-1">
                <h2>
                  <b>650+</b>
                  <br />
                  thousand
                  <br /> Registrations
                </h2>
              </div>
              <div className="info__content-info-single-2">
                <h2>
                  <b>20+</b>
                  <br />
                  Million
                  <br /> Positions Opened
                </h2>
              </div>
              <div className="info__content-info-single-3">
                <h2>
                  <b>70+</b>
                  <br />
                  Billion
                  <br />
                  Trading Volume
                </h2>
              </div>
            </div>
            <div className="info__content-line">
              <div className="info__content-line-circle circle-1"></div>
              <div className="info__content-line-circle circle-2"></div>
              <div className="info__content-line-circle circle-3"></div>
              <hr />
            </div>
          </div>
        </div>
      </section>
      <Join />
      <section className="reviews">
        <div className="reviews__wrapper">
          <div className="reviews__heading">
            <img src={hLeftt} alt="headingIcon" />
            <h2>
              See what our clients
              <br /> are saying
            </h2>
            <img src={hright} alt="headingIcon" />
          </div>
          <div className="reviews__content">
            <div className="realTime__content-img">
              <img src={reviews} alt="reviews" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

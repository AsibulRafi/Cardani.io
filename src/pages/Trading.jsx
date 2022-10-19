import React from "react";
import hright from "../assets/hRight.png";
import hLeftt from "../assets/hLeft.png";
import webTraderImg1 from "../assets/webTraderImg1.png";
import webTraderImg2 from "../assets/webTraderImg2.png";
import { Link } from "react-router-dom";
import Join from "../Components/Join";
const Trading = () => {
  return (
    <>
      <section className="hero">
        <div className="hero__wrapper">
          <div className="hero__content">
            <h2>TRADING PLATFORMS</h2>
            <h4>
              Cardani.io's WebTrader offers a faster, cleAarer and smarter way
              to trade via your web browser
            </h4>
          </div>
        </div>
      </section>
      <section className="trading">
        <div className="trading__wrapper">
          <div className="trading__heading">
            <img src={hLeftt} alt="headingIcon" />
            <h2>Webtrader</h2>
            <img src={hright} alt="headingIcon" />
          </div>
          <div className="trading__content">
            <div className="trading__content-info">
              <div className="trading__content-info-text">
                <p>
                  Cardani.io highest purpose is to turn its clients into
                  successful traders and increase their success rates as much as
                  possible. For that purpose we give you the Cardani.io Online
                  trader, which enables you to be 100% involved in the trading
                  process and adjust according to the market conditions, all the
                  while letting you plan your trading activities to your
                  preference.
                </p>
                <p>
                  Utilize the full scope of the latest technological
                  developments in the field by trading from any internet
                  connectible device. Investing in Cardani.io Online Trader.
                </p>
                <Link to="/" className="openAcc">
                  Open Account
                </Link>
              </div>
              <div className="trading__content-info-img">
                <img src={webTraderImg1} alt="webImg" />
              </div>
            </div>
            <div className="trading__content-details">
              <div className="trading__content-details-img">
                <img src={webTraderImg2} alt="webImg" />
              </div>
              <div className="trading__content-details-text">
                <h2>
                  <span>Pros of the platform</span> <br />
                  include the following:
                </h2>
                <ul>
                  <li>3rd party bridging.</li>
                  <li>Availability of four pending orders</li>
                  <li>Buy Limit, Buy Stop, Sell Limit, Sell Stop.</li>
                  <li>0.01 lot sizes.</li>
                  <li>Partial closing and many others.</li>
                  <li>Instant STP.</li>
                  <li>Automated Trading.</li>
                  <li>Secure Application.</li>
                  <li>Advanced charts availability.</li>
                  <li>Slippage protection.</li>
                  <li>Have full control over your profile.</li>
                  <li>Perform in-depth market analysis.</li>
                  <li>Invest in a wide selection of assets.</li>
                  <li>Portfolio Management.</li>
                </ul>
              </div>
            </div>
            <div className="trading__content-text">
              <div className="trading__content-text-flex">
                <p>
                  Cardani.io grants you a gateway to all your trading needs with
                  the online and mobile trading applications. They are extremely
                  intuitive and functional, enabling you to start a trade
                  whenever you want, from anywhere in the world. In case you
                  already have a trading account you can start a trade
                  immediately.
                </p>
                <p>
                  The Cardani.io Online Trader present clients with the option
                  to choose from a number of languages, it features the latest
                  charts, fast operation of the trades, and best of all, it
                  makes everything easy. You have the ability to access to
                  trader from a number of different devices such as Apple or
                  Android phone, tablet or PC. The platform is easy to use on
                  every device and you can handle your investments with just a
                  few clicks.
                </p>
                <p>
                  Due to the intuitiveness and easiness of use, the Access
                  Markets Online trader will make sure that you are fully
                  informed about all trades that interest you. Stay
                  knowledgeable on the latest market news and trends, without
                  having to leave your couch.
                </p>
              </div>
              <div className="trading__content-text-flex">
                <p>
                  The financial market can be very volatile and the conditions
                  can change in a matter of minutes. Therefore, you need to be
                  able to react quickly in such cases. With the Cardani.io
                  Online Trader, you act accordingly and access your trades at
                  any moment. The advantage is in your hands.
                </p>
                <p>
                  With the hastened pace of modern life, you need to be
                  constantly on the go, but the platform lets you combine that
                  with your trading needs, without having to compromise. It`s
                  accessible from any browser, there is no need for you to be
                  stuck to any specific place. Be it in your office, or from a
                  friend`s PC, logging into your account and trading or just
                  checking something is quick and simple.
                </p>
                <p>Using Cardani.io to trade is like a walk in the park.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Join />
    </>
  );
};

export default Trading;

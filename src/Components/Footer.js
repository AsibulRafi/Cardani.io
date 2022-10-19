import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <div className="footer__links">
          <div className="footer__links-single">
            <h4>ABOUT US</h4>
            <ul className="footer__links-single-list">
              <li>
                <Link to="/about">About US</Link>
              </li>
              <li>
                <Link to="/about">Contact US</Link>
              </li>
            </ul>
          </div>
          <div className="footer__links-single">
            <h4>TRADING PLATFORMS</h4>
            <ul className="footer__links-single-list">
              <li>
                <Link to="/trading">Web Trader</Link>
              </li>
              <li>
                <Link to="/trading">Mobile Trader</Link>
              </li>
            </ul>
          </div>
          <div className="footer__links-single">
            <h4>ACCOUNTS</h4>
            <ul className="footer__links-single-list">
              <li>
                <Link to="/accounts">Account Types</Link>
              </li>
              <li>
                <Link to="/accounts">Spreads and Commissions</Link>
              </li>
            </ul>
          </div>
          <div className="footer__links-single">
            <h4>RECOURCES</h4>
            <ul className="footer__links-single-list">
              <li>
                <Link to="/privacy">Privacy policy</Link>
              </li>
              <li>
                <Link to="/terms">Terms & Conditions</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__info">
          <h4 className="footer__info-header">RISK WARNING</h4>
          <hr />
          <div className="footer__info-text">
            <p>
              Trading in Forex and CFDs carries a high level of risk and can
              result in the loss of part or all of your investment. Trading in
              Forex and CFDs may not be appropriate for all investors. You
              should be aware of all the risks associated with Forex and CFD
              trading and seek for independent advice. Past performance does not
              constitute a reliable indication of future results. Forecasts for
              the future do not constitute a reliable indicator of future
              performance. Copyright for the pages and for the screens
              displaying the pages, and for the information, material and their
              arrangement, is owned by Cardani.io LTD all rights reserved.
            </p>
            <p>
              This information is intended for investors outside the United
              States who are not US/Japanese citizens and residents. This
              website is intended for informational purposes only. This website
              is not directed at any jurisdiction and is not intended for any
              use that would be contrary to local law or regulation. The
              products described on this are not offered and may not be sold in
              the United States/Japan or to US/Japanese citizens and residents.
            </p>
          </div>
        </div>
        <div className="copyright">
          <p>© 2022 ALL right reserved Cardani.io</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

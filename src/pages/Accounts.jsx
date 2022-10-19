import React from "react";
import hright from "../assets/hRight.png";
import hLeftt from "../assets/hLeft.png";
import Join from "../Components/Join";
import { AiOutlineCheck } from "react-icons/ai";
import { Link } from "react-router-dom";
const Accounts = () => {
  return (
    <>
      <section className="hero">
        <div className="hero__wrapper">
          <div className="hero__content">
            <h2>Accounts</h2>
            <h4>
              Select from a range of accounts devised to deliver a more
              personalised service
            </h4>
          </div>
        </div>
      </section>
      <section className="accounts">
        <div className="accounts__heading">
          <div className="accounts__heading-h2">
            <img src={hLeftt} alt="headingIcon" />
            <h2>
              Choose the Account that best
              <br /> reflects your trading budget <br />
              and needs.
            </h2>
            <img src={hright} alt="headingIcon" />
          </div>
          <p>
            Your account type determines your trading conditions and the
            duration
            <br /> of the services available to you.
          </p>
        </div>
        <div className="accounts__content">
          <div className="accounts-table">
            <table className="accounts-table-content">
              <thead className="accounts-table-content-heading">
                <tr>
                  <th></th>
                  <th>Classic</th>
                  <th>Gold</th>
                  <th>Prime</th>
                  <th>ECN GOLD</th>
                  <th>ECN VIP</th>
                </tr>
              </thead>
              <tbody className="accounts-table-content-body">
                <tr>
                  <td>Minimum Account size</td>
                  <td>€ 500</td>
                  <td>€ 5,000</td>
                  <td>€ 50,000 </td>
                  <td>€ 250,000</td>
                  <td>Call Us</td>
                </tr>
                <tr>
                  <td>Spreads from</td>
                  <td>3.3 pips</td>
                  <td>2.2 pips</td>
                  <td>1.8 pips</td>
                  <td>1.0 pips</td>
                  <td>0.0 pips</td>
                </tr>
                <tr>
                  <td>Leverage</td>
                  <td>up to 1:30</td>
                  <td>up to 1:100</td>
                  <td>up to 1:200</td>
                  <td>up to 1:350</td>
                  <td>up to 1:500</td>
                </tr>
                <tr>
                  <td>Stop out level</td>
                  <td>up to 75%</td>
                  <td>up to 60%*</td>
                  <td>up to 45%*</td>
                  <td>up to 30%*</td>
                  <td>up to 15%*</td>
                </tr>
                <tr>
                  <td>Minimum Deal size</td>
                  <td>0.01 lot</td>
                  <td>0.05 lot</td>
                  <td>0.25 lot</td>
                  <td>0.50 lot</td>
                  <td>2.00 lot</td>
                </tr>
                <tr>
                  <td>Financial Instruments</td>
                  <td>Forex, Commodities, Indices, Cryptocurrencies </td>
                  <td>Forex, Commodities, Indices, Cryptocurrencies </td>
                  <td>Forex, Commodities, Indices, Cryptocurrencies </td>
                  <td>
                    Forex, Commodities, Indices, Cryptocurrencies Bond's, stocks
                  </td>
                  <td>
                    Forex, Commodities, Indices, Cryptocurrencies, Bond's,
                    Europe&Us stocks, Cannabis stocks
                  </td>
                </tr>
                <tr>
                  <td>1 on 1 Support (per month)</td>
                  <td>up to 1</td>
                  <td>up to 2</td>
                  <td>up to 4</td>
                  <td>up to 6</td>
                  <td>Unlimited</td>
                </tr>
                <tr>
                  <td>Technical Analysis</td>
                  <td>
                    <AiOutlineCheck />
                  </td>
                  <td>
                    <AiOutlineCheck />
                  </td>
                  <td>
                    <AiOutlineCheck />
                  </td>
                  <td>
                    <AiOutlineCheck />
                  </td>
                  <td>
                    <AiOutlineCheck />
                  </td>
                </tr>
                <tr>
                  <td>Trading Signals</td>
                  <td>
                    <AiOutlineCheck />
                  </td>
                  <td>
                    <AiOutlineCheck />
                  </td>
                  <td>
                    <AiOutlineCheck />
                  </td>
                  <td>
                    <AiOutlineCheck />
                  </td>
                  <td>
                    <AiOutlineCheck />
                  </td>
                </tr>
                <tr>
                  <td>Daily Market Review</td>
                  <td></td>
                  <td>
                    <AiOutlineCheck />
                  </td>
                  <td>
                    <AiOutlineCheck />
                  </td>
                  <td>
                    <AiOutlineCheck />
                  </td>
                  <td>
                    <AiOutlineCheck />
                  </td>
                </tr>
                <tr>
                  <td>Margin call - Email</td>
                  <td></td>
                  <td>
                    <AiOutlineCheck />
                  </td>
                  <td>
                    <AiOutlineCheck />
                  </td>
                  <td>
                    <AiOutlineCheck />
                  </td>
                  <td>
                    <AiOutlineCheck />
                  </td>
                </tr>
                <tr>
                  <td>Margin call - SMS**</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                    <AiOutlineCheck />
                  </td>
                  <td>
                    <AiOutlineCheck />
                  </td>
                </tr>
                <tr>
                  <td>Daily Live Review</td>
                  <td></td>
                  <td>
                    <AiOutlineCheck />
                  </td>
                  <td>
                    <AiOutlineCheck />
                  </td>
                  <td>
                    <AiOutlineCheck />
                  </td>
                  <td>
                    <AiOutlineCheck />
                  </td>
                </tr>
                <tr>
                  <td>Meeting Session</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                    <AiOutlineCheck />
                  </td>
                </tr>
                <tr>
                  <td>Senior Account Executives Direct Line</td>
                  <td></td>
                  <td>
                    <AiOutlineCheck />
                  </td>
                  <td>
                    <AiOutlineCheck />
                  </td>
                  <td>
                    <AiOutlineCheck />
                  </td>
                  <td>
                    <AiOutlineCheck />
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "1rem" }}>
                    * For Professional Clients Only **
                    <br /> As this service depends on third party providers, the
                    availability of this <br />
                    service is not guaranteed.
                  </td>
                  <td style={{ padding: "1rem" }}>
                    <Link to="/" className="openAccou">
                      Open Account
                    </Link>
                  </td>
                  <td style={{ padding: "1rem" }}>
                    <Link to="/" className="openAccou">
                      Open Account
                    </Link>
                  </td>
                  <td style={{ padding: "1rem" }}>
                    <Link to="/" className="openAccou">
                      Open Account
                    </Link>
                  </td>
                  <td style={{ padding: "1rem" }}>
                    <Link to="/" className="openAccou">
                      Open Account
                    </Link>
                  </td>
                  <td style={{ padding: "1rem" }}>
                    <Link to="/" className="openAccou">
                      Open Account
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <Join />
      <section className="commissions">
        <div className="commissions__heading">
          <img src={hLeftt} alt="headingIcon" />
          <h2>Commisions Per account type</h2>
          <img src={hright} alt="headingIcon" />
        </div>
        <div className="commissions-table">
          <table className="commissions-table-content">
            <thead className="commissions-table-content-heading">
              <tr>
                <th>CFD’s</th>
                <th>Mini Bronze</th>
                <th>Classic Silver</th>
                <th>Pro Gold</th>
              </tr>
            </thead>
            <tbody className="commissions-table-content-body">
              <tr>
                <td>CFDs on Forex Pairs</td>
                <td>0.0029% Per Side of Notional Value</td>
                <td>0.0025% Per Side of Notional Value</td>
                <td>0.0020% Per Side of Notional Value</td>
              </tr>
              <tr>
                <td>CFDs on Commodities, Energies, indices, Equities</td>
                <td>0.01% per side of order volume</td>
                <td>0.01% per side of order volume</td>
                <td>0.01% per side of order volume</td>
              </tr>
              <tr>
                <td>CFDs on Cryptocurrencies</td>
                <td>0.03% Per Side of National Value</td>
                <td>0.03% Per Side of National Value</td>
                <td>0.03% Per Side of National Value</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default Accounts;

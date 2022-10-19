import React from "react";
import { HiOutlineMailOpen } from "react-icons/hi";
import hright from "../assets/hRight.png";
import hLeftt from "../assets/hLeft.png";
import aboutIcon1 from "../assets/aboutIcon1.png";
import aboutIcon2 from "../assets/aboutIcon2.png";
import aboutIcon3 from "../assets/aboutIcon3.png";
import aboutIcon4 from "../assets/aboutIcon4.png";
import Join from "../Components/Join";
const About = () => {
  return (
    <>
      <section className="hero">
        <div className="hero__wrapper">
          <div className="hero__content">
            <h2>About Us</h2>
            <h4>
              Cardani.io delivers <br />
              An A–Z trading experience.
            </h4>
            <p>
              Trade CFDs on over 450 assets ranging from forex, stocks,
              commodities, indices and cryptocurrencies.
            </p>
          </div>
        </div>
      </section>
      <section className="about" id="about">
        <div className="about__heading">
          <img src={hLeftt} alt="headingIcon" />
          <h2>Who are We? </h2>
          <img src={hright} alt="headingIcon" />
        </div>
        <div className="about__info">
          <p>Operating Since 2017:</p>
          <p>
            Access Trade Markets is an experienced and leading trading company
            for a reason.
          </p>
          <p>
            - We have assembled a team of investment experts crafting the most
            flexible conditions for your utmost comfort. - Wherever your
            financial interests lie, you can depend on us to come up with
            trading solutions that benefits you. This means offering the widest
            selection of instruments, account types and trading tools to make
            your trading adventure as effective and efficient as possible.
          </p>
        </div>
        <div className="about__icon">
          <div className="about__icon-single">
            <h2>Technology</h2>
            <img src={aboutIcon1} alt="aboutIcon" />
            <p>
              Cardani.io unwavering focus on maintaining cutting edge technology
              allows clients to achieve fast access to the world of financial
              markets on a choice of popular trading platforms and trading apps
              – all featuring advanced analytical tools and complete trading
              capabilities.
            </p>
          </div>
          <div className="about__icon-single">
            <h2>Support</h2>
            <img src={aboutIcon2} alt="aboutIcon" />
            <p>
              Customer service at Cardani.io is a cornerstone from which the
              trading community thrives. Cardani.io's knowledgeable staff
              appreciate the importance of prompt, cordial and effective
              responses to our traders' needs, requests and questions.
            </p>
          </div>
          <div className="about__icon-single">
            <h2>Services</h2>
            <img src={aboutIcon3} alt="aboutIcon" />
            <p>
              Cardani.io services excel in delivering a comprehensive array of
              daily signals, market news, trading academy, webinars, analysis to
              fortify our clients' need to take fast and intelligent trading
              decisions on the world's most dynamic financial markets.
            </p>
          </div>
          <div className="about__icon-single">
            <h2>Events</h2>
            <img src={aboutIcon4} alt="aboutIcon" />
            <p>
              Cardani.io holds yearly events, seminars and conferences around
              the world with leading industry speakers to bring the most
              advanced expertise to our clients in a friendly exchange of ideas
              between participants and speakers. Register on our page so we can
              update you on upcoming events.
            </p>
          </div>
        </div>
      </section>
      <Join />
      <section className="contact" id="contact">
        <div className="contact__wrapper">
          <div className="contact__heading">
            <div className="contact__heading-h2">
              <img src={hLeftt} alt="headingIcon" />
              <h2>Contact Us</h2>
              <img src={hright} alt="headingIcon" />
            </div>
            <p>
              Our client support team are looking
              <br /> forward to assisting YOU
            </p>
          </div>
          <div className="contact__content">
            <h2 className="contact__content-heading">
              We welcome any{" "}
              <span>
                {" "}
                questions, <br />
                comments or suggestions <br />
              </span>
              you may have
            </h2>
            <div className="contact__content-flex">
              <div className="contact__content-form">
                <form>
                  <input type="text" name="name" placeholder="Name" />
                  <input type="email" name="email" placeholder="Email" />
                  <input type="number" name="number" placeholder="Number" />
                  <input type="text" name="subject" placeholder="Subject" />
                  <div className="textarea">
                    <h2>Message</h2>
                    <textarea placeholder="Enter Your Message"></textarea>
                  </div>
                  <button>Sent</button>
                </form>
              </div>
              <div className="contact__content-info">
                <HiOutlineMailOpen />
                <h2>Email</h2>
                <p>support@cardani.io</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

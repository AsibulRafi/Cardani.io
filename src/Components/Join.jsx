import React from "react";
import { Link } from "react-router-dom";
import men from "../assets/men.png";
const Join = () => {
  return (
    <section className="join">
      <div className="join__wrapper">
        <div className="join__content">
          <div className="join__content-img">
            <img src={men} alt="men" />
          </div>
          <div className="join__content-text">
            <h2>
              JOIN US NOW <br />
              IT’S FREE!
            </h2>
            <Link to="/" className="openAccount">
              Open Account
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Join;

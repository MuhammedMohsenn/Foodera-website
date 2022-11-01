import React from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBasketShopping,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div>
      <header id="home">
        <div className="container">
          <div className="row">
            <div className="col-md-5 col-sm-6">
              <h2>Good food choices are good investments.</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                et purus a odio finibus bibendum amet leo.
              </p>
              <button className="first-btn">
                Order Now <FontAwesomeIcon icon={faBasketShopping} />
              </button>
              <button className="last-btn">
                Learn More <FontAwesomeIcon icon={faChevronRight} />
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;

import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faYoutube,
  faLinkedinIn,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footer">
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <ul>
                <li>
                  <a href="/">register</a>
                </li>
                <li>
                  <a href="/">forum</a>
                </li>
                <li>
                  <a href="/">affiliate</a>
                </li>
                <li>
                  <a href="/">FAQ</a>
                </li>
              </ul>
            </div>
            <div className="col-md-12">
              <div className="icons">
                <FontAwesomeIcon icon={faFacebookF} />
                <FontAwesomeIcon icon={faTwitter} />
                <FontAwesomeIcon icon={faYoutube} />
                <FontAwesomeIcon icon={faLinkedinIn} />
                <FontAwesomeIcon icon={faInstagram} />
              </div>
            </div>
            <div className="col-md-12">
              © 2021. Foodera. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

import React from "react";
import "./AboutUs.css";
import aboutUsPic from "../assets/1.png";
import aboutUsPic2 from "../assets/2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const AboutUs = () => {
  return (
    <div id="about-us">
      <div className="container">
        <div className="row">
          <div className="first col-md-7 col-sm-12">
            <img src={aboutUsPic} alt="about-us-pic" className="img-fluid" />
          </div>
          <div className="second col-md-5 col-sm-12">
            <h2>
              We make everything by hand with the best possible ingredients.
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et
              purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat
              tellus.
            </p>
            <button>learn more</button>
          </div>
          <div className="third col-md-5 col-sm-12">
            <h2>
              We make everything by hand with the best possible ingredients.
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et
              purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat
              tellus.Far far away, behind the word mountains, far from the
              countries Vokalia and Consonantia, there live the blind texts.
            </p>
            <ul>
              <li>
                <FontAwesomeIcon icon={faCheck} /> Etiam sed dolor ac diam
                volutpat.
              </li>
              <li>
                <FontAwesomeIcon icon={faCheck} /> Erat volutpat aliquet
                imperdiet.
              </li>
              <li>
                <FontAwesomeIcon icon={faCheck} /> purus a odio finibus
                bibendum.
              </li>
            </ul>
            <button>learn more</button>
          </div>
          <div className="forth col-md-7 col-sm-12">
            <img src={aboutUsPic2} alt="about-us-pic" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

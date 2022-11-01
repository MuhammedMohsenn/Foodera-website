import React from "react";
import "./NewsLetter.css";

const NewsLetter = () => {
  return (
    <div className="news-letter">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="info">
              <h2>
                Hurry up! Subscribe our newsletter <br /> and get 25% Off
              </h2>
              <p>Limited time offer for this month. No credit card required.</p>
            </div>
            <div className="row input-wrap">
              <div className="col-md-7">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address Here"
                  required
                />
              </div>
              <div className="col-md-5">
                <button>Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;

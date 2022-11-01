import React from "react";
import "./LearnMore.css";

const LearnMore = () => {
  return (
    <div className="learn-more">
      <div className="container">
        <div className="overlay"></div>
        <div className="row">
          <div className="col-md-12">
            <div className="info">
              <h2>Baked fresh daily by bakers with passion.</h2>
              <button>Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnMore;

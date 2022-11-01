import React from "react";
import "./Stats.css";

const Stats = () => {
  return (
    <div className="stats">
      <div className="container">
        <div className="row">
          <div className="info col-md-3">
            <h2>1287+</h2>
            <h6>savings</h6>
          </div>
          <div className="info col-md-3">
            <h2>5786+</h2>
            <h6>photos</h6>
          </div>
          <div className="info col-md-3">
            <h2>1440+</h2>
            <h6>rockets</h6>
          </div>
          <div className="info col-md-3">
            <h2>7110+</h2>
            <h6>globes</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;

import React from "react";
import "./ExploreSection.css";
import Data from "./Data";

const ExploreSection = () => {
  const cardData = Data.map((card) => {
    return (
      <div className="col-md-4">
        <img className="img-fluid" src={card.img} alt="explorePic1" />
        <div className="info-wrap">
          <h4>{card.title}</h4>
          <p>{card.timing}</p>
          <div className="price">
            <span>{card.currentPrice}</span>
            <del>{card.oldPrice}</del>
          </div>
        </div>
        <div className="btn-wrap">
          <button>order now</button>
        </div>
      </div>
    );
  });

  return (
    <div id="explore-foods">
      <div className="container">
        <div className="row">
          <div className="info col-md-12">
            <h1>Explore Our Foods</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et
              purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat
              tellus. Far far away, behind the word mountains, far from the
              countries Vokalia and Consonantia, there live the blind texts.
              Separated they live in Bookmarksgrove.
            </p>
          </div>
          {cardData}
          {/* <div className="col-md-4">
            <img className="img-fluid" src={explorePic1} alt="explorePic1" />
            <div className="info-wrap">
              <h4>Rainbow Vegetable Sandwich</h4>
              <p>Time: 15 - 20 Minutes | Serves: 1</p>
              <div className="price">
                <span>$10.50</span>
                <del>$11.70</del>
              </div>
            </div>
            <div className="btn-wrap">
              <button>order now</button>
            </div>
          </div>
          <div className="col-md-4">
            <img className="img-fluid" src={explorePic2} alt="explorePic2" />
            <div className="info-wrap">
              <h4>Vegetarian Burger</h4>
              <p>Time: 30 - 45 Minutes | Serves: 1</p>
              <div className="price">
                <span>$9.20</span>
                <del> $10.50</del>
              </div>
            </div>
            <div className="btn-wrap">
              <button>order now</button>
            </div>
          </div>
          <div className="col-md-4">
            <img className="img-fluid" src={explorePic3} alt="explorePic3" />
            <div className="info-wrap">
              <h4>Raspberry Stuffed French Toast</h4>
              <p>Time: 10 - 15 Minutes | Serves: 1</p>
              <div className="price">
                <span>$12.50</span>
                <del>$13.20</del>
              </div>
            </div>
            <div className="btn-wrap">
              <button>order now</button>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ExploreSection;

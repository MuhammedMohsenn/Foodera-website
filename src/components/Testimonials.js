import React from "react";
import "./Testimonials.css";
import reviewPic1 from "../assets/reviewPic1.jpg";
import reviewPic2 from "../assets/reviewPic2.jpg";
import Carousel from "react-bootstrap/Carousel";

function UncontrolledExample() {
  return (
    <div className="testimonials" id="reviews">
      <h1 className="title">Testimonials</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Carousel>
              <Carousel.Item>
                <img src={reviewPic1} alt="reviewPic1" />
                <Carousel.Caption>
                  <p>
                    "Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts. Separated they live."
                  </p>
                  <span>Simab Dave - Web Designer</span>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img src={reviewPic2} alt="reviewPic2" />

                <Carousel.Caption>
                  <p>
                    "Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts. Separated they live far from the countries Vokalia."
                  </p>
                  <span>Johnthan Doe - UX Designer</span>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img src={reviewPic1} alt="reviewPic1" />

                <Carousel.Caption>
                  <p>
                    "Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts. Separated they live."
                  </p>
                  <span>Maccy Doe - Front End</span>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UncontrolledExample;

// const Testimonials = () => {
//   return (
//     <div className="testimonials" id="reviews">
//       <div className="container">
//         <h1 className="title">Testimonials</h1>
//         <div className="row">
//           <div className="review col-md-12">
//             <img src={reviewPic1} alt="reviewPic1" />
//             <p>
//               "Far far away, behind the word mountains, far from the countries
//               Vokalia and Consonantia, there live the blind texts. Separated
//               they live."
//             </p>
//             <span>Simab Dave - Web Designer</span>
//           </div>
//           <div className="review col-md-12">
//             <img src={reviewPic2} alt="reviewPic2" />
//             <p>
//               "Far far away, behind the word mountains, far from the countries
//               Vokalia and Consonantia, there live the blind texts. Separated
//               they live far from the countries Vokalia."
//             </p>
//             <span>Johnthan Doe - UX Designer</span>
//           </div>
//           <div className="review col-md-12">
//             <img src={reviewPic1} alt="reviewPic1" />
//             <p>
//               "Far far away, behind the word mountains, far from the countries
//               Vokalia and Consonantia, there live the blind texts. Separated
//               they live."
//             </p>
//             <span>Maccy Doe - Front End</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Testimonials;

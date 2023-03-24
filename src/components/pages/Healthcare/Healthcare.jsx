import React from "react";
import "./healthcare.css";
import Img1 from "../../../img/hc-img-1.png";
import Img2 from "../../../img/hc-img-2.png";
import Img3 from "../../../img/hc-img-3.png";
import Img4 from "../../../img/hc-img-4.png";
import Img5 from "../../../img/healthcare-technology-pillar-page-overview.jpg";
import Img6 from "../../../img/Medical-Website.png";
import Img7 from "../../../img/Digital_Health.jpg";
import Img8 from "../../../img/istockphoto-1366746973-612x612.jpg";
import Img9 from "../../../img/hc-img-9.jpg";
import Img10 from "../../../img/hc-img-10.gif";

const healthcare = () => {
  return (
    <>
      <div className="main-wrapper">
        <div className="container-fluid">
          <div className="row justify-content-end pb-5">
            {/* <div className="col-md-2 align-items-start align-self-start pt-4">
              <img src={Img1} alt="img1" className="hc-img-1" />
            </div> */}
          <div className="row justify-content-center pt-5">
            <div className="col-md-7 align-items-center align-self-center">
              <div className="row justify-content-center">
                <div className="col-md-10 align-self-center align-items-center text-center">
                  <h1 className="hc-heading text-capitalize pb-3">our expertise</h1>
                </div>
              </div>
              <div className="row justify-content-center">
                <div>
                  <p className="hc-para">
                  Through our consulting firm, Qurinom Health Connect offers promising healthcare staff augmentation services,
                  ensuring that hospitals are linked with the right medical specialists. Examining organizational work cultures and ensuring professionalism is upheld. Keeping track of a computerized database of small, medium, and large hospitals and clinics.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-5 align-items-center">
              <img src={Img3} alt="healthcare" className="hc-img-3" />
            </div>
          </div>
          {/* <div className="align-items-start align-self-start">
               <img src={Img2} alt="img2" className="hc-img-2" />
          </div> */}
          </div>
          <div className="row justify-content-center">
          <div className="col-md-8 col-lg-11 col-sm-6 align-items-center">
                    <h3 className="branding text-capitalize pb-3">Our Principles </h3>
                    <p className="b-para">
                    1. Make sure that none of the clinics and hospitals on our list exploit their staff members. <br />
2. Conducting interviews with registered employees to verify their honesty and competence.<br />
 3. To the best of our abilities, we verify the papers to guarantee that the data provided is accurate.<br />
4. As we carry out the terms of the employment contract, we make sure that all applicable laws and regulations are upheld and that the terms of participation are set. <br />
5. Make advantage of location-specific listings to avoid irritation.

                    </p>
                  </div>
                  </div>
                {/* <div className="row justify-content-start">
            <div className="col-md-1 align-items-center align-self-center">
              <img src={Img4} alt="track1" className="hc-img-4 px-2" />
            </div>
            <div className="col-md-11 align-items-center align-self-center text-start">
              <h5 className="hc-line-1">
              	Keeping track of a computerised database of small, medium, and major hospitals and clinics.
              </h5>
            </div>
          </div>
          <div className="row justify-content-start mt-3">
            <div className="col-md-1 align-items-center align-self-center">
              <img src={Img4} alt="track2" className="hc-img-4 px-2" />
            </div>
            <div className="col-md-11 align-items-center align-self-center text-start">
              <h5 className="hc-line-2">
              	Examining organisational work cultures and ensuring professionalism is maintained.
              </h5>
            </div>
          </div> */}
          <div className="container">
          <div className="row g-5 mt-5 justify-content-evenly mb-5">
            <div className="col-md-4">
            <div class="card hc-card" style={{width: "20rem"}}>
            <img src={Img5} alt="patient" className="hc-img-5 card-img-top pb-3" />
              <div class="card-body text-center">
                    <h3 className="hc-card-title">#1</h3>
                    <p className="hc-card-text pb-3">
                    Interviewing registered workers to confirm their sincerity and qualification.	To prevent annoyance, use location-specific listings.
                  </p>
              </div>
              </div>
            </div>
            <div className="col-md-4">
            <div class="card hc-card" style={{width: "20rem"}}>
            <img src={Img6} alt="nurse" className="hc-img-6 card-img-top pb-3" />
              <div class="card-body text-center">
                    <h3 className="hc-card-title">#2</h3>
                    <p className="hc-card-text pb-3">
                    	We verify the papers to the best of our ability to ensure that the information supplied is correct.
                  </p>
              </div>
              </div>
            </div>
            <div className="col-md-4">
            <div class="card hc-card" style={{width: "20rem"}}>
            <img src={Img7} alt="doctor" className="hc-img-5 card-img-top pb-3" />
              <div class="card-body text-center">
                    <h3 className="hc-card-title">#3</h3>
                    <p className="hc-card-text pb-3">
                    While fulfilling the employment contract, we ensure that all industry rules are followed & established.
                  </p>
              </div>
              </div>
            </div>
          </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-3 align-items-center align-self-center">
              <img src={Img10} alt="doctors" className="hc-img-10" />
            </div>
            {/* <div className="col-md-1 align-items-center align-self-center">
              <img src={Img1} alt="img11" className="hc-img-11" />
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default healthcare;

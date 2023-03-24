import React from "react";
import "./qhc.css";
import Img1 from "../../../img/image-320.jpg";
import Img2 from "../../../img/arrow.svg";

const QHR = () => {
  return (
    <div className="main-wrapper">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 col-sm-6 align-self-center q-left">
            <h1 className="qh-heading text-capitalize mt-3 pb-3 text-center">QHC</h1>
            <p className="qh-para mt-3">
            To advance hospital management abilities, clinical skills, patient care skills, and personality/communications talents, we provide tailored short-term courses at a discounted rate to all aforementioned members. 
            Our top goals are the happiness of our members, professional and financial stability.
            </p>
          </div>
          <div className="col-md-6 col-sm-6 align-self-center hea1">
            <img src={Img1} alt="clinical" className="qh-img-1" />
          </div>
        </div>
        <div className="row justify-content-center mt-5">
            <div className="col-md-10 align-self-center align-items-center">
              <h3 className="q-key text-capitalize">ADDITIONAL BUSINESS SECTOR FOR QHC: </h3>
            </div>
          </div>
        {/* <div className="row justify-content-start">
          <div className="col-6 align-self-center">
            <h3 className="qh-key text-center text-capitalize pb-4">
            ADDITIONAL LINE OF BUSINESS FOR QHC :-
            </h3>
          </div>
        </div> */}
        <div className="row justify-content-center">
          <div className="col-12 align-self-center">
            <ul className="list ">
              <li className="qh-list">
              <div className="row justify-content-center mt-3">
                    <div className="col-sm-2 align-items-center align-self-center">
                      <img src={Img2} alt="arrow" className="arrow px-2 offset-sm-6 offset-md-3 offset-lg-7" />
                    </div>
                    <div className="col-sm-10 col-md-8 align-items-center align-self-center">
                      <p className="q-l-para text-start offset-2 offset-sm-0">Due diligence services for hospital sales and purchases are offered by our specialized teams of attorneys, accountants, real estate professionals, doctors, and business advisors.
                       We allow producers of medical devices and consumables to use our platform to sell their goods.</p>
                    </div>
              </div>
              <div className="row justify-content-center mt-3">
                    <div className="col-sm-2 align-items-center align-self-center">
                      <img src={Img2} alt="arrow" className="arrow px-2 offset-sm-6 offset-md-3 offset-lg-7" />
                    </div>
                    <div className="col-sm-10 col-md-8 align-items-center align-self-center">
                      <p className="q-l-para text-start offset-2 offset-sm-0">In person</p>
                    </div>
              </div>
              <div className="row justify-content-center mt-3">
                    <div className="col-sm-2 align-items-center align-self-center">
                      <img src={Img2} alt="arrow" className="arrow px-2 offset-sm-6 offset-md-3 offset-lg-7" />
                    </div>
                    <div className="col-sm-10 col-md-8 align-items-center align-self-center">
                      <p className="q-l-para text-start offset-2 offset-sm-0">Give the world a chance to learn more about you! </p>
                    </div>
              </div>
              <div className="row justify-content-center mt-3">
                    <div className="col-sm-2 align-items-center align-self-center">
                      <img src={Img2} alt="arrow" className="arrow px-2 offset-sm-6 offset-md-3 offset-lg-7" />
                    </div>
                    <div className="col-sm-10 col-md-8 align-items-center align-self-center">
                      <p className="q-l-para text-start offset-2 offset-sm-0">Through the use of a camera, music, video, social networking, and an educational combo powered by AI and AR, 
                      a camera-video-social app enables everyone to showcase themselves and make their worth known.</p>
                    </div>
              </div>
                {/* <span>
                  <img src={Img2} alt="img2" className="q-arrow mt-2 px-2" />
                </span>
                Consultation for the establishment of the small, medium, and large-scale hospitals. */}
              </li>
              {/* <li className="qh-list mb-3">
                <span>
                  <img src={Img2} alt="img2" className="q-arrow mt-2 px-2" />
                </span>
                	Due diligence services for hospital sales and purchases are provided by our skilled teams of lawyers, accountants, real estate specialists, doctors, and business consultants.
              </li>
              <li className="qh-list mb-3">
                <span>
                  <img src={Img2} alt="img2" className="q-arrow mt-2 px-2" />
                </span>
                	We let manufacturers of medical devices and consumables utilise our platform to promote their products.
              </li>
              <li className="qh-list mb-3">
                <span>
                  <img src={Img2} alt="img2" className="q-arrow mt-2 px-2" />
                </span>
                We provide medical instruments and consumables manufacturers to
                use our platform for the promotion of their businesses.
              </li> */}
            </ul>
          </div>
        </div>
        <div className="row mt-5 mb-5 justify-content-end">
        <div className="align-items-center align-self-center text-center">
                                <a href="/contactus" className="btn btn-lg btn-warning q-btn-1">
                                    <span className="l-gs text-capitalize">Query</span>
                                </a>
                            </div>
        </div>
      </div>
    </div>
  );
};

export default QHR;

import React from "react";
import "./qdisplay.css";
import Img1 from "../../../img/digital-marketing-illustration_1893-2527.jpg";
import Img2 from "../../../img/arrow.svg";
import Img3 from "../../../img/image321.png";

const qdisplay = () => {
  return (
    <>
      <div className="main-wrapper">
        <div className="container-fluid">
          <div className="row justify-centent-center">
            <div className="col-md-6 align-self-center align-items-center q-left">
              <div className="row justify-content-center mt-5">
                <div className="align-items-center align-self-center text-center">
                  <h1 className="q-heading text-capitalize">q display</h1>
                </div>
              </div>
              <div className="row justify-content-center mt-4">
                <div className="col-10 align-items-center align-self-center">
                  <p className="q-para">
                  For laptop PCs, Q Display QS is creating a seamless portable screen. 
                  By re-engineering a full-size external laptop experience into the thinnest, lightest screen that can be "connected and played," we hope to achieve our ultimate goal.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 align-self-center align-items-center hea1">
              <img src={Img1} alt="portablescreen" className="q-img-1" />
            </div>
          </div>
          <div className="row justify-content-center mt-5">
            <div className="col-md-10 align-self-center align-items-center">
              <h3 className="q-key text-capitalize">	Key characteristics of Q Display: </h3>
            </div>
          </div>
          <div className="row justify-content-start mt-3">
            <div className="col-md-10 align-items-center align-self-center">
              <ul className="q-list">
                <li>
                  <div className="row justify-content-center mt-3">
                    <div className="col-sm-2 align-items-center align-self-center">
                      <img src={Img2} alt="arrow" className="arrow px-2 offset-sm-6 offset-md-3 offset-lg-7" />
                    </div>
                    <div className="col-sm-10 col-md-8 align-items-center align-self-center">
                      <p className="q-l-para text-start offset-2 offset-sm-0">There is no need for more electricity. </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="row justify-content-center mt-3">
                    <div className="col-sm-2 align-items-center align-self-center">
                      <img src={Img2} alt="arrow" className="arrow px-2 offset-sm-6 offset-md-3 offset-lg-7" />
                    </div>
                    <div className="col-sm-10 col-md-8 align-items-center align-self-center">
                      <p className="q-l-para text-start offset-2 offset-sm-0">combine with a laptop already in use. </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="row justify-content-center mt-3">
                    <div className="col-sm-2 align-items-center align-self-center">
                      <img src={Img2} alt="arrow" className="arrow px-2 offset-sm-6 offset-md-3 offset-lg-7" />
                    </div>
                    <div className="col-sm-10 col-md-8 align-items-center align-self-center">
                      <p className="q-l-para text-start offset-2 offset-sm-0">A lovely rotation without hazelnuts Modular Brightness</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="row justify-content-center mt-3">
                    <div className="col-sm-2 align-items-center align-self-center">
                      <img src={Img2} alt="arrow" className="arrow px-2 offset-sm-6 offset-md-3 offset-lg-7" />
                    </div>
                    <div className="col-sm-10 col-md-8 align-items-center align-self-center">
                      <p className="q-l-para text-start offset-2 offset-sm-0">It works with any type of computer operating system (MS, macOS, Chrome OS, Linux)</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="row justify-content-center mt-3">
                    <div className="col-sm-2 align-items-center align-self-center">
                      <img src={Img2} alt="arrow" className="arrow px-2 offset-sm-6 offset-md-3 offset-lg-7" />
                    </div>
                    <div className="col-sm-10 col-md-8 align-items-center align-self-center">
                      <p className="q-l-para text-start offset-2 offset-sm-0">It is compatible with all computer operating systems (MS, macOS, Chrome OS, Linux)</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="row justify-content-center mt-3">
                    <div className="col-sm-2 align-items-center align-self-center">
                      <img src={Img2} alt="arrow" className="arrow px-2 offset-sm-6 offset-md-3 offset-lg-7" />
                    </div>
                    <div className="col-sm-10 col-md-8 align-items-center align-self-center">
                      <p className="q-l-para text-start offset-2 offset-sm-0">Using replacement USB type-C connections, connect.</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="row mt-5 mb-5 justify-content-center">
            <div className="col-sm-6 align-items-center align-self-center text-center">
                                <a href="/contactus" className="btn btn-lg btn-warning q-btn-1">
                                    <span className="l-gs text-capitalize">Query</span>
                                </a>
                            </div>
            {/* <div className="col-lg-4 col-md-6 align-self-start align-items-center">
              <a href="/contactus" className="btn btn-lg btn-info text-capitalize q-query-btn offset-3">
                <span className="q-query mt-1 mb-2 px-3">query</span>
              </a>
            </div> */}
            <div className="col-lg-8 col-md-6 align-self-end align-items-center mt-5 offset-lg-9 hea2">
              <img src={Img3} alt="objective" className="q-img-2 mb-5" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default qdisplay;

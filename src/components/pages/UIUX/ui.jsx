import React from "react";
import "./ui.css";
import Img1 from "../../../img/u-img-1.gif";
import Img2 from "../../../img/u-img-2.gif";
import Img3 from "../../../img/u-img-3.gif";
import Img4 from "../../../img/ui-arrow.svg";
import Img5 from "../../../img/u-m-img-1.gif";
import Img6 from "../../../img/u-img-4.gif";
import Img7 from "../../../img/u-m-img-2.gif";
import Img8 from "../../../img/u-img-5.gif";
import Img9 from "../../../img/u-m-img-3.gif";
import Img10 from "../../../img/u-img-6.jpeg";
import Img11 from "../../../img/u-img-7.jpeg";
import Img12 from "../../../img/u-img-8.jpeg";
import Img13 from "../../../img/u-img-9.jpeg";
import Img15 from "../../../img/u-img-11.gif";
import Img16 from "../../../img/u-img-12.gif";
import Img17 from "../../../img/u-img-13.gif";
import Img19 from "../../../img/u-img-15.png";

const ui = () => {
  return (
    <>
      <div className="main-wrapper">
        <div className="container-fluid">
          <div className="row justify-content-around">
            <div className="col-md-6 align-self-center align-items-center">
              <div className="row justify-content-start">
                <div className="col-md-3 align-items-start align-self-start">
                  <img src={Img1} alt="gif1" className="u-img-1" />
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-md-10 align-items-center align-self-center text-center">
                  <h1 className="u-heading text-capitalize">UX/UI design</h1>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-md-12 align-items-center align-self-center">
                  <p className="u-para">
                  The process of designing a software product's user interface and enhancing the user experience is known as UI/UX design. 
                  Whether you are creating a brand-new app from scratch or updating an existing one, you need to think about its visual design.
                  </p>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-md-12 align-items-center align-self-center text-center">
                  <h3 className="u-sm-head text-capitalize">how we do it?</h3>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-md-12 align-items-center align-self-center">
                  <p className="u-sm-para">
                    UX (user experience) design is the process of designing
                    products and experiences that are efficient, effective, and
                    even delightful for users. So for this we focus on three
                    specific areas, they are:
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 align-self-center align-items-center">
              <img src={Img2} alt="UX/UI" className="u-img-2" />
            </div>
          </div>
          <div className="row row-cols-1 row-cols-md-2 g-5 justify-content-around mt-5 align-baseline">
            <div className="col">
              <div className="card u-card">
                <div className="card-body text-center">
                  <h3 className="card-title text-capitalize u-aes">aesthetics</h3>
                </div>
                <img src={Img3} alt="gif2" className="u-img-3" />
                <div className="card-footer">
                  <button
                    type="button"
                    className="btn btn-outline-light float-end"
                    data-bs-toggle="modal"
                    data-bs-target="#overlay"
                  >
                    <img src={Img4} alt="location" className="u-arrow" />
                  </button>
                  <div
                    className="modal fade"
                    id="overlay"
                    tabindex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5
                            className="modal-title text-capitalize"
                            id="exampleModalLabel"
                          >
                            aesthetics
                          </h5>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div className="modal-body">
                          <img src={Img5} alt="gif3" className="u-m-img-1" />
                          <p className="overlay-para text-center mt-5">
                            We want to appeal the viewe of artistic sense to
                            grab their attention by using the concepts of theme,
                            style, color scheme, content presentation, and
                            visual elements. We use both static and dynamic
                            design elements like optimized images and
                            multimedia. Not only we make it appealing but also
                            compatabile across different screen size with
                            responsive web design.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card u-card">
                <div className="card-body text-center">
                  <h3 className="card-title text-capitalize u-nav">navigation</h3>
                </div>
                <img src={Img6} alt="img4" className="u-img-4" />
                <div className="card-footer">
                  <button
                    type="button"
                    className="btn btn-outline-light float-end"
                    data-bs-toggle="modal"
                    data-bs-target="#overlay1"
                  >
                    <img src={Img4} alt="arrow" className="u-arrow" />
                  </button>

                  <div
                    className="modal fade"
                    id="overlay1"
                    tabindex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5
                            className="modal-title text-capitalize"
                            id="exampleModalLabel"
                          >
                            navigation
                          </h5>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div className="modal-body">
                          <img src={Img7} alt="m-img2" className="u-m-img-2" />
                          <p className="overlay-para text-center mt-5">
                            It can make the website easily accessible & helps to
                            go through the contents in a easy manner. If the
                            navigation is even a bit troublesome then the users
                            may feel it cumbersome to look thorough the website
                            and miss important details. So we provide every
                            possible way to make navigation easy and as per the
                            requirements of the user.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card u-card">
                <div className="card-body text-center">
                  <h3 className="card-title text-capitalize u-vis">visuals</h3>
                </div>
                <img src={Img8} alt="gif5" className="u-img-5" />
                <div className="card-footer">
                  <button
                    type="button"
                    id="btn-modal"
                    className="btn btn-outline-light float-end"
                    data-bs-toggle="modal"
                    data-bs-target="#overlay2"
                  >
                    <img src={Img4} alt="arrow" className="u-arrow" />
                  </button>
                  <div
                    className="modal fade"
                    id="overlay2"
                    tabindex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5
                            className="modal-title text-capitalize"
                            id="exampleModalLabel"
                          >
                            visuals
                          </h5>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div className="modal-body">
                          <img src={Img9} alt="m-img3" className="u-m-img-3" />
                          <p className="overlay-para text-center mt-5">
                            We engage the user with the required visual
                            appealand intuitive directional cues without losing
                            attention.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-start pb-3 justify-content-center">
            <div className="col-md-11 align-items-center align-self-center">
              <h3 className="u-boouus text-capitalize">
              The Advantages of Our UX & UI Services
              </h3>
            </div>
          </div>
          <div className="row justify-content-center pb-5">
            <div className="col-md-11 align-items-center align-self-center">
              <p className="u-boouus-para text-start">
              We create eye-catching designs that emphasize on building your brand's identity in the market by utilizing famous pictures, cutting-edge tools, 
              and technology that let you accomplish more than you ever thought possible.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="card u-card">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={Img10} alt="sales" className="u-img-6" />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h4 className="card-title u-bs text-capitalize">
                      Drives Up Sales
                      </h4>
                      <p className="card-text u-bs-para">
                      User experience design can increase revenue by around a third when done correctly.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card u-card">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={Img11} alt="visually" className="u-img-7" />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h4 className="card-title u-au text-capitalize">
                      Increases Customer Satisfaction
                      </h4>
                      <p className="card-text u-au-para">
                      Customers today want everything to be not just simple and quick, but also visually appealing.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card u-card">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={Img12} alt="interface" className="u-img-8" />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h4 className="card-title u-ius text-capitalize">
                      Attraction of Users
                      </h4>
                      <p className="card-text u-ius-para">
                      The improved user interface increases user attraction.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card u-card">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={Img13} alt="experience" className="u-img-9" />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h4 className="card-title u-cl text-capitalize">
                      Satisfaction of Customers
                      </h4>
                      <p className="card-text u-cl-para">
                      A excellent user experience design attracts and retains customers.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center mt-5">
            <div className="col-md-8 align-items-center align-self-center text-center">
              <h2 className="u-uum text-capitalize">UI / UX modernisation</h2>
            </div>
          </div>
          <div className="row row-cols-1 row-cols-md-3 g-5 justify-content-center pb-3">
            <div className="col">
              <div className="card u-card">
                <img src={Img15} alt="mobile" className="u-img-11" />
                <div className="card-body text-center">
                  <h4 className="card-title text-capitalize u-ma">
                  Mobile applications
                  </h4>
                  <p className="card-text u-ma-para">
                  Our talented designers construct an interface that captivates the audience which results in optimum ROI.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card u-card">
                <img src={Img16} alt="web design" className="u-img-12" />

                <div className="card-body text-center">
                  <h4 className="card-title text-capitalize u-wd">web designs</h4>
                  <p className="card-text u-wd-para">
                  We create designs that are simple to use, user-friendly, and responsive to deliver a powerful user experience.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card u-card">
                <img src={Img17} alt="web appl" className="u-img-13" />
                <div className="card-body text-center">
                  <h4 className="card-title text-capitalize u-wa">
                    web application
                  </h4>
                  <p className="card-text u-wa-para">
                  Our talented designers provide an interface that catches the audience's attention and yields the highest ROI.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-5 justify-content-center pb-5">
              <img src={Img19} alt="design" className="u-img-15" />
            </div>
          </div>
            </div>
      </div>
    </>
  );
};

export default ui;

import React from 'react';
// import {useNavigate} from 'react-router-dom';
import img11 from '../../../img/illustration-graphic-cartoon-character-of-team-work-free-vector.jpg';
import img1 from "../../../img/Rectangle 4319.png";
import img2 from "../../../img/Rectangle 4321.png";
import img3 from "../../../img/Rectangle 4320.png";
import img4 from "../../../img/Rectangle 4324.png";
import img5 from "../../../img/Rectangle 4323.png";
import img6 from "../../../img/Rectangle 4322.png";
import img7 from "../../../img/Rectangle 4333.png";
import img8 from '../../../img/Ellipse 614.png';
import img9 from '../../../img/Ellipse 619.png';
import img14 from '../../../img/Ellipse 620.svg';
import img10 from '../../../img/Ellipse 617.png';
import img12 from '../../../img/Ellipse 615.png';
import img13 from '../../../img/Ellipse 616.png';
import "./service.css";

const Services = () => {
  // const history = useNavigate();

  return (
    <>
    <div className="main-wrapper">
        <div className="container-fluid">
            <div className="row justify-content-between mt-5">
                <div className="col-2 align-items-start align-self-start">
                    <img src={img8} alt="Ellipse" className="ser-img-1" />
                </div>
                <div className="col-2 align-items-center align-self-center">
                    <img src={img9} alt="buble1" className="se-img-2" />
                </div>
                <div className="col-2 align-items-end align-self-center">
                    <img src={img14} alt="buble2" className="se-img-3" />
                </div>
            </div>
            <div className="row justify-content-center s-tr">
              <div className="col-lg-6 align-items-center align-self-center">
                  <div className="row justify-content-center">
                      <h1 className="se-heading text-capitalize text-center">services</h1>
                  </div>
                  <div className="row justify-content-center">
                      <p className="se-para">
                          All of our services hinge around our promise of delivering brand awareness, traffic and leads by bringing content, marketing and sales together. Each of our Business Hubs feed into whichever digital marketing service that you require.
                      </p>
                  </div>
                  <div className="row justify-content-start">
                      <img src={img10} alt="buble3" className="se-img-4 offset-8 offset-lg-1" />
                  </div>
              </div>
                <div className="col-lg-6 align-items-center align-self-center">
                    <img src={img11} alt="settings" className="se-img-5" />
                </div>
            </div>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-5 justify-content-center mt-5 mb-5">
                <div className="col">
                    <div className="card h-100 se-card text-center">
                        <div className="card-body align-self-center">
                            <img src={img2} className="card-img-top img-fluid se-img-7" alt="productdevelopment" />
                        </div>
                        <div className="card-footer align-self-center">
                            <a href="/productdevelopment" className="btn card-link s-btn-2">
                                <span className="text-capitalize s-pd">product development</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 se-card text-center">
                        <div className="card-body align-self-center">
                            <img src={img3} className="card-img-top img-fluid se-img-8" alt="digitalmarketing" />
                        </div>
                        <div className="card-footer align-self-center">
                            <a href="/digitalmarketing" className="btn card-link s-btn-3">
                                <span className="text-capitalize s-dm">digital marketing</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 se-card text-center">
                        <div className="card-body align-self-center">
                            <img src={img4} className="card-img-top img-fluid se-img-9" alt="digitaltransformation" />
                        </div>
                        <div className="card-footer align-self-center">
                            <a href="/digitaltransformation" className="btn card-link s-btn-4">
                                <span className="text-capitalize s-dt">digital transformation</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 se-card text-center">
                        <div className="card-body align-self-center">
                            <img src={img7} className="card-img-top img-fluid se-img-12" alt="cloudcomputing" /> 
                        </div>
                        <div className="card-footer align-self-center">
                            <a href="/cloudcomputing" className="btn card-link s-btn-7">
                                <span className="text-capitalize s-cm">cloud computing</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 se-card text-center">
                        <div className="card-body align-self-center">
                          <img src={img1} className="card-img-top img-fluid se-img-6" alt="uidesign" />
                        </div>
                        <div className="card-footer align-self-center">
                          <a href="/uidesign" className="btn card-link s-btn-1">
                            <span className="text-capitalize s-uud px-2">UI/UX design</span>
                          </a>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 se-card text-center">
                        <div className="card-body align-self-center">
                            <img src={img5} className="card-img-top img-fluid se-img-10" alt="healthcare" />
                        </div>
                        <div className="card-footer align-self-center">
                            <a href="/healthcare" className="btn card-link s-btn-5">
                                <span className="text-capitalize s-hc px-2">healthcare</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 se-card text-center">
                        <div className="card-body align-self-center">
                            <img src={img6} className="card-img-top img-fluid se-img-11" alt="itconsulting" />
                        </div>
                        <div className="card-footer align-self-center">
                            <a href="/itconsulting" className="btn card-link s-btn-6">
                                <span className="text-capitalize s-ic px-2">IT consulting</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</>
  )
}

export default Services
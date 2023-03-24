import React from "react";
import "./products.css";
import Img1 from "../../../img/p-img-1.gif";
import Img2 from "../../../img/p-img-2.png";
import Img3 from "../../../img/p-img-3.png";
import Img5 from "../../../img/processed-395e5ee4-e219-42ed-bdb5-a51acf25c70a_3ZbccGbV.jpeg";
import Img4 from '../../../img/processed-4c6f585e-e7d2-4702-a651-47774a967a0c_vY6ixV5v.jpeg'

const p_land = () => {
  return (
    <div>
      <div className="main-wrapper">
        <div className="container-fluid">
          <div className="row justify-conntent-center">
            <div className="col-lg-3 align-items-center align-self-center">
              <img src={Img1} alt="gif" className="pl-img-1" />
            </div>
            <div className="col-lg-6 align-items-center text-center align-self-center">
              <h1 className="pl-heading text-capitalize">Products We Offer </h1>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-sm-10 align-items-center align-self-center">
              <p className="pl-para">
              We are committed to responding to your questions about our products and their components because we recognise that maintaining your beauty is first and foremost a matter of trust. We describe the elements in our recipe, their nature, their origin, how they work, and how they are used.
              </p>
            </div>
          </div>
          <div className="row row-cols-1 row-cols-md-2 row-cols-xl-4 mt-5 mb-5 justify-content-center pl-bg g-5 pb-5">
            <div className="col">
              <div className="card h-100 pl-card">
                <img src={Img2} alt="display" className="pl-img-2" />
                <div className="card-body">
                  <h5 className="card-title pl-card-title text-capitalize text-center">q display</h5>
                  <p className="card-text pl-card-text">
                  For laptop PCs, Q Display QS is creating a seamless portable screen. By re-engineering a full-size external laptop experience into the thinnest, lightest screen that can be "connected and played," we hope to achieve our ultimate goal.
                  </p>
                </div>
                <div className="card-footer align-self-center">
                  <a href="/qdisplay" className="btn pl-rm-btn px-3 py-2 text-capitalize">read more</a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100 pl-card">
                <img src={Img3} alt="qhc" className="pl-img-3" />
                <div className="card-body">
                  <h5 className="card-title pl-card-title text-capitalize text-center">QHC</h5>
                  <p className="card-text pl-card-text">
                  We provide customised short-term courses to all mentioned members at a subsidised rate to improve hospital management abilities, clinical skills, patient care skills, and personality/communication skills. 
                  </p>
                </div>
                <div className="card-footer align-self-center">
                  <a href="/qhc" className="btn pl-rm-btn px-3 py-2 text-capitalize">read more</a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100 pl-card">
                <img src={Img4} alt="showcase" className="pl-img-4" />
                <div className="card-body">
                  <h5 className="card-title pl-card-title text-capitalize text-center">showcase</h5>
                  <p className="card-text pl-card-text">
                  A camera-video-social app allows everyone to exhibit themselves and make their value known via the use of a camera, music, video, social networking, and an educational combination driven by AI and AR.
                  </p>
                </div>
                <div className="card-footer pl-card-footer align-self-center">
                  <a href="/showcase" className="btn pl-rm-btn px-3 py-2 text-capitalize">read more</a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100 pl-card">
                <img src={Img5} alt="biscuit" className="pl-img-4" />
                <div className="card-body">
                  <h5 className="card-title pl-card-title text-capitalize text-center">biscuit</h5>
                  <p className="card-text pl-card-text">
                  In these chaotic times, anytime we are faced with a problem or require a new product, we search for it online. Most of the time.
                  </p>
                </div>
                <div className="card-footer pl-card-footer align-self-center">
                  <a href="/biscuit" className="btn pl-rm-btn px-3 py-2 text-capitalize">read more</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default p_land;

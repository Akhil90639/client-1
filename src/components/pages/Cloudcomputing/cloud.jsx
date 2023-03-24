import React from "react";
import "./cloud.css";
import Img1 from "../../../img/business-employee-working-on-laptop-4388424-3662704.png";

export const Cloudcomputing = () => {
  return (
    <>
      <section id="features" className="section-padding">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title wow fadeInDown pb-4 mt-5 text-center">Moving to the Cloud </h2>
            <p className="cl-para pb-5">
            Qurinom Solutions makes sure that your company's assets are migrated to the Clouds by analysing and shifting your data to a trustworthy Cloud platform. We simplify the process of living and moving. 
            </p>
            <div className="shape wow fadeInDown"></div>
          </div>
          <div className="row pb-5">
            <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
              <div className="content-left">
                <div className="box-item animated wow fadeInLeft">
                  <span className="icon">
                    <i className="fas fa-rocket"></i>
                  </span>
                  <div className="text">
                    <h4>Our Goods and Services Include</h4>
                    <p className="text-justify">
                    Approach to the Cloud Based on the needs of your business and the necessary expectations, we outline the appropriate Cloud options. 
                    </p>
                  </div>
                </div>
                <div
                  className="box-item animated wow fadeInLeft"
                  data-wow-delay="0.6s"
                >
                  <span className="icon">
                    <i className="fas fa-tablet-alt"></i>
                  </span>
                  <div className="text">
                    <h4>Cloud Management </h4>
                    <p>We streamline data management while organizing and managing the Clouds.</p>
                  </div>
                </div>
                <div
                  className="box-item animated wow fadeInLeft"
                  data-wow-delay="0.9s"
                >
                  <span className="icon">
                    <i className="fas fa-cog"></i>
                  </span>
                  <div className="text">
                    <h4>Cloud Security </h4>
                    <p className="text-xl-justify">
                    Since we place a priority on a secure workload, our cloud security ensures a secure cloud environment. 
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
              <div className="show-box animated wow fadeInUp">
                <img src={Img1} alt="cloudimg" />
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
              <div className="content-right">
                <div className="box-item animated wow fadeInRight">
                  <span className="icon">
                    <i className="fas fa-pen-nib"></i>
                  </span>
                  <div className="text">
                    <h4>Moving to the Cloud </h4>
                    <p className="text-xl-centre">
                    All of your company's operations are gathered as digital data on Clouds in a coordinated manner.
                    </p>
                  </div>
                </div>
                <div
                  className="box-item animated wow fadeInRight"
                  data-wow-delay="0.6s"
                >
                  <span className="icon">
                    <i className="fas fa-layer-group"></i>
                  </span>
                  <div className="text">
                    <h4> Data from cloud computing</h4>
                    <p>We thoroughly assess your company and provide you advice on which data needs to be moved to the cloud.</p>
                  </div>
                </div>
                <div
                  className="box-item animated wow fadeInRight"
                  data-wow-delay="0.9s"
                >
                  <span className="icon">
                    <i className="fas fa-feather-alt"></i>
                  </span>
                  <div className="text">
                    <h4> Cloud Assessment</h4>
                    <p>
                    The application candidates that are most suited for cloud migration and will yield the highest returns will be found through our preliminary review.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};


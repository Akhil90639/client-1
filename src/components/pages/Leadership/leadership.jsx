import React from "react";
import "./leadership.css";
import Img1 from "../../../img/pavan kumar.JPG";
import Img2 from "../../../img/Godfree.jpeg";
import Img3 from "../../../img/Hoedi1.jpg";
import Img4 from "../../../img/image 330.svg";

const leadership = () => {
  return (
      <>
      <div className="teamWrapper">
    <div className="container">
      <h1 className="text-center pb-4 companyatitle">Our Creative Team</h1>
      <p className="le-para">From poor websites that do not reflect your company. It's time to stop squandering money on bad marketing. Our Creative Team will make you seem nice, interact with your clients better, and increase your sales.</p>
      <div className="row" style={{marginTop:"146px",marginBottom:"200px", rowGap: "111px"}}>
      <div className="col-md-4">
          <div className="teamcol">
            <div className="teamcolinner">
              <div className="le-avatar">
                <img src={Img1} alt="Member1" />
                </div>
              <div className="member-name">
                 <h2 align="center">Pavan Kumar</h2> 
              </div>
              <div className="member-info">
                <p align="center">Founder & ceo</p>
              </div>
              <div className="member-mail"> 
              </div>
              <div className="member-social"> 
                <ul className="social-listing">
                <li><a className="le-a" href="https://www.facebook.com/qurinomsolutions/"><i className="fa fa-facebook"></i></a></li>
                  <li><a className="le-a" href="https://www.instagram.com/"><i className="fa fa-instagram"></i></a></li>
                  <li><a className="le-a" href="https://twitter.com/qurinom?s=08"><i className="fa fa-twitter"></i></a></li>
                  <li><a className="le-a" href="https://www.linkedin.com/company/qurinomsolutions"><i className="fa fa-linkedin"></i></a></li>
                </ul> 
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="teamcol">
            <div className="teamcolinner">
              <div className="le-avatar">
                <img src={Img2} alt="Member2" />
                </div>
              <div className="member-name">
                 <h2 align="center">Godfree Dzebu</h2> 
              </div>
              <div className="member-info">
                <p align="center">CTO (Technology Director)</p>
                </div>
              <div className="member-mail"> 
              </div>
              <div className="member-social"> 
                <ul className="social-listing">
                <li><a className="le-a" href="https://www.facebook.com/qurinomsolutions/"><i className="fa fa-facebook"></i></a></li>
                  <li><a className="le-a" href="https://www.instagram.com/"><i className="fa fa-instagram"></i></a></li>
                  <li><a className="le-a" href="https://twitter.com/qurinom?s=08"><i className="fa fa-twitter"></i></a></li>
                  <li><a className="le-a" href="https://www.linkedin.com/company/qurinomsolutions"><i className="fa fa-linkedin"></i></a></li>
                </ul> 
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="teamcol">
            <div className="teamcolinner">
              <div className="le-avatar">
                <img src={Img3} alt="Member3" />
                </div>
              <div className="member-name"> 
              <h2 align="center">Hoedi p.wijono</h2> 
              </div>
              <div className="member-info">
              <p align="center">Executive partner</p>
                </div>
              <div className="member-mail"> 
               </div>
              <div className="member-social"> 
                <ul className="social-listing">
                  <li><a className="le-a" href="https://www.facebook.com/qurinomsolutions/"><i className="fa fa-facebook"></i></a></li>
                  <li><a className="le-a" href="https://www.instagram.com/"><i className="fa fa-instagram"></i></a></li>
                  <li><a className="le-a" href="https://twitter.com/qurinom?s=08"><i className="fa fa-twitter"></i></a></li>
                  <li><a className="le-a" href="https://www.linkedin.com/company/qurinomsolutions"><i className="fa fa-linkedin"></i></a></li>
                </ul> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>  
  </div>
    </>
  );
};

export default leadership;

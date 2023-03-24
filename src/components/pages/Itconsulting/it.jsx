import React from "react";
import "./it.css";
import Img1 from "../../../img/lap.jpg";
import Img2 from "../../../img/on.jpg";
import Img3 from "../../../img/global-data-security-personal-data-security-cyber-data-security-online-concept-illustration-internet-security-information-privacy-protection_1150-37336.webp";
import Img4 from "../../../img/rage.jpg";

const itconsult = () => {
  return (
    <>
      <div className="container-fluid col-lg-11">
        <h1 className="i-heading text-center mt-5 pb-3">IT Consulting</h1>
        <p className="i-para">
        A one-stop shop for all of your complex business IT Consultancy worries is Qurinom Solution. We create and execute distinctive, 
        affordable, and reliable IT Consultancy programmes that will help your business and guarantee a higher ROI.
        </p>
        <h3 className="branding text-capitalize pb-3">We are....... </h3>
                    <p className="i-para">
                    A highly skill equipped  company. We are a team of committed and experienced technocrats that prioritize agility and believe that cutting-edge technology has the potential to transform the world. We are here to use highly adaptable technology to support the global commercial success of our partners. By working with you in the best way possible and delivering exceptional results, we make sure that we advance our business together and increase your company's success rate
                    </p>
      </div>
        <div className="row">
        <div className="row justify-content-between">
            <div className="col-md-6 align-items-center align-self-center">
               <img src={Img1} alt="Solutions" className="w-100" />
            </div>
            <div className="col-md-6 align-items-center align-self-center text-center">
              <div className="row justify-content-center">
                <div className="col-md-10 align-items-center align-self-center">
                  <h2 className="text-capitalize">Architecture for Innovative Solutions </h2>
                </div>
              </div>
              <div className="row justify-content-center mt-4">
                <div className="col-md-10 align-items-center align-self-center">
                  <p className="dt-ds-para">
                  Our solutions are customized to the demands and corporate goals.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-between">
            <div className="col-md-6 align-items-center align-self-center text-center">
              <div className="row justify-content-center">
                <div className="col-md-10 align-items-center align-self-center">
                  <h2 className="text-capitalize">Enterprise Architecture</h2>
                </div>
              </div>
              <div className="row justify-content-center mt-4">
                <div className="col-md-10 align-items-center align-self-center">
                  <p className="dt-ds-para">
                  Before suggesting a goal architecture and a project strategy, we conduct an extensive enterprise investigation.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 align-items-center align-self-center">
            <img className="w-100" src={Img2} alt="project" />
            </div>
          </div>
          <div className="row justify-content-between">
              <div className="col-md-6 align-items-center align-self-center">
              <img className="w-100" src={Img3} alt="domains" />
              </div>
            <div className="col-md-6 align-items-center align-self-center text-center">
              <div className="row justify-content-center">
                <div className="col-md-10 align-items-center align-self-center">
                  <h2 className="text-capitalize"> Building Blocks of Domains </h2>
                </div>
              </div>
              <div className="row justify-content-center mt-4">
                <div className="col-md-10 align-items-center align-self-center">
                  <p className="dt-ds-para">
                  Some of our expertise areas include business, information architecture, application & integration, security, and data technology and infrastructure.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-between">
            <div className="col-md-6 align-items-center align-self-center text-center">
              <div className="row justify-content-center">
                <div className="col-md-10 align-items-center align-self-center">
                  <h2 className="text-capitalize">Staff integration is simple</h2>
                </div>
              </div>
              <div className="row justify-content-center mt-4">
                <div className="col-md-10 align-items-center align-self-center">
                  <p className="dt-ds-para">
                  We evaluate the needs of the firm before sourcing the most qualified candidate, ensuring that highly skilled professionals are recruited to the team for exceptional results.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 align-items-center align-self-center">
              <img className="w-100" src={Img4} alt="integration" />
              </div>
          </div>
        </div>
    </>
  );
};

export default itconsult;

// import "./it.css";
// import Img1 from "../../../img/06a17ddf23c8ae53e76c22f75c3ebb1a.gif";
// import Img2 from "../../../img/Groupp.png";
// import Img3 from "../../../img/img-111.png";
// import Img4 from "../../../img/img11.png";
// import Img5 from "../../../img/img--112.png";
// import Img6 from '../../../img/image 331.png';

// const itconsult = () => {
//   return (
//     <>
//       <div classNameName="main-wrapper i-main">
//         <div classNameName="container-fluid">
//           <div classNameName="row justify-content-center mt-5">
//             <div classNameName="col-6 align-items-center align-self-center text-center">
//               <div classNameName="row justify-content-center d-inline-flex">
//                 <h1 classNameName="i-heading">
//                   <span classNameName="color1">IT</span>
//                   <span classNameName="text-capitalize px-3 color2">
//                     consulting
//                   </span>
//                 </h1>
//               </div>
//               <div classNameName="row justify-content-center">
//                 <p classNameName="i-para">
//                   Qurinom Solutions is a one-stop solution for all your complex
//                   business problems relating to IT Consultancy. We craft and
//                   offer personalized, affordable, and reliable IT Consultancy
//                   strategies that will work wonders for your business ensuring
//                   higher ROI.
//                 </p>
//               </div>
//               <div classNameName="row justify-content-center">
//                 <div classNameName="col-4 align-items-center align-self-center">
//                   <a href="/" classNameName="i-btn btn btn-warning btn-lg">
//                     <span classNameName="rdm text-capitalize">read more</span>
//                   </a>
//                 </div>
//               </div>
//             </div>
//             <div classNameName="col-6 align-items-center align-self-center">
//               <img src={Img1} alt="img1" classNameName="i-img-1" />
//             </div>
//           </div>
//           <div classNameName="row mt-3 justify-content-start">
//             <div classNameName="col-4 align-items-center align-items-start">
//               <h4 classNameName="wwa text-capitalize">who we are?</h4>
//             </div>
//           </div>
//           <div classNameName="row mt-3 justify-content-start">
//             <div classNameName="col-12 align-items-center align-self-start">
//               <h3 classNameName="mpcc text-capitalize">
//                 most professional consulting company
//               </h3>
//             </div>
//           </div>
//           <div classNameName="row mt-3 justify-content-start">
//             <div classNameName="col-12 align-items-center align-self-center">
//               <p classNameName="i-para-1">
//                 We are a team of passionate and professional technocrats who
//                 work on agility and believe in revolutionizing the world with
//                 cutting edge technologies. We are here to embed with high
//                 transformable technologies to excel and flourish our Partner’s
//                 businesses globally. We ensure that together we take our
//                 business to the next level by helping you in the best possible
//                 manner while delivering exceptional results to flourish over the
//                 success ratio of your business.
//               </p>
//             </div>
//           </div>
//           <div classNameName="row mt-3 justify-content-center">
//             <div classNameName="col-6 align-items-center align-self-center">
//               <h4 classNameName="os text-capitalize">our services</h4>
//             </div>
//           </div>
//           <div classNameName="row row-cols-1 row-cols-md-2 g-5 d-flex" style={{marginBottom: "15px"}}>
//             <div classNameName="col-md-5">
//               <div classNameName="card i-card">
//                 <div classNameName="row g-0">
//                     <div classNameName="card-body text-center">
//                       <h5 classNameName="card-title i-card-title mt-3 title1 text-capitalize">
//                         innovative solutions architecture
//                       </h5>
//                       <p classNameName="card-text i-card-text text1 mt-2">
//                         Our solutions are customized according to the demands
//                         and strategies of the enterprise.
//                       </p>
//                     </div>
//                     <img
//                       src={Img2}
//                       classNameName="img-fluid rounded-start i-img-2 mt-1"
//                       alt="img2"
//                     />
//                 </div>
//               </div>
//             </div>
//             <div classNameName="col-md-5 card1">
//               <div classNameName="card i-card">
//                 <div classNameName="row g-0">
//                   <div classNameName="card-body text-center">
//                     <h5 classNameName="card-title i-card-title mt-3 text-capitalize">
//                       domain architecture
//                     </h5>
//                     <p classNameName="card-text i-card-text mt-2">
//                       We have expertise in Data Technology and Infrastructure ,
//                       Business, Information Architecture, Application &
//                       Integration, and Security.
//                     </p>
//                   </div>

//                   <img
//                     src={Img3}
//                     classNameName="img-fluid rounded-start i-img-3 mt-1"
//                     alt="img3"
//                   />
//                 </div>
//               </div>
//             </div>
//             </div>
//             <div classNameName="row g-5">
//             <div classNameName="col-md-5">
//               <div classNameName="card i-card">
//                 <div classNameName="row g-0">
//                   <div classNameName="card-body text-center">
//                     <h5 classNameName="card-title i-card-title mt-3 edit2 text-capitalize">
//                       enterprise architecture
//                     </h5>
//                     <p classNameName="card-text i-card-text mt-2">
//                       We conduct an in-depth enterprise analysis and then
//                       recommend target architecture with a roadmap of
//                       prioritised projects.
//                     </p>
//                   </div>
//                   <img
//               src={Img4}
//               classNameName="img-fluid rounded-start i-img-4 mt-1"
//               alt="img4"
//             />
//                 </div>
//               </div>
//             </div>
//             <div classNameName="col-md-5 card1">
//               <div classNameName="card i-card">
//                 <div classNameName="row g-0">
//                   <div classNameName="card-body text-center">
//                     <h5 classNameName="card-title i-card-title mt-3 text-capitalize">
//                       easy staff integration
//                     </h5>
//                     <p classNameName="card-text i-card-text mt-2">
//                       we analyze the company’s requirements and then outsource
//                       the best-suited candidate ensuring the addition of highly
//                       skilled employees to the team for exceptional results.
//                     </p>
//                   </div>
//               <img
//               src={Img5}
//               classNameName="img-fluid rounded-start i-img-5 mt-1"
//               alt="img5"
//             />{" "}
//                 </div>
//               </div>
//             </div>
           
//           </div>
//           <img src={Img6} alt="img" classNameName="i-img-6"/>
//         </div>
//       </div>
//     </>
//   );
// };

// export default itconsult;

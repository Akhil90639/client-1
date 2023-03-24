import React, { useEffect, useState } from "react";
import "./landing.css";
// import {useNavigate } from 'react-router-dom';
import img1 from "../../../img/1c70b8c98a50c585d45bad9ea0265e2f.gif";
import img2 from "../../../img/0792d5b8b78f894dca91c1d05b528632.gif";
import img3 from "../../../img/Rectangle 4312.svg";
import img4 from "../../../img/Girl with tablet and working process on desktop.svg";
import img5 from "../../../img/snowball.svg";
import img6 from "../../../img/businesswoman in blue suit with phone looking aside.svg";
import img7 from "../../../img/Icon.svg";
import img8 from "../../../img/Saly-43.svg";
import img9 from "../../../img/Hoedi1.jpg";
import img10 from "../../../img/pavan kumar.JPG";
import img12 from "../../../img/Rectangle 4327.png";
import img13 from "../../../img/Man chatting on dating site.svg";
import img11 from "../../../img/Godfree.jpeg";
import img14 from "../../../img/Rectangle 4328.png";
import img15 from "../../../img/Ellipse 3 (1).png";
import img16 from "../../../img/Ellipse 5.png";
import video from "../../pages/Video/qs video.mp4";
import { useSelector, useDispatch } from "react-redux";
import {
  editUserEmail,
  removeUserContactResponceStatus,
  userContactPost,
} from "../../../redux/reducer";
import { Link, useNavigate } from "react-router-dom";
import Alert from "@mui/material/Alert";
import { FaFacebook, FaTwitterSquare, FaInstagramSquare } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";
const Landing = () => {
  const [newDetails, setNewDetails] = useState("");
  const [btnFalse, setBtnFalse] = useState(true)
  const { userContactResponceStatus, userEmail } = useSelector(
    (store) => store.userContact
  );
  const details = `We stay synonymous and relevant to your brand. We provide assistance to brands by helping them expand digitally. 
  We design exclusive modules which deal with web development, IT consulting, website appearance and functioning. 
  We are well-versed in Embedded systems, healthcare, cloud migration, Digital alteration, AI, and loT. We aid our clients with top-notch personalized solutions to their issues. We strive for excellence and put the best possible solutions on the table. 
  In this digital era, we customize your brand's design, considering a better ROI for you.`;

  const detail = details.length > 170 ? details.slice(0, 273) + "..." : details;
  useEffect(() => {
    setNewDetails(detail);
   
  }, [detail]);

  const handleSeeMore = () => {
    setNewDetails(details);
    setBtnFalse(false)
  };
  const btn = <button className="see-btn" onClick={handleSeeMore}>See More</button>;

  const team = [
    { name: "Pawan Kumar", work: "Founder & CEO", id: 1, img: img10 },
    { name: "hoedi p. wijono", work: "Executive Partner", id: 2, img: img9 },
    {
      name: "godfree dzebu",
      work: "CTO (Technology Director)",
      id: 2,
      img: img11,
    },
  ];

  const [userContact, setUserContact] = useState({
    name: null,
    mobile: null,
    email: userEmail || null,
  });

  const [wait, setwait] = useState(false);

  const dispatch = useDispatch();
  let navigation = useNavigate();

  const PHONE_REGEXP = /^[6789]\d{9}$/;

  if (userContactResponceStatus && wait) {
    setTimeout(() => {
      dispatch(removeUserContactResponceStatus());
    }, 3000);
    setwait(false);
  }
  const handleForm = (e) => {
    console.log(userContactPost(userContact));
    e.preventDefault();
    if (!PHONE_REGEXP.test(+userContact.mobile))
      return alert("Please enter a valid phone number");
    dispatch(userContactPost(userContact));
    dispatch(editUserEmail(userContact.email));
    setwait(!wait);
    setUserContact({
      name: null,
      mobile: null,
      email: null,
    });

    e.target.name.value = "";
    e.target.mobile.value = "";
    e.target.email.value = "";
  };

  return (
    <>
      <div className="main-wrapper over">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="row justify-content-center mt-5">
              <div className="col align-items-center align-self-center">
                <img src={img3} alt="QS backimg" className="l-img-3" />
              </div>
            </div>
            <div className="row justify-content-center l-tr">
              <div className="col-md-5 align-items-center align-self-center l-content-para">
                <div className="row justify-content-center">
                  <h1 className="l-heading text-capitalize pt-4">
                    digital transformation with{" "}
                    <span style={{ color: "#FDA055" }}> qurinom solutions</span>
                  </h1>
                </div>
                <div className="row justify-content-center mt-3 mt-md-0">
                  <p className="la-para">{newDetails }{btnFalse && btn}</p>
                </div>
                <div className={`row justify-content-center mt-4 ${btnFalse && 'get-btn'}`}  >
                  <div className="col-sm-6 align-items-center align-self-center text-center">
                    <a
                      href="/contactus"
                      className="btn btn-lg btn-warning l-btn-1"
                    >
                      <span className="l-gs text-capitalize">get started</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 align-items-center align-self-center">
                <img src={img4} alt="Qurinom solutions" className="l-img-4 mt-5 mt-md-0" />
              </div>
            </div>
          </div>
          <div className="row justify-content-between">
            <div className="col-sm-2 align-items-start align-self-start">
              <img src={img5} alt="client" className="l-img-5 mt-5 mt-sm-0" />
            </div>
            <div className="col-sm-6 align-items-center text-center wqs-col pb-5">
              <h2 className="l-wqs  text-capitalize fs-1">
              The Better Option For Your Company to be successful!
              </h2>
              <div>
                <img src={img1} alt="gif" className="l-img-1" />
              </div>
              <p className="l-wqs-para">
              Our focus on client requirements drive us forward as we create cutting-edge and intriguing designs, to give them a pleasant experience. 
              </p>
              <a
                href="/products"
                className="l-wqs-link text-decoration-underline"
              >
                Learn more about our plans
              </a>
            </div>
            <div className="col-sm-4 align-items-center align-self-center">
              <img
                src={img6}
                alt="girl"
                className="l-img-6 offset-9 offset-sm-4 offset-lg-6"
              />
            </div>
          </div>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-5 g-4 mt-2 justify-content-center">
            <div className="col">
              <div className="card h-100 ">
                <div className="row g-3">
                  <div className="col-3 align-items-start align-self-start mt-4">
                    <p className="l-num">01</p>
                  </div>
                  <div className="col-9 align-items-center align-self-center">
                    <h5 className="card-title l-dcc  text-capitalize py-3">
                      Digital Core Capabilities
                    </h5>
                  </div>
                </div>
                <div
                  className="card-body"
                  style={{ backgroundColor: "#E6F0F3" }}
                >
                  <p className="card-text l-t1 pb-5 pt-4">
                  Our core digital skills allow us to plan imaginatively and offer the finest services.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100 l-cards">
                <div className="row g-0">
                  <div className="col-3 align-items-start align-self-start mt-4">
                    <p className="l-num">02</p>
                  </div>
                  <div className="col-9 align-items-center align-self-center">
                    <h5 className="card-title l-dcc text-capitalize py-3">
                    Customer centric
                    </h5>
                  </div>
                </div>
                <div
                  className="card-body"
                  style={{ backgroundColor: "#E8FFFB" }}
                >
                  <p className="card-text l-t1 pb-5 pt-4">
                   We go to considerable measures to live up to our customers' expectations. 
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100 l-cards">
                <div className="row g-0">
                  <div className="col-3 align-items-start align-self-start mt-4">
                    <p className="l-num">03</p>
                  </div>
                  <div className="col-9 align-items-center align-self-center">
                    <h5 className="card-title l-dcc text-capitalize py-3">
                      Integrity
                    </h5>
                  </div>
                </div>
                <div
                  className="card-body"
                  style={{ backgroundColor: "#EDFBF3" }}
                >
                  <p className="card-text l-t1 pb-5 pt-4">
                  We keep our integrity in accordance with international norms and industry standards, and we believe in being honest with our clients. 
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100 l-cards">
                <div className="row g-0">
                  <div className="col-3 align-items-start align-self-start mt-4">
                    <p className="l-num">04</p>
                  </div>
                  <div className="col-9 align-items-center align-self-center">
                    <h5 className="card-title l-dcc text-capitalize py-3">
                    Staying ahead
                    </h5>
                  </div>
                </div>
                <div
                  className="card-body"
                  style={{ backgroundColor: "#FBEFEE" }}
                >
                  <p className="card-text l-t1 pb-5 pt-4">
                  We support our clients' continued advancement in an environment that is undergoing rapid change.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-start">
            <div className="col-sm-6 align-items-center align-self-center">
              <img src={img2} alt="gif" className="l-img-2 mt-5" />
            </div>
          </div>
          <div className="row justify-content-center mt-5 mt-lg-0">
            <div className="col-sm-8 align-items-center align-self-center">
              <h3 className="l-os text-capitalize text-center fs-1">
                our services
              </h3>
            </div>
          </div>
          <div className="row g-5 mt-1 justify-content-center pb-5">
            <div className="col-md-3">
              <div className="card l-card l-bg-1 text-center">
                <img src={img7} alt="buble1" className="l-img-7" />
                <div className="card-body">
                  <h3 className="l-fc card-title text-capitalize py-3">
                    free consultation
                  </h3>
                  <p className="card-text l-t2 pb-5 pt-4">
                  Free consultations are available, and we're also available to assist you comprehend the ideas.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card l-card l-bg-2 text-center">
                <img src={img7} alt="buble2" className="l-img-7" />
                <div className="card-body">
                  <h3 className="l-ep card-title text-capitalize">
                    Quick estimates
                  </h3>
                  <p className="card-text l-t2">
                  We provide our clients with budget estimates and support using all of our resources.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card l-card l-bg-1 text-center">
                <img src={img7} alt="buble3" className="l-img-7" />
                <div className="card-body">
                  <h3 className="l-qe card-title text-capitalize">
                  Simple payments
                  </h3>
                  <p className="card-text l-t2">
                  We accept simple payments, and money transfers don't take too long.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card l-card l-bg-2 text-center">
                <img src={img7} alt="buble" className="l-img-7" />
                <div className="card-body">
                  <h3 className="l-ep card-title text-capitalize">
                    No more waiting
                  </h3>
                  <p className="card-text l-t2">
                  No more waiting around for a long time; we deliver our service perfectly and quickly.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row justify-content-center pt-5 mt-sm-0 mt-lg-5">
            <div className="col-sm-8 align-items-center align-self-center text-center">
              <h4 className="l-oct text-capitalize">our creative team</h4>
            </div>
          </div>
          <div className="row justify-content-center mt-sm-5 mt-md-0">
            <div className="col-sm-2 align-items-start align-self-start">
              <img src={img12} alt="img12" className="l-img-12" />
            </div>
            <div className="col-sm-10 align-items-center align-self-center text-center">
              <p className="l-para-1">
                From bad websites that aren’t representative of your business.
                Its time to stop wasting money on stinky marketing. Our Creative
                Team will help you look good, connect better with your clients,
                and up your sales game.
              </p>
            </div>
          </div>

          <div className="team-container">
            <div className="container">
              <section>
                <div className="row ps-2 g-2 team-details-container w-100 justify-content-between align-items-center">
                  {team.map((item) => (
                    <div
                      key={item.id}
                      className=" col-md-4 col-lg-3 col-12 employ-details"
                    >
                      <div className="img">
                        <img className="" src={item.img} alt={item.name} />

                        <div className="d-flex justify-content-center mb-md-0 mb-5 pb-5 pb-md-1 social-container">
                          <a
                            className="anchor"
                            href="https://www.facebook.com/qurinomsolutions/"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <FaFacebook className="social-icon" />
                          </a>
                          <a
                            className="anchor"
                            href="https://twitter.com/qurinom?s=08"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <FaTwitterSquare className="social-icon" />
                          </a>
                          <a
                            className="anchor"
                            href="https://www.instagram.com/"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <FaInstagramSquare className="social-icon" />
                          </a>
                          <a
                            className="anchor"
                            href="https://www.linkedin.com/company/qurinomsolutions"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <ImLinkedin className="social-icon" />
                          </a>
                        </div>
                      </div>
                      <div className="detail">
                        <h3 className="fs-5">{item.name}</h3>
                        <h4 className="fs-6">{item.work}</h4>
                        <div className="d-flex justify-content-end">
                          <div className="bottom-border"></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>

          <div className="row justify-content-center g-2 align-baseline mt-lg-5">
            <video
              src={video}
              width="750"
              height="500"
              className="l-video"
              controls
              autoPlay
              muted
            ></video>
            {/* <ReactPlayer className="l-video"
                    url="https://www.youtube.com/watch?v=N3AkSS5hXMA" type="video/mp4"
                /> */}
          </div>
          <div className="row bg-soft-info justify-content-around mt-5 mb-5">
            <div className="col-md-7 align-items-center align-self-center text-center py-md-3">
              <div className="row justify-content-center mt-5 mt-md-2 pb-3">
                <div className="col-sm-8 col-md-10 align-items-center align-self-center">
                  <h2 className="l-sysst text-capitalize">
                    start your success story today
                  </h2>
                </div>
              </div>
              <form onSubmit={handleForm}>
                <div className="row justify-content-center">
                  <div className="form-group col-md-8">
                    <input
                      value={userContact.name}
                      onChange={(e) => {
                        setUserContact({
                          ...userContact,
                          name: e.target.value,
                        });
                      }}
                      type="text"
                      className="form-control l-form-control mt-2"
                      placeholder="Enter Your Name"
                      name="name"
                      required
                    />
                  </div>
                  <div className="form-group col-md-8">
                    <input
                      value={userContact.mobile}
                      onChange={(e) => {
                        setUserContact({
                          ...userContact,
                          mobile: e.target.value,
                        });
                      }}
                      type="number"
                      className="form-control l-form-control mt-2"
                      placeholder="Mobile Number"
                      name="mobile"
                      required
                    />
                  </div>
                  <div className="form-group col-md-8">
                    <input
                      value={userContact.email}
                      onChange={(e) => {
                        setUserContact({
                          ...userContact,
                          email: e.target.value,
                        });
                      }}
                      type="email"
                      className="form-control l-form-control mt-2"
                      placeholder="Enter Your @mail Address"
                      name="email"
                      required
                    />
                  </div>

                  {userContactResponceStatus &&
                    (userContactResponceStatus == "success" ? (
                      <Alert style={{ marginTop: "2%" }} severity="success">
                        {userContactResponceStatus}!
                      </Alert>
                    ) : (
                      <Alert style={{ marginTop: "2%" }} severity="error">
                        {userContactResponceStatus}!
                      </Alert>
                    ))}
                </div>
                <div className="col-sm-6 offset-3 form-group mt-5">
                  <input
                    type="submit"
                    className="btn btn-primary px-3 py-2 l-submitbtn"
                    value="Submit"
                  />
                </div>
              </form>
              {/* <div className="row justify-content-center">
                        <div className="col-sm-8 align-items-center align-self-center">
                        <div className="form-group">
                                            <input 
                                            value={userContact.name} 
                                            onChange={(e) => {
                                                setUserContact({ 
                                                    ...userContact, 
                                                    name: e.target.value })
                                            }} 
                                            type="text" 
                                            className="form-control l-form-control" 
                                            placeholder="Enter Your Full Name" 
                                            name="name"
                                            />
                                            <input
                                             value={userContact.mobile} 
                                             onChange={(e) => {
                                                setUserContact({ 
                                                    ...userContact, 
                                                    mobile: e.target.value })
                                            }} 
                                            type="number" 
                                            className="form-control l-form-control mt-2" 
                                            placeholder="Mobile Number" 
                                            name="mobile"
                                            />
                                            <input 
                                            value={userContact.email} 
                                            onChange={(e) => {
                                                setUserContact({ 
                                                    ...userContact, 
                                                    email: e.target.value })
                                            }} 
                                            type="email" 
                                            className="form-control l-form-control mt-2"
                                            placeholder="Enter Your @mail Address" 
                                            name="email"
                                            />
                                        </div>
                        </div>
                    </div>

                    <div className="row justify-content-center text-center mt-3">
                            <div className="col-4 align-items-center align-self-center" onClick={(e) => handleForm(e)}>
                             <a type="submit" className="btn btn-primary btn-lg l-btn-2">
                                <span className="l-contact text-capitalize">contact</span>
                             </a>
                            </div>
                    </div>

                        {userContactResponceStatus && (userContactResponceStatus == 'success' ?
                            <Alert style={{ marginTop: '2%' }} severity="success">{userContactResponceStatus}!</Alert> :
                            <Alert style={{ marginTop: '2%' }} severity="error">{userContactResponceStatus}!</Alert>)} */}
            </div>
            <div className="col-md-5 align-items-center align-self-center">
              <img src={img13} alt="start your sucess  story" className="l-img-13" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;



// import React, {useState} from "react";
// import "./landing.css";
// // import {useNavigate } from 'react-router-dom';
// import img1 from "../../../img/1c70b8c98a50c585d45bad9ea0265e2f.gif";
// import img2 from "../../../img/0792d5b8b78f894dca91c1d05b528632.gif";
// import img3 from "../../../img/Rectangle 4312.svg";
// import img4 from "../../../img/Girl with tablet and working process on desktop.svg";
// import img5 from "../../../img/snowball.svg";
// import img6 from "../../../img/businesswoman in blue suit with phone looking aside.svg";
// import img7 from '../../../img/Icon.svg';
// import img8 from '../../../img/Saly-43.svg';
// import img9 from '../../../img/Hoedi1.jpg';
// import img10 from "../../../img/pavan kumar.JPG";
// import img12 from "../../../img/Rectangle 4327.png";
// import img13 from "../../../img/Man chatting on dating site.svg";
// import img11 from '../../../img/Godfree.jpeg';
// import img14 from '../../../img/Rectangle 4328.png';
// import img15 from '../../../img/Ellipse 3 (1).png';
// import img16 from '../../../img/Ellipse 5.png';
// import video from '../../pages/Video/qs video.mp4';
// import { useSelector, useDispatch, } from 'react-redux'
// import { editUserEmail, removeUserContactResponceStatus, userContactPost } from "../../../redux/reducer";
// import { useNavigate } from "react-router-dom";
// import Alert from '@mui/material/Alert';

// const Landing = () => {
//     const { userContactResponceStatus,userEmail } = useSelector(store => store.userContact)

//         const [userContact, setUserContact] = useState({
//             name: null,
//             mobile: null,
//             email: userEmail || null
           
//         });
    
//         const [wait, setwait] = useState(false)
    
//         const dispatch = useDispatch()
//         let navigation = useNavigate();

//         const PHONE_REGEXP = /^[6789]\d{9}$/;
    
//         if (userContactResponceStatus && wait) {
//             setTimeout(() => {
//                 dispatch(removeUserContactResponceStatus())
//             }, 3000)
//             setwait(false)
//         }
//     const handleForm = (e) => {
//         console.log(userContactPost(userContact));
//           e.preventDefault();
//          if (!PHONE_REGEXP.test(+userContact.mobile))
//              return alert("Please enter a valid phone number");
//            dispatch(userContactPost(userContact))
//            dispatch(editUserEmail(userContact.email))
//            setwait(!wait)
//            setUserContact({
//                name: null,
//                mobile: null,
//                email: null
              
//       });
  
//       e.target.name.value = "";
//       e.target.mobile.value = "";
//       e.target.email.value = "";
      
// }

//   return (
//     <>
//       <div className="main-wrapper">
//         <div className="container-fluid">
//             <div className="row justify-content-center">
//                 <div className="row justify-content-center mt-5">
//                     <div className="col align-items-center align-self-center">
//                         <img src={img3} alt="img3" className="l-img-3" />        
//                     </div>
//                 </div>
//                 <div className="row justify-content-center l-tr">
//                     <div className="col-md-6 align-items-center align-self-center l-content-para">
//                         <div className="row justify-content-center">
//                             <h1 className="l-heading text-capitalize">
//                                 digital transformation with <span style={{color: "#FDA055"}}> qurinom solutions</span>
//                             </h1>
//                         </div>
//                         <div className="row justify-content-center mt-3 mt-md-0">
//                             <p className="la-para">
//                             Qurinom Solutions is a worldwide product and service-based IT start-up armed with innovative R&D, implementation, and rapid delivery. We specialise in Artificial Intelligence, IoT and Embedded Systems based Android 
//                             & IOS Mobile Applications, UX/UI Modernisation, Cloud & Digital Transformation, Healthcare Services, Structural & Interior Design, and we also provide hedge clients with Digital Marketing & Consultancy in cross-functional Domains.
//                             </p>
//                         </div>
//                         <div className="row justify-content-center mt-5">
//                             <div className="col-sm-6 align-items-center align-self-center text-center">
//                                 <a href="/contactus" className="btn btn-lg btn-warning l-btn-1">
//                                     <span className="l-gs text-capitalize">get started</span>
//                                 </a>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col-md-6 align-items-center align-self-center">
//                         <img src={img4} alt="img4" className="l-img-4 mt-5 mt-md-0" />
//                     </div>
//                 </div>
//             </div>
//             <div className="row justify-content-between">
//                 <div className="col-sm-2 align-items-start align-self-start">
//                     <img src={img5} alt="img5" className="l-img-5 mt-5 mt-sm-0" />
//                 </div>
//                 <div className="col-sm-6 align-items-center text-center wqs-col">
//                     <h1 className="l-wqs text-capitalize">
//                         why qurinom solutions?
//                     </h1>
//                     <div>
//                         <img src={img1} alt="img1" className="l-img-1"/>
//                     </div>
//                     <p className="l-wqs-para">
//                         We will help a client's problems to develop the products they have with high quality
//                     </p>
//                     <a href="/products" className="l-wqs-link text-decoration-underline">
//                         Learn more about our plans
//                     </a>
//                 </div>
//                 <div className="col-sm-4 align-items-center align-self-center">
//                     <img src={img6} alt="img6" className="l-img-6 offset-9 offset-sm-4 offset-lg-6" />
//                 </div>
//             </div>
//             <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-5 g-4 mt-2 l-cards-gap justify-content-center">
//                 <div className="col">
//                     <div class="card h-100 l-cards">
//                         <div className="row g-3">
//                             <div className="col-3 align-items-start align-self-start mt-4">
//                                 <p className="l-num">01</p>
//                             </div>
//                             <div className="col-9 align-items-center align-self-center">
//                                 <h5 className="card-title l-dcc text-capitalize">
//                                 	Digital Core Capabilities
//                                 </h5>
//                             </div>
//                         </div>  
//                         <div class="card-body" style={{backgroundColor: "#E6F0F3"}}>
//                             <p className="card-text l-t1">
//                             we creatively organize and provide best services with our optimal capabilities.
//                             </p> 
//                         </div>
//                     </div>
//                 </div>
//                 <div className="col">
//                     <div class="card h-100 l-cards">
//                         <div className="row g-0">
//                             <div className="col-3 align-items-start align-self-start mt-4">
//                                 <p className="l-num">02</p>
//                             </div>
//                             <div className="col-9 align-items-center align-self-center">
//                                 <h5 className="card-title l-dcc text-capitalize">
//                                 	Customer Centric
//                                 </h5>
//                             </div>
//                         </div>  
//                         <div class="card-body" style={{backgroundColor: "#E8FFFB"}}>
//                             <p className="card-text l-t1">
//                             we go to great lengths to meet the expectations of our clients and improve them accordingly.
//                             </p> 
//                         </div>
//                     </div>
//                 </div>
//                 <div className="col">
//                     <div class="card h-100 l-cards">
//                         <div className="row g-0">
//                             <div className="col-3 align-items-start align-self-start mt-4">
//                                 <p className="l-num">03</p>
//                             </div>
//                             <div className="col-9 align-items-center align-self-center">
//                                 <h5 className="card-title l-dcc text-capitalize">
//                                 	Integrity
//                                 </h5>
//                             </div>
//                         </div>  
//                         <div class="card-body" style={{backgroundColor: "#EDFBF3"}}>
//                             <p className="card-text l-t1">
//                              we believe in honesty with our clients and we uphold our integrity as per industrial standards and global principles.
//                             </p> 
//                         </div>
//                     </div>
//                 </div>
//                 <div className="col">
//                     <div class="card h-100 l-cards">
//                         <div className="row g-0">
//                             <div className="col-3 align-items-start align-self-start mt-4">
//                                 <p className="l-num">04</p>
//                             </div>
//                             <div className="col-9 align-items-center align-self-center">
//                                 <h5 className="card-title l-dcc text-capitalize">
//                                 	Keeping ahead
//                                 </h5>
//                             </div>
//                         </div>  
//                         <div class="card-body" style={{backgroundColor: "#FBEFEE"}}>
//                             <p className="card-text l-t1">
//                             we help our clients to keep moving forward in this fast changing world.
//                             </p> 
//                         </div>
//                     </div>
//                 </div>                
//             </div>
//             <div className="row justify-content-start">
//                 <div className="col-sm-6 align-items-center align-self-center">
//                     <img src={img2} alt="img2" className="l-img-2 mt-5" />
//                 </div>
//             </div>
//             <div className="row justify-content-center mt-5 mt-lg-0">
//                 <div className="col-sm-8 align-items-center align-self-center">
//                     <h3 className="l-os text-capitalize text-center">our services</h3>
//                 </div>
//             </div>
//             <div className="row g-5 mt-1 justify-content-center pb-5">
//                 <div className="col-md-3">
//                     <div className="card l-card l-bg-1 text-center">
//                         <img src={img7} alt="img7" className="l-img-7" />
//                         <div className="card-body">
//                             <h3 className="l-fc card-title text-capitalize">
//                                 free consultation
//                             </h3>
//                             <p className="card-text l-t2">
//                                 we are here to help you with free consultations and to help you understand the concepts as well.
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="col-md-3">
//                     <div className="card l-card l-bg-2 text-center">
//                         <img src={img7} alt="img7" className="l-img-7" />
//                         <div className="card-body">
//                             <h3 className="l-ep card-title text-capitalize">
//                             	Quick estimates
//                             </h3>
//                             <p className="card-text l-t2">
//                             we help our clients to estimate their budgets and help them with all our resources.
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="col-md-3">
//                     <div className="card l-card l-bg-1 text-center">
//                         <img src={img7} alt="img7" className="l-img-7" />
//                         <div className="card-body">
//                             <h3 className="l-qe card-title text-capitalize">
//                             	Easy payments 
//                             </h3>
//                             <p className="card-text l-t2">
//                             we make easy payments and there are no long waits for money transfer.
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="col-md-3">
//                     <div className="card l-card l-bg-2 text-center">
//                         <img src={img7} alt="img7" className="l-img-7" />
//                         <div className="card-body">
//                             <h3 className="l-ep card-title text-capitalize">
//                             	No more long waits
//                             </h3>
//                             <p className="card-text l-t2">
//                             we provide our service with utmost speed and perfection.
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//              </div>
 
//             <div className="row justify-content-center mt-5">
//                 <div className="col-sm-8 align-items-center align-self-center text-center">
//                     <h4 className="l-oct text-capitalize">
//                         our creative team
//                     </h4>
//                 </div>
//             </div>
//             <div className="row justify-content-center mt-sm-4 mt-md-0">
//             <div className="col-sm-2 align-items-start align-self-start">
//                     <img src={img12} alt="img12" className="l-img-12" />
//                 </div>
//                 <div className="col-sm-10 align-items-center align-self-center">
//                     <p className="l-para-1">
//                         From bad websites that aren’t representative of your business. Its time to stop wasting money on stinky marketing. Our Creative Team will help you look good, connect better with your clients, and up your sales game.
//                     </p>
//                 </div>
//             </div>
//             <div className="row g-5 mt-5 mt-lg-0 container">
//                 <div className="col-md-4" >
//                     <div className="card l-cards text-center">
//                         <img src={img10} alt="img10" className="l-img-10 card-img-top" />
//                         <div className="card-body align-self-center">
//                             <h5 className="card-title text-capitalize l-pk">pavan kumar</h5>
//                             <p className="card-text l-t3">Founder & CEO</p>
//                         </div>
//                         <div className="card-footer align-self-center">
//                             <a href="https://www.facebook.com/qurinomsolutions/" className="card-link"><i className="fa-brands fa-facebook-f"></i></a>
//                             <a href="https://www.instagram.com/" className="card-link"><i className="fa-brands fa-instagram"></i></a>
//                             <a href="https://twitter.com/qurinom?s=08" className="card-link"><i className="fa-brands fa-twitter"></i></a>
//                             <a href="https://www.linkedin.com/company/qurinomsolutions" className="card-link"><i className="fa-brands fa-linkedin-in"></i></a>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="col-md-4">
//                     <div className="card l-cards text-center">
//                         <img src={img9} alt="img9" className="l-img-9 card-img-top" />
//                         <div className="card-body align-self-center">
//                             <h5 className="card-title text-capitalize l-hpw">hoedi p. wijono</h5>
//                             <p className="card-text l-t3">Executive Partner</p>
//                         </div>
//                         <div className="card-footer align-self-center">
//                             <a href="https://www.facebook.com/qurinomsolutions/" className="card-link"><i className="fa-brands fa-facebook-f"></i></a>
//                             <a href="https://www.instagram.com/" className="card-link"><i className="fa-brands fa-instagram"></i></a>
//                             <a href="https://twitter.com/qurinom?s=08" className="card-link"><i className="fa-brands fa-twitter"></i></a>
//                             <a href="https://www.linkedin.com/company/qurinomsolutions" className="card-link"><i className="fa-brands fa-linkedin-in"></i></a>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="col-md-4">
//                     <div className="card l-cards text-center">
//                         <img src={img11} alt="img11" className="l-img-11 card-img-top" />
//                         <div className="card-body align-self-center">
//                             <h5 className="card-title text-capitalize l-gd">godfree dzebu</h5>
//                             <p className="card-text l-t3">CTO (Technology Director)</p>
//                         </div>
//                         <div className="card-footer align-self-center">
//                             <a href="https://www.facebook.com/qurinomsolutions/" className="card-link"><i className="fa-brands fa-facebook-f"></i></a>
//                             <a href="https://www.instagram.com/" className="card-link"><i className="fa-brands fa-instagram"></i></a>
//                             <a href="https://twitter.com/qurinom?s=08" className="card-link"><i className="fa-brands fa-twitter"></i></a>
//                             <a href="https://www.linkedin.com/company/qurinomsolutions" className="card-link"><i className="fa-brands fa-linkedin-in"></i></a>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className="row justify-content-center g-2 align-baseline mt-lg-5">
//                 <video src={video} width="750" height="500" className="l-video" controls autoPlay muted>
//                 </video>
//             </div>
//             <div className="row bg-soft-info justify-content-around mt-5 mb-5">
//                 <div className="col-md-7 align-items-center align-self-center text-center py-md-3">
//                     <div className="row justify-content-center mt-5 mt-md-2 pb-3">
//                         <div className="col-sm-8 col-md-10 align-items-center align-self-center">
//                             <h2 className="l-sysst text-capitalize">
//                                 start your success story today
//                             </h2>
//                         </div>
//                     </div>
//                     <form onSubmit={handleForm}>
//                 <div className="row justify-content-center">
//                 <div className="form-group col-md-8">
//                              <input 
//                                             value={userContact.name} 
//                                             onChange={(e) => {
//                                                 setUserContact({ 
//                                                     ...userContact, 
//                                                     name: e.target.value })
//                                             }} 
//                                             type="text" 
//                                             className="form-control l-form-control mt-2"
//                                             placeholder="Enter Your Name" 
//                                             name="name"
//                                             required 
//                                             />
//                              </div>
//                                  <div className="form-group col-md-8">
//                                        <input
//                                              value={userContact.mobile} 
//                                              onChange={(e) => {
//                                                 setUserContact({ 
//                                                     ...userContact, 
//                                                     mobile: e.target.value })
//                                             }} 
//                                             type="number" 
//                                             className="form-control l-form-control mt-2" 
//                                             placeholder="Mobile Number" 
//                                             name="mobile"
//                                             required 
//                                             />
//                              </div>
//                              <div className="form-group col-md-8">
//                              <input 
//                                             value={userContact.email} 
//                                             onChange={(e) => {
//                                                 setUserContact({ 
//                                                     ...userContact, 
//                                                     email: e.target.value })
//                                             }} 
//                                             type="email" 
//                                             className="form-control l-form-control mt-2"
//                                             placeholder="Enter Your @mail Address" 
//                                             name="email"
//                                             required 
//                                             />
//                              </div>
//                              <div className="col-sm-6 form-group mt-5">
//                     <input
//                       type="submit"
//                       className="btn btn-primary px-3 py-2 l-submitbtn"
//                       value="Submit"
//                     />
//                   </div>
                 
//                   {userContactResponceStatus && (userContactResponceStatus == 'success' ?
//                             <Alert style={{ marginTop: '2%' }} severity="success">{userContactResponceStatus}!</Alert> :
//                             <Alert style={{ marginTop: '2%' }} severity="error">{userContactResponceStatus}!</Alert>)}
//                 </div>
                
//               </form>
//                 </div>
//                 <div className="col-md-5 align-items-center align-self-center">
//                     <img src={img13} alt="img13" className="l-img-13" />
//                 </div>
//             </div>
//             </div>
//         </div>
//     </>
//   );
// };

// export default Landing;




import React from 'react';
import Logo from "../../img/logo.png";
import './footer.css';
import { Link } from 'react-router-dom';

export function Footer() {

  return (
      <footer className="footer-section">
        <div className="container">
            <div className="footer-cta pt-4 pb-2">
                <div className="row">
                    <div className="col-md-4 mb-30">
                      <div classNameName='row'>
                        <div className="single-cta">
                            <i className="fas fa-map-marker-alt"></i>
                            <div className="col-md-8 cta-text text-capitalize">
                                <h4>Find us</h4>
                                <span>Jakarta (Indonesia), south africa (Johannesburg), Singapore, Hyderabad</span>
                            </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 mb-30">
                        <div className="single-cta">
                            <i className="fas fa-phone"></i>
                            <div className="cta-text">
                                <h4>Call us</h4>
                                <span>+27833848842 / +919490684932</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-30">
                        <div className="single-cta">
                            <i className="far fa-envelope-open"></i>
                            <div className="cta-text">
                                <h4>Mail us</h4>
                                <span>consulting@qurinomsolutions.com</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-content pt-5 pb-5">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 mb-50">
                        <div className="footer-widget">
                            <div className="footer-logo">
                                <Link to={"/"}><img src={Logo} className="img-fluid" alt="logo" /></Link>
                            </div>
                            <div className="footer-text">
                                <p>Qurinom Solutions is a global product cum service-based IT start up empowered with Innovative Research & Development, 
                                    Implementation and Rapid Delivery. We specialise in Artificial Intelligence, IoT and Embedded Systems based Android & IOS Mobile Applications, UX/UI Modernisation, Cloud & Digital Transformation, Healthcare Services, Structural & Interior Design and also render services for hedge clients over Digital Marketing & Consultancy in cross-functional Domains.</p>
                            </div>
                            <div className="footer-social-icon">
                                <span>Follow us</span>
                                <Link to={"https://www.facebook.com/qurinomsolutions/"}><i className="fab fa-facebook-f facebook-bg"></i></Link>
                                <Link to={"https://twitter.com/qurinom?s=08"}><i className="fab fa-twitter twitter-bg"></i></Link>
                                <Link to={"https://www.instagram.com/"}><i className="fab fa-instagram instagram-bg"></i></Link>
                                <Link to={"https://www.linkedin.com/company/qurinomsolutions"}><i className="fab fa-linkedin linkedin-bg"></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 mb-50">
                        <div className="footer-widget">
                            <div className="footer-widget-heading">
                                <h3>Subscribe</h3>
                            </div>
                            <div className="footer-text mb-25">
                                <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                            </div>
                            <div className="subscribe-form">
                                <form>
                                    <input type="email" placeholder="Email Address" />
                                    <button><i className="fab fa-telegram-plane"></i></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="copyright-area">
            <div className="container">
                <div className="row">
                    <div className="copyright-text text-center">
                        <p>Copyright &copy; 2022, All Rights Reserved</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    )
}
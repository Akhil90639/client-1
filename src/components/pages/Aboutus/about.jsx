import React from 'react';
import './about.css';
import img1 from '../../../img/about.jpg';
const Aboutus = () => {
    return (
        <div className="aboutus-section">
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <div className="aboutus">
                        <h2 className="aboutus-title pb-5">About Us</h2>
                        <p className="aboutus-text"> In these chaotic times, anytime we are faced with a problem or require a new product, we search for it online. Most of the time, the product we're looking for is right next door, but we're not aware of it, or we want to feel
                            the product we're going to buy before we buy it, or we need it right away. So, to address these difficulties, we're launching a new product called SHOWCASE, which will provide us access to all of the local retailers in
                            our area and allow us to buy anything we need at our convenient locations.</p>
                        <p className="aboutus-text"></p>
                        {/* <a className="aboutus-more" href="#">read more</a> */}
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="aboutus-banner">
                        <img src={img1} alt="aboutus" className='a-img' />
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="feature pt-5">
                        <div className="feature-box pb-4">
                            <div className="clearfix">
                                <div className="feature-content">
                                    <h4>In these chaotic times, anytime we are faced with a problem or require a new product, we search for it online. Most of the time
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className="feature-box pb-4">
                            <div className="clearfix">
                                <div className="feature-content">
                                    <h4>In these chaotic times, anytime we are faced with a problem or require a new product, we search for it online. want to feel</h4>
                                </div>
                            </div>
                        </div>
                        <div className="feature-box">
                            <div className="clearfix">
                                <div className="feature-content">
                                    <h4>In these chaotic times, anytime we are faced with a problem or require a new product, we search for it online. Most of the want to feel</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Aboutus;

import React from 'react';
import './company.css';
import img1 from '../../../img/Group171.svg';
import img2 from '../../../img/Group12.svg';
import img3 from '../../../img/Group7.svg';
import img4 from '../../../img/Group5.svg';
import img5 from '../../../img/Group5.svg';
import img6 from '../../../img/Group1.png';
import img7 from '../../../img/Group2.png';
import img8 from '../../../img/Group95.svg';
import img9 from '../../../img/Group108.svg';
import img10 from '../../../img/Group126.svg';
import img11 from '../../../img/Group115.svg';


export const Company = () => {
  return (
    <>
    <div className="banner">
         <div className="container">
             <div className="row justify-content-between align-items-center align-self-center">
                            <h1 className="co-heading text-capitalize text-center">
                            Our Organization
                            </h1>
                        <div className="row justify-content-center">
                            <p className="co-para text-muted">
                            At Qurinom Solutions, try to be synonymous and relevant to your brand. We provide assistance to brands like yours to expand digitally and on the web. We design exclusive modules which deal with web development, 
                            IT consulting, website appearance, and functioning. We are well versed with Embedded systems, healthcare, cloud migration, Digital alteration, AI, and loT.
                            </p>
                        </div>
                        <div className="row justify-content-center mt-3 pb-5">
                            <div className="col-sm-6 align-items-center align-self-center text-center">
                                <a href="/contactus" className="btn btn-lg btn-warning l-btn-1">
                                    <span className="l-gs text-capitalize">get started</span>
                                </a>
                            </div>
                        </div>
                        {/* <div className="row justify-content-center text-center">
                            <div className="col-4 align-items-center align-self-center pb-3">
                                <a href="/contactus" className="btn btn-lg btn-warning">
                                    <span className="text-capitalize">get started</span>
                                </a>
                            </div>
                        </div> */}
                        <div class="row">
                            <div className="col-md-6 offset-md-3">
                            <img src={img1} alt="cloud and digital" className='c-img1'/>
                            </div>
                        </div>
                </div>
    </div>
</div>
<div className="content-wrapper">
    <div className="container">
        <section className="row justify-content-between align-items-center align-self-center text-center pb-5">
            <div className="co-header co-left">
                <h2>Services and Experience </h2>
                <p className="section-subtitle text-muted">The mission of "QS" is to help its clients achieve their goals, personalise their experiences, provide an innovative environment, 
                and make a difference. Our deep commitment to customer projects drives us to offer solutions consistently.</p>
            </div>
            <div className="row pb-5">
                <div className="col-md-3">
                    <div className="features-width">
                        <img src={img2} alt="customers" className="img-icons" />
                        <h5 className="py-3">245<br />
                            Happy Customers</h5>
                        <p className="text-muted"></p>
                        <a href="#">
                            <p className="readmore-link"></p>
                        </a>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="features-width">
                        <img src={img3} alt="awards" className="img-icons" />
                        <h5 className="py-3">10+<br />
                            Winning Awards</h5>
                        <p className="text-muted"></p>
                        <a href="#">
                            <p className="readmore-link"></p>
                        </a>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="features-width">
                        <img src={img4} alt="serve" className="img-icons" />
                        <h5 className="py-3">15<br />
                            Industries Served</h5>
                        <p className="text-muted"></p>
                        <a href="#">
                        </a>
                    </div>
                </div> <div className="col-md-3">
                    <div className="features-width">
                        <img src={img5} alt="deliver" className="img-icons" />
                        <h5 className="py-3">155<br />
                            Projects Delivered
                            </h5>
                        <p className="text-muted"></p>
                        <a href="#">
                        </a>
                    </div>
                </div>
            </div>
        </section>
        <div className="row pb-5">
                <div className="col-md-7 co-left align-self-center" data-aos="fade-right">
                    <h3>Talent Can Be Found Anywhere</h3>
                    <div>
                        <p className="pt-3 text-muted">
                        You Can Find Talent Anywhere By fusing content, marketing, and sales, we are dedicated to delivering brand visibility, traffic, and leads for all of our services.
                         Each of our Business Hubs may be connected to any desired digital marketing programme.</p>
                        <p className="font-weight-medium text-muted"></p>
                    </div>
                </div>
                <div className="col-md-5 img-digital grid-margin grid-margin-lg-0" data-aos="fade-left">
                    <img src={img6} alt="leads" className='c-img1' />
                </div>
        </div>
            <div className="row align-items-center pb-5">
                <div className="col-md-5 pb-5" data-aos="fade-right">
                    <img src={img7} alt="dedicated" className='c-img1' /> 
                </div>
                <div className="col-md-7 co-left px-4" data-aos="fade-left">
                    <h3>Why Should You Pick Us?</h3>
                    <div className="p-0">
                        <p className="pt-3 text-muted">Qurinom Solutions, we are dedicated to aiding our clients with top-notch personalized solutions to their issues. We strive for excellence and put the best possible solutions on the table. 
                        In this era of digitalization, we customize we can design your brand considering a better ROI for you.</p>
                    </div>
                </div>
            </div>
        
        <section className="case-studies pb-5" id="case-studies-section">
            <div className="row grid-margin">
            <div className="col-12 col-md-6 col-lg-3 stretch-card mb-3 mb-lg-0" data-aos="zoom-in">
            <div className="card color-cards">
            <div className="card-body p-0">
            <div class="hoverwrap bg-primary">
                   < div className="co-card-image">
                      <img src={img8} className="case-studies-card-img" alt="website" />
                   </div>
                <div className="card-desc-box d-flex align-items-center justify-content-around">
                     <div class="hovercap">Through appealing designs for both websites and mobile applications, our extensive portfolio of UI/UX Solutions is committed to providing a distinctive digital experience.</div>
                </div>
            </div>
             </div>
           </div>
             <div className="card-details text-center pt-4">
                 <h5 className="m-0 pb-1">The creation of a website </h5>
             </div>
           </div>
           <div className="col-12 col-md-6 col-lg-3 stretch-card mb-3 mb-lg-0" data-aos="zoom-in">
            <div className="card color-cards">
            <div className="card-body p-0">
            <div class="hoverwrap1 bg-warning">
                   < div className="co-card-image">
                      <img src={img9} className="case-studies-card-img" alt="development" />
                   </div>
                <div className="card-desc-box d-flex align-items-center justify-content-around">
                     <div class="hovercap1"> We are converting the idea behind your business into a high-end, user-friendly mobile app for both Android and iOS.</div>
                </div>
               </div>
             </div>
           </div>
             <div className="card-details text-center pt-4">
                 <h5 className="m-0 pb-1">Development of websites</h5>
             </div>
           </div>
           <div className="col-12 col-md-6 col-lg-3 stretch-card mb-3 mb-lg-0" data-aos="zoom-in">
            <div className="card color-cards">
            <div className="card-body p-0">
            <div class="hoverwrap2"style={{backgroundColor: "violet"}}>
                   < div className="co-card-image">
                      <img src={img10} className="case-studies-card-img" alt="marketing" />
                   </div>
                <div className="card-desc-box d-flex align-items-center justify-content-around">
                     <div class="hovercap2"> In the era of viral trends, we develop and promote brands with superior ROI-driven online marketing solutions that cover a wide range of digital disciplines, enabling your business to take off with a flight!</div>
                </div>
               </div>
             </div>
           </div>
             <div className="card-details text-center pt-4">
                 <h5 className="m-0 pb-1">Internet-based advertising</h5>
             </div>
           </div>
           <div className="col-12 col-md-6 col-lg-3 stretch-card mb-3 mb-lg-0" data-aos="zoom-in">
            <div className="card color-cards">
            <div className="card-body p-0">
            <div class="hoverwrap3 bg-success">
                   < div className="co-card-image">
                      <img src={img11} className="case-studies-card-img" alt="it" />
                   </div>
                <div className="card-desc-box d-flex align-items-center justify-content-around">
                     <div class="hovercap3">A one-stop shop for all of your complex business IT Consultancy issues is Qurinom Solution.</div>
                </div>
               </div>
             </div>
           </div>
             <div className="card-details text-center pt-4">
                 <h5 className="m-0 pb-1"> IT Consulting </h5>
             </div>
           </div>
            </div>
        </section>
                </div>
                </div>
                </>

  )
}


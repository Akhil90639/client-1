import React from "react";
import "./marketing.css";
import Img1 from "../../../img/digi-marketing.png";
import Img5 from "../../../img/img-5.jpg";
import Img6 from "../../../img/Frame.svg";
import Img8 from "../../../img/Frame (1).svg";
import Img10 from "../../../img/Group 1000001643.png";
import Img11 from "../../../img/Group 1000001647.png";
import Img12 from "../../../img/seo.jpeg";
import Img13 from "../../../img/woman-holding-snapchat-logo-with-his-friends-showing-thumbup-sign.jpg";
import Img14 from "../../../img/email.jpeg";
import Img15 from "../../../img/creative-design-designer-man-working.jpg";
import Img16 from "../../../img/Group (4).png";

const digitalmarketing = () => {
  return (
    <>
      <div className="main-wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="container">
              <div className="row">
                <div className="col-md-6 align-items-center align-self-center">
                  <div className="row">
                    <h1 className="m-heading text-capitalize mt-5 text-center">
                      digital marketing
                    </h1>
                  </div>
                  <div className="row">
                    <p className="h-para mt-3">
                    In the era of viral trends, we develop and promote brands with superior ROI-driven online marketing solutions that cover a wide range of digital disciplines, enabling your business to take off with a flight!
                    </p>
                  </div>
                </div>
                <div className="col-md-6 justify-content-center">
                  <img src={Img1} alt="pramote" className="m-img-1" />
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 col-lg-12 col-sm-6 align-items-center">
                  <div className="row justify-content-center">
                    <h3 className="wwd text-capitalize pb-3">what we do?</h3>
                    <p className="wwd-para">
                      We’re storytellers, brand designers and digital strategic
                      leaders you’ve been looking for We’re
                      <span classNameName="m-headin">
                        The Qurinom Solutions
                      </span>
                      . The existence of QS is to make you look incredible, to
                      tell your story, to bind you with your audience and to
                      deliver what you need. QS makes sure that you can surpass
                      your goal in the digital world. Here we will integrate
                      with your business, product and goal.
                    </p>
                  </div>
                  <div className="row justify-content-center">
                    <h3 className="branding text-capitalize pb-3">branding</h3>
                    <p className="b-para">
                      Branding is an identity. To classNameify your business for
                      your targeted customers we can provide you a unique
                      branding.To stand out in today's online ecosystem a
                      company needs an awe-inspiring brand. Qurinom solutions
                      adds the touch of creativity your brand needs to
                      complement the growth of your company. Creating and
                      evolving brands that can be believed in, touching hearts
                      and influencing minds.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                {/* <div className="col-md-10"> */}
                <h3 className="iqswp text-capitalize pb-5">in QS, we provide</h3>
                {/* </div> */}
                {/* <div className="col-md-2">
                  <img src={Img5} alt="img5" className="m-img-5" />
                </div> */}
              </div>
              <div className="row align-items-center pb-3">
                <div className="col-md-6">
                  <div className="img-grp-1">
                  <img src={Img10} className="m-img-10" alt="business" />
                  </div>
                </div>
                <div className="col-md-6">
                  <h3 className="story text-capitalize pb-3 align-self-center text-center">story telling</h3>
                  <p className="m-para">
                    Every business or product has a story from the concept of
                    creation to moment of existence. It can be simple, light
                    hearted or with difficulties and heart wrenching. But
                    everything has its own uniqueness which no other business
                    has. We can make that story reachable to the audience in a
                    unique and approachable way which can help to ingrate it
                    into the customers forever
                  </p>
                </div>
              </div>
              <div className="row align-items-center align-self-center pb-3">
                <div className="col-md-6">
                  <h3 className="logo text-capitalize pb-3 text-center">
                    logo & visual identity
                  </h3>
                  <p className="l-para">
                    Logo makes us remember who we are and we create that in a
                    way such that only we can be remembered when it has been
                    seen anywhere. We createappeasing and eye catching identity
                    for the company which the people can relate and we will
                    spread is like a glitter
                  </p>
                </div>
                <div className="col-md-6">
                  <div className="img-grp-2">
                    <img src={Img6} alt="identity" className="m-img-6" />
                  </div>
                </div>
              </div>
              <div className="row align-items-center">
                <div className="col-md-6">
                  <div className="img-grp-3">
                    <img src={Img8} alt="direction" className="m-img-8" />
                  </div>{" "}
                </div>
                <div className="col-md-6">
                  <h3 className="naming text-capitalize pb-3 text-center">naming & tag lines</h3>
                  <p className="n-para">
                    The naming represents the entire phenomenal operation and we
                    are pretty good with catchy names and deeper meaning. The
                    tagline givesthe direction of the flow of work or motto of
                    the business operations, so we provide tag lines which can
                    make your brand understand even better with simple and
                    remarkable words
                  </p>
                </div>
              </div>
              <div className="row align-items-center pb-3">
                <div className="col-md-6">
                  <h3 className="research text-capitalize  pb-3 text-center">
                    research & strategy
                  </h3>
                  <p className="r-para">
                    We will study about your strengths, weakness, opportunities
                    and threats in the current market place and adopt a strategy
                    according to the information and the research we have done
                  </p>
                </div>
                <div className="col-md-6">
                  <div className="img-grp-4">
                    <img src={Img11} className="m-img-11" alt="research" />
                  </div>
                </div>
              </div>
              <div className="row align-items-center pb-3">
                <div className="col-md-6 pb-3">
                  <div className="img-grp-3">
                    <img src={Img12} alt="search engine" className="m-img-12" />
                  </div>
                </div>
                <div className="col-md-6">
                  <h3 className="seo text-capitalize pb-3 text-center">
                    {" "}
                    Search Engine Optimization (SEO)
                  </h3>
                  <p className="seo-para">
                    SEO rules changes regularly and need a constant update. We
                    are always ready to adapt to those changes and we play fair
                    and use white hat SEO techniques and never jeopardize your
                    business. Your ranking for specific search terms will be
                    increased here along with a SEO specialist review of the
                    keywords your website is currently ranking for. We even
                    conduct a research for most searched and additional keywords
                    that can be used to catch with the changing rankings. We
                    provide Key word research and strategy, Technical SEO, Back
                    link, etc. We provide SEO friendly search content for blogs,
                    or products, or even for pre existing content.
                  </p>
                </div>
              </div>

              <div className="row align-items-center pb-3">
                <div className="col-md-6">
                  <h3 className="smo text-capitalize pb-3 text-center">
                  Optimization of social media 
                  </h3>
                  <p className="smo-para">
                    SMO is the standard for the digital marketing. We will use
                    popular social media platforms like facebook, twitter,
                    instagram, youtube snapchat, pintrest etc. for digital
                    marketing. Through this we will increase the digital
                    presence of the company. We will create a tailor made
                    content for digital marketing and helps to optimize the
                    sales.
                  </p>
                </div>
                <div className="col-md-6">
                  <div className="img-grp-2">
                    <img src={Img13} alt="social media" className="m-img-13" />
                  </div>
                </div>
              </div>

              <div className="row align-items-center pb-3">
                <div className="col-md-6 pb-3">
                  <div className="img-grp-3">
                    <img src={Img14} alt="email" className="m-img-14" />
                  </div>
                </div>
                <div className="col-md-6">
                  <h3 className="e-mark text-capitalize pb-3 text-center">Email Promotion </h3>
                  <p className="e-mark-para">
                    The most common type of marketing in today’s digital world
                    forbrand awarness and the most neglected one by the
                    customers is email marketing. So we make this marketing
                    strategy not only novel but also creative such that they
                    will reach the targeted audience in a impressionable manner.
                    We do this mainly by:
                    <ul className="li1">
                      <li>Creating strong subject lines</li>
                      <li>Optimizing email deliverability</li>
                      <li>With Comprehensive strategy</li>
                    </ul>
                  </p>
                </div>
              </div>

              <div className="row align-items-center pb-4">
                <div className="col-md-6">
                  <h3 className="graphic text-capitalize pb-3 text-center">Designs for Graphics</h3>
                  <p className="graphic-para">
                    Design is the silent ambassador of a company. We mix brand
                    strategy with a splash of creativity. We design experiences
                    that speak to the heart and create authentic emotional
                    connections that can last a lifetime. We create innovative
                    design in every updates and content.
                  </p>
                </div>
                <div className="col-md-6">
                  <div className="img-grp-2">
                    <img src={Img15} alt="graphic" className="m-img-15" />
                  </div>
                </div>
              </div>

              <div className="row align-items-center pb-5">
                <div className="col-md-6 pb-4">
                  <div className="img-grp-3">
                    <img src={Img16} alt="influencer" className="m-img-16" />
                  </div>
                </div>
                <div className="col-md-6">
                  <h3 className="inf-mark text-capitalize pb-3 text-center">
                  Marketing Through Influencers
                  </h3>{" "}
                  <p className="inf-mark-para">
                    Most of the influencers can only help to reach the brand to
                    the customers but we will ensure that the product is not
                    only reachable to the targeted audience but its also scale
                    able by choosing appropriate influencers who have command
                    and connectivity to their followers and also in line with
                    the brand values.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default digitalmarketing;

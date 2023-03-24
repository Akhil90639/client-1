import React from "react";
import img1 from '../../../img/image 323.svg';
import Img2 from "../../../img/s-img-2.png";
import Img3 from "../../../img/s-img-3.png";
import Img4 from "../../../img/s-img-4.png";
import Img5 from "../../../img/s-img-5.png";
import Img6 from "../../../img/s-img-6.png";
import Img7 from "../../../img/s-img-7.png";
import Img8 from "../../../img/s-img-8.png";
import Img9 from "../../../img/s-img-9.png";
import Carousel from "react-elastic-carousel";
import './showcase.css';


export default function Showcase() {

return (

<main class="container-fluid">
  <div id="cards" class="rdneumorphism section">
    <div class="container">
    <div className="row justify-content-center">
                <div className="col-md-6 align-items-center mt-5">
                    <h1 className="s-heading text-center text-capitalize pb-3">
                        showcase
                    </h1>
                    <p className="s-para">
                        In these chaotic times, anytime we are faced with a problem or require a new product, we search for it online. Most of the time, the product we're looking for is right next door, but we're not aware of it, or we want to feel the product we're going to
                        buy before we buy it, or we need it right away. So, to address these difficulties, we're launching a new product called SHOWCASE, which will provide us access to all of the local retailers in our area and allow us to buy anything
                        we need at our convenient locations.
                    </p>
                    <p className="s-para">
                        Showcase is a website that connects customers with local businesses. The unique feature to highlight is that it categorizes vendors based on our GPS locations and allows us to explore available products or bookmark them for later access. We may communicate
                        with the sellers and receive the items we require directly from them.
                    </p>
                </div>
                <div className="col-md-6 align-items-center align-self-center">
                    <img src={img1} alt="showcase" className="s-img-1" />
                </div>
            </div>
            <div className="row mt-5 justify-content-start">
                <div className="col-6 align-items-center align-self-center">
                    <h3 className="s-sm-head text-capitalize">
                        benifits of showcase :
                    </h3>
                </div>
            </div>
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-2 g-5 py-5">
        <div class="col">
          <div class="card bg-primary h-100">
          <div className="card-body">
               <h5 className="text-capitalize text-center pt-3">connectivity to vendors</h5>
          </div>
          </div>
        </div>
        <div class="col">
          <div class="card bg-secondary h-100">
            <div class="card-body">
            <h5 className="text-capitalize text-center pt-3">GPS listing of vendors</h5>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card bg-success h-100">
          <div className="card-body">
                <h5 className="text-capitalize text-center pt-5">reliability in the listings and products</h5>
          </div>
          </div>
        </div>
        <div class="col">
          <div class="card bg-info h-100">
          <div className="card-body">
                <h5 className="text-capitalize text-center pt-3">grow online visibility form on all channels from one platform</h5>
          </div>
          </div>
        </div>
        <div class="col">
          <div class="card bg-warning h-100">
          <div className="card-body">
                  <h5 className="text-capitalize text-center pt-3">easy to approach or access</h5>
           </div>
          </div>
        </div>
        <div class="col">
          <div class="card bg-danger h-100">
          <div className="card-body">
                <h5 className="text-capitalize text-center pt-3">empowering local vendors</h5>
        </div>
          </div>
        </div>
        <div class="col">
          <div class="card bg-light h-100">
          <div className="card-body">
                  <h5 className="text-capitalize text-center pt-5">best segegration</h5>
          </div>
          </div>
        </div>
        <div class="col">
          <div class="card bg-dark h-100">
          <div className="card-body">
                 <h5 className="text-capitalize text-center pt-3">grow online visibility form on all channels from one platform</h5>
          </div>
          </div>
        </div>
      </div>
    </div>
    
  </div>

</main>
  //   <main>
  //   <div class="s-section-data">
  //     <h2 class="s-section-title">Cursos <br /> Online</h2>
  //     <p class="s-section-description">Programas en formato de video lecciones, ideal para quienes buscan destacar en el mercado laboral y quieren aprender nuevas habilidades para evolucionar profesionalmente.</p>
  //     <a href="#" class="s-btn">Ver todos los cursos</a>
  //   </div>
  //   <div class="cards-wrapper s-cards-wrapper">
  //     <div class="card s-card">
  //       <div class="s-card--data">
  //         <span class="s-card--months"> 5 meses</span>
  //         <h3 class="s-card--title">Diseno de interiores</h3>
  //         <span class="s-course-type">Curso</span>
  //       </div>
  //       <div class="s-card-img-wrapper">
  //         <img src="" alt="" />
  //       </div>
  //       <div class="s-card-img-deco">
  //     </div>
  //     </div>
  //     <div class="card s-card">
  //       <div class="s-card--data">
  //         <span class="s-card--months"> 5 meses</span>
  //         <h3 class="s-card--title">Diseno de interiores</h3>
  //         <span class="s-course-type">Curso</span>
  //       </div>
  //       <div class="s-card-img-wrapper">
  //         <img src="" alt="" />
  //       </div>
  //       <div class="s-card-img-deco deco-2">
  //     </div>
  //     </div>
  //     <div class="card s-card">
  //       <div class="s-card--data">
  //         <span class="s-card--months"> 5 meses</span>
  //         <h3 class="s-card--title">Diseno de interiores</h3>
  //         <span class="s-course-type">Curso</span>
  //       </div>
  //       <div class="s-card-img-wrapper">
  //         <img src="" alt="" />
          
  //       </div>
  //       <div class="s-card-img-deco deco-3">
  //     </div>
  //     </div>
  //     <div class="card s-card">
  //       <div class="s-card--data">
  //         <span class="s-card--months"> 5 meses</span>
  //         <h3 class="s-card--title">Diseno de interiores</h3>
  //         <span class="s-course-type">Curso</span>
  //       </div>
  //       <div class="s-card-img-wrapper">
  //         <img src="" alt="" />
          
  //       </div>
  //       <div class="s-card-img-deco deco-4">
  //     </div>
  //     </div>
  //     <div class="card s-card">
  //       <div class="s-card--data">
  //         <span class="s-card--months"> 5 meses</span>
  //         <h3 class="s-card--title">Diseno de interiores</h3>
  //         <span class="s-course-type">Curso</span>
  //       </div>
  //       <div class="s-card-img-wrapper">
  //         <img src="" alt="" /> 
          
  //       </div>
  //       <div class="s-card-img-deco deco-5">
  //     </div>
  //     </div>
  //     <div class="card s-card">
  //       <div class="s-card--data">
  //         <span class="s-card--months"> 5 meses</span>
  //         <h3 class="s-card--title">Diseno de interiores</h3>
  //         <span class="s-course-type">Curso</span>
  //       </div>
  //       <div class="s-card-img-wrapper">
  //         <img src="" alt="" />
          
  //       </div>
  //       <div class="s-card-img-deco deco-6">
  //     </div>
  //     </div>
  //   </div>
  // </main>
  );
}
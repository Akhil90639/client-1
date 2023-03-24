import React from "react";
import {useNavigate, Link } from 'react-router-dom';
import Logo from "../../img/logo.png";
// import img from '../../img/Rectangle 4310.png';
// import img1 from '../../img/Rectangle 4311.png';
import "./navbar.css";


const Navbar = () => {

  const navigation= useNavigate();

  return (
    <nav className="navbar navbar-expand-lg n-bag">
    <div className="container-fluid">
      <Link className="navbar-brand" to={"/"}>
        <img src={Logo} alt="img" width="100%" height="35" />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
    </div>

    <div className="nav-content">
      <div className="d-flex justify-content-end">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to={"/"}>Home</Link>
            </li>

            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle active"
                to={"/services"}
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Services                
              </Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to={"/services"}>Our Services</Link></li>
                <li><Link className="dropdown-item" to={"/uidesign"}>UX/UI Modernisation</Link></li>
                <li><Link className="dropdown-item" to={"/productdevelopment"}>Product Development</Link></li>
                <li><Link className="dropdown-item" to={"/digitalmarketing"}>Digital Marketing</Link></li>
                <li><Link className="dropdown-item" to={"/digitaltransformation"}>Digital Transformation</Link></li>
                <li><Link className="dropdown-item" to={"/healthcare"}>Health Care</Link></li>
                <li><Link className="dropdown-item" to={"/itconsulting"}>IT Consulting</Link></li>
                <li><Link className="dropdown-item" to={"/cloudcomputing"}>Cloud Migration</Link></li>                   
              </ul>
            </li>

            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle active"
                to={"/products"}
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Products
              </Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to={"/products"}>Our Products</Link></li>
                <li><Link className="dropdown-item" to={"/qdisplay"}>Q Display</Link></li>
                <li><Link className="dropdown-item" to={"/qhc"}>QHC</Link></li>
                <li><Link className="dropdown-item" to={"/biscuit"}>Biscuit</Link></li>
                <li><Link className="dropdown-item" to={"/showcase"}>Showcase</Link></li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle active"
                to={"/company"}
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Company
              </Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to={"/company"}>Our Company</Link></li>
                <li><Link className="dropdown-item" to={"/aboutus"}>About Us</Link></li>
                <li><Link className="dropdown-item" to={"/leadership"}>Leadership</Link></li>
                <li>
                  <Link className="dropdown-item" to={"/contactus"}>Contact Us</Link>
                </li>
              </ul>
              </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to={"/careers"}>Career</Link>
            </li>
            <li className="nav-item active">
              {/* <img className="nav-link" src={img} alt="img" id="google_translate_element"/> */}
              <a className="nav-link" id="google_translate_element">
              {/* <span>
                <img src={img} alt="img" />
                <img src={img1} alt="img1" />
              </span> */}
                </a>
            </li>
          </ul>
        </div>
      
      </div>
    </div>
  </nav>
    // <nav className="navbar navbar-expand-lg n-bag">
    //   <div className="container-fluid">
    //     <Link className="navbar-brand" to={"/"}>
    //       <img src={Logo} alt="" width="100%" height="35" />
    //     </Link>
    //     <button
    //       className="navbar-toggler"
    //       type="button"
    //       data-bs-toggle="collapse"
    //       data-bs-target="#navbarSupportedContent"
    //       aria-controls="navbarSupportedContent"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //       <span className="navbar-toggler-icon"></span>
    //     </button>
    //   </div>

    //   <div className="nav-content">
    //     <div className="d-flex justify-content-end">
    //       <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    //           <li className="nav-item">
    //             <Link className="nav-link active" to={'/'}>Home</Link>
    //           </li>

    //           <li className="nav-item dropdown">
    //             <Link
    //               className="nav-link dropdown-toggle active"
    //               to={"/services"}
    //               role="button" 
    //               data-bs-toggle="dropdown"
    //               aria-expanded="false"                 
    //             >
    //               Services                
    //             </Link>
    //             <ul className="dropdown-menu">
    //               <li><Link className="dropdown-item" to={"/services"}>Our Services</Link></li>
    //               <li><Link className="dropdown-item" to={"/uidesign"}>UX/UI Modernisation</Link></li>
    //               <li><Link className="dropdown-item" to={"/productdevelopment"}>Product Development</Link></li>
    //               <li><Link className="dropdown-item" to={"/digitalmarketing"}>Digital Marketing</Link></li>
    //               <li><Link className="dropdown-item" to={"/digitaltransformation"}>Digital Transformation</Link></li>
    //               <li><Link className="dropdown-item" to={"/healthcare"}>Health Care</Link></li>
    //               <li><Link className="dropdown-item" to={"/itconsulting"}>IT Consulting</Link></li>
    //               <li><Link className="dropdown-item" to={"/cloudcomputing"}>Cloud Migration</Link></li>                   
    //             </ul>
    //           </li>

    //           <li className="nav-item dropdown">
    //             <Link
    //               className="nav-link dropdown-toggle active"
    //               to={"/products"}
    //               role="button"
    //               data-bs-toggle="dropdown"
    //               aria-expanded="false"
    //             >
    //               Products
    //             </Link>
    //             <ul className="dropdown-menu">
    //               <li>
    //                 <Link className="dropdown-item" to={"/products"}>
    //                   Our Products
    //                 </Link>
    //               </li>
    //               <li>
    //                 <Link className="dropdown-item" to={"/qdisplay"}>
    //                   Q Display
    //                 </Link>
    //               </li>
    //               <li>
    //                 <Link className="dropdown-item" to={"/qhc"}>
    //                   QHC
    //                 </Link>
    //               </li>
    //               <li>
    //                 <Link className="dropdown-item" to={"/biscuit"}>
    //                   Biscuit
    //                 </Link>
    //               </li>
    //               <li>
    //                 <Link className="dropdown-item" to={"/showcase"}>
    //                   Showcase
    //                 </Link>
    //               </li>
    //             </ul>
    //           </li>

    //           <li className="nav-item dropdown">
    //             <Link
    //               className="nav-link dropdown-toggle active"
    //               to={"/company"}
    //               role="button"
    //               data-bs-toggle="dropdown"
    //               aria-expanded="false"
    //             >
    //               Company
    //             </Link>
    //             <ul className="dropdown-menu">
    //             <li>
    //                 <Link className="dropdown-item" to={"/company"}>
    //                   Our Company
    //                 </Link>
    //               </li>
    //               <li>
    //                 <Link className="dropdown-item" to={"/aboutus"}>
    //                   About Us
    //                 </Link>
    //               </li>
    //               <li>
    //                 <Link className="dropdown-item" to={"/leadership"}>
    //                   Leadership
    //                 </Link>
    //               </li>
    //               <li>
    //                 <Link className="dropdown-item" to={"/contactus"}>
    //                   Contact Us
    //                 </Link>
    //               </li>
    //             </ul>
    //           </li>
    //           <li className="nav-item">
    //             <Link className="nav-link active" aria-current="page" to={"/careers"}>Career</Link>
    //           </li>
    //           <li className="nav-item active">
    //             {/* <img className="nav-link" src={img} alt="img" id="google_translate_element"/> */}
    //             {/* <Link className="nav-link" id="google_translate_element">
                
    //             </Link> */}
    //           </li>
    //         </ul>
    //       </div>
        
    //     </div>
    //   </div>
    // </nav>
  );
};

export default Navbar;

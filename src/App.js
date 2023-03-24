import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar/navbar";
import {Footer} from './components/Footer/footer';
import './App.css';
import Landing from './components/pages/Landing/landing';
import Services from './components/pages/Services/Service';
import Qdisplay from './components/pages/Qdisplay/qdisplay';
import UIUX from './components/pages/UIUX/ui';
import {Cloudcomputing} from './components/pages/Cloudcomputing/cloud';
import Leadership from './components/pages/Leadership/leadership';
import QHC from './components/pages/QHC/qhc';
import Career from './components/pages/Career/career';
import Biscuit from './components/pages/Biscuit/biscuit';
import Aboutus from './components/pages/Aboutus/about';
import Productdevelopment from './components/pages/Product development/productdev';
import Digitalmarketing from './components/pages/Digital marketing/marketing';
import Showcase from './components/pages/Showcase/Showcase';
import ContactUs from './components/pages/ContactUs/contact';
import Itconsulting from './components/pages/Itconsulting/it';
import Products from './components/pages/Products/products';
import {Company} from './components/pages/Company/Company';
import Healthcare from './components/pages/Healthcare/Healthcare';
import Digitaltransformation from './components/pages/Digital Transformation/Digitaltransform';

function App() {
  const componentDidMount=()=>{
    (function (d, m) {
      var kommunicateSettings =
        { "appId": "1866d24e52cdc03c0b4f1bfd40734fb98", "popupWidget": true, "automaticChatOpenOnNavigation": true };
      var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
      s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
      var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
      window.kommunicate = m; m._globals = kommunicateSettings;
    })(document, window.kommunicate || {});
  }

  componentDidMount()
  return (
    <Router >
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Landing />} />
        <Route path='/services' element={<Services />} />
        <Route path='/qdisplay' element={<Qdisplay />} />
        <Route path='/uidesign' element={<UIUX />} />
        <Route path='/cloudcomputing' element={<Cloudcomputing />} />
        <Route path='/leadership' element={<Leadership />} />
        <Route path='/qhc' element={<QHC/>} />
        <Route path='/careers' element={<Career />} />
        <Route path='/biscuit' element={<Biscuit />} />
        <Route path='/aboutus' element={<Aboutus/>} />
        <Route path='/productdevelopment' element={<Productdevelopment/>} />
        <Route path='/digitalmarketing' element={<Digitalmarketing/>} />
        <Route path='/showcase' element={<Showcase/>} />
        <Route path='/contactus' element={<ContactUs/>} />
        <Route path='/itconsulting' element={<Itconsulting/>} />
        <Route path='/products' element={<Products />} />
        <Route path='/company' element={<Company />} />
        <Route path='/healthcare' element={<Healthcare />} />
        <Route path='/digitaltransformation' element={<Digitaltransformation />} />
       </Routes>
       <Footer />
       </Router>
  );
}

export default App;

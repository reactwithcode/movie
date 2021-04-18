import React from 'react';
import '../pages/Home.css';

import Polygon from "./Assets/brandLogo.png";
import Facebook1 from "./Assets/fb1.png";
import Pinterest1 from "./Assets/pint1.png";
import Instagram1 from "./Assets/ig1.png";
import GooglePlay from "./Assets/googlePlay.png";
import AppStore from "./Assets/appStore.png"
import Line1 from "./Assets/line1.svg";

function Footer() {
    return (
    <div className="footer container-fluid d-flex flex-wrap align-content-start">

      <div className="overlap-group container p-4">

        <div className="row">
          <div className="footer-brand col-lg-6 col-md-12 mb-4 mb-md-0">
            <div className="brand-logo-title">
              <img src={Polygon} alt="logo" style={{maxWidth: "80px", maxHeight: "60px"}}/>
              <h1 className="brand-title roboto-medium-white-36px">Meowme</h1>
            </div>
            <div className="brand-detail roboto-light-white-18px">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Facere officia hic optio dolorum, vitae adipisci ullam 
              consequuntur non, culpa quaerat nobis omnis veniam at. 
              Lorem Ipsum has been the industry&#39;standard</p>
            </div>
          </div>

          <div className="footer-about col-lg-3 col-md-6 mb-4 mb-md-0">
            <div className="about tentang roboto-light-white-20px">
              <a href="https://google.com/" style={{color: "var(--white)"}}>
                Tentang Kami
              </a>
            </div>
            <div className="about blog roboto-light-white-20px">
              <a href="https://google.com/" style={{color: "var(--white)"}}>
                Blog
              </a>
            </div>
            <div className="about layanan roboto-light-white-20px">
              <a href="https://google.com/" style={{color: "var(--white)"}}>
                Layanan
              </a>
            </div>
            <div className="about karir roboto-light-white-20px">
              <a href="https://google.com/" style={{color: "var(--white)"}}>
                Karir
              </a>
            </div>          
            <div className="about media roboto-light-white-20px">
              <a href="https://google.com/" style={{color: "var(--white)"}}>
                Pusat Media
              </a>
            </div>
          </div>

          <div className="footer-icon col-lg-3 col-md-6 mb-4 mb-md-0 ">
            <div className="download">
              <div className="download-text roboto-medium-white-20px">Download</div>
              <div className="download-icon">
                <a href="https://play.google.com">
                  <img src={GooglePlay} alt="GooglePlay" href="https://play.google.com" style={{maxWidth: "150px"}}/>
                </a>
                <a href="https://apple.com/app-store/">
                  <img src={AppStore} alt="AppStore" href="https://www.apple.com/app-store/" style={{maxWidth: "150px"}}/>
                </a>   
              </div>
            </div>
            <div className="socmed">
              <div className="socmed-text roboto-medium-white-20px">Social Media</div>
              <div className="socmed-icon">
                <a href="https://facebook.com/">
                  <img src={Facebook1} alt="FB" style={{maxWidth: "50px"}}/>
                </a>
                <a href="https://pinterest.com/">
                  <img src={Pinterest1} alt="Pint.." style={{maxWidth: "50px"}}/>
                </a>
                <a href="https://instagram.com/">
                  <img src={Instagram1} alt="IG" style={{maxWidth: "50px"}}/>
                </a>
              </div>
            </div>
          </div>

        </div>      
      
        <div className="line1">
          <img src={Line1} alt="..."/>
        </div>

        <div class="copyright text-center roboto-regular-normal-white-20px">
          Copyright © 2021-212 Meowme.&nbsp;&nbsp;All Rights Reserved
        </div>

      </div>
    </div>

  );
}

export default Footer;

import React from "react"
import {Helmet} from "react-helmet";

import profileImg from '../static/images/profile-img.jpg';

const Sidebar = () => (
  <header
    className="header"
  >
    <Helmet>
      <link rel="stylesheet" href="https://unpkg.com/boxicons@latest/css/boxicons.min.css"/>
      <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
    </Helmet>
    <div className="header_container">
      <div className="profile">
        <img src={profileImg} alt="" className="img-fluid rounded-circle" />
        <h1 className="text-light"><a href="index.html">Alex Smith</a></h1>
        <div className="social-links">
          <a href="/#" className="twitter"><i className="bx bxl-twitter"></i></a>
          <a href="/#" className="facebook"><i className="bx bxl-facebook"></i></a>
          <a href="/#" className="instagram"><i className="bx bxl-instagram"></i></a>
          <a href="/#" className="google-plus"><i className="bx bxl-skype"></i></a>
          <a href="/#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
        </div>
      </div>
      <nav className="nav-menu">
        <ul>
          <li className="active"><a href="index.html"><i className="bx bx-home"></i> <span>Home</span></a></li>
          <li><a href="#about"><i className="bx bx-user"></i> <span>About</span></a></li>
          <li><a href="#resume"><i className="bx bx-file-blank"></i> <span>Resume</span></a></li>
          <li><a href="#portfolio"><i className="bx bx-book-content"></i> Portfolio</a></li>
          <li><a href="#services"><i className="bx bx-server"></i> Services</a></li>
          <li><a href="#contact"><i className="bx bx-envelope"></i> Contact</a></li>
        </ul>
      </nav>
      <button type="button" className="mobile-nav-toggle d-xl-none"><i className="icofont-navigation-menu"></i></button>
    </div>
  </header>
)

export default Sidebar

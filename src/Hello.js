import React from 'react';
import logo from './logo2.jpg';
import img1 from './floor5.jpg';
import img2 from './kitchen5.jpg';
import img3 from './bathroom5.jpg';
import './Hello.css';
import Products from "./Components/Products"
import StickyHeader from 'react-sticky-header';
import Disp from "./Components/Disp";


const Hello
=()=>{
    return(
        <>      
        

          <header id="header_1">
            <div class="header-menu-area header-menu-layout2 box-layout-child">
            
                <div class="full-width-container">
                <div class="sticky">    
                    <div class="row no-gutters d-flex align-items-center">
                    
                        <div class="col-lg-2 col-md-2 d-flex justify-content-start">
                            <div class="logo-area">
                                <a href="index.html" class="temp-logo">
                                    <img src={logo} alt="logo" class="img-fluid" />
                                </a>
                            </div>
                        </div>
                        <div class="col-lg-8 col-md-8 d-flex justify-content-center possition-static">
                            <div class="template-main-menu">
                                <div class ="header-links">
                                <nav id="dropdown">
                                    <ul>
                                        <li>
                                            <a href="#">HOME</a>
                                            
                                        </li>
                                        <li>
                                            <a href="#about">ABOUT US</a>
                                            
                                        </li>
                                        <li>
                                            <a href="#products">Products</a>
                                        </li>
                                        
                                        
                                        <li>
                                            <a href="#contact">CONTACT US</a>
                                        </li>
                                        
                                    </ul>
                                </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                
            </div>
        </header> 
        <section class="slider-wrap-layout1 box-layout-child-4">
            
                <div class="container-fluid">
                    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                        {/* <div class="carousel-indicators">
                            <button  data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"></button>
                            <button  data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" class="slide"></button>
                            <button  data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"  class="slide"></button>
                        </div> */}
                    <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img class="d-block w-100" src={img1} alt="First slide" />
                            </div>
                            <div class="carousel-item">
                                <img class="d-block w-100" src={img2} alt="Second slide" />
                            </div>
                            <div class="carousel-item">
                                <img class="d-block w-100" src={img3} alt="Third slide" />
                            </div>
                    </div>
                    <button class="carousel-control-prev" role="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </button>
                    <button class="carousel-control-next" role="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </button>
                    </div>
                </div>
                
            
            
        </section>
        <body  id ="about">
        <div  className="container1">
        <div class="breadcrumbs-area">
                <div className="section-heading text-center heading-dark heading-layout2">
                    <h2>About Us</h2>
                    <div className="text">Granite is a light-colored igneous rock with grains large enough to be visible with the unaided eye. It forms from the slow crystallization of magma below Earth's surface. Granite is composed mainly of quartz and feldspar with minor amounts of mica, amphiboles, and other minerals.</div>
                </div>
                </div>
                </div>
        </body>
        </>


);
}

export default Hello;
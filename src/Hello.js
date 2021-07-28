import React from 'react';
import logo from './logo2.jpg';
import img1 from './floor5.jpg';
import img2 from './kitchen5.jpg';
import img3 from './bathroom5.jpg';
import './Hello.css';


const Hello
=()=>{
    return(
        <>      
        
        
          <header id="header_1">
            <div className="header-menu-area header-menu-layout2 box-layout-child">
                <div className="full-width-container">
                    <div className="row no-gutters d-flex align-items-center">
                        <div className="col-lg-2 col-md-2 d-flex justify-content-start">
                            <div className="logo-area">
                                <a href="index.html" className="temp-logo">
                                    <img src={logo} alt="logo" className="img-fluid" />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-8 d-flex justify-content-center possition-static">
                            <div className="template-main-menu">
                                <nav id="dropdown">
                                    <ul>
                                        <li>
                                            <a href="#">HOME</a>
                                            
                                        </li>
                                        <li>
                                            <a href="#">Products</a>
                                        </li>
                                        
                                        <li>
                                            <a href="contact.html">CONTACT US</a>
                                        </li>
                                        
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <section className="slider-wrap-layout1 box-layout-child-4">
            
                <div className="container-fluid">
                    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                        {/* <div className="carousel-indicators">
                            <button  data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"></button>
                            <button  data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" className="slide"></button>
                            <button  data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"  className="slide"></button>
                        </div> */}
                    <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img className="d-block w-100" src={img1} alt="First slide" />
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src={img2} alt="Second slide" />
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src={img3} alt="Third slide" />
                            </div>
                    </div>
                    <button className="carousel-control-prev" role="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </button>
                    <button className="carousel-control-next" role="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </button>
                    </div>
                </div>
                
            
            
        </section>
        </>


);
}

export default Hello;
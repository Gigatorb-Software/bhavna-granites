import React from "react";
import "./Style.css";
import "./css/normalize.css";
import "./css/bootstrap.min.css";
import "./css/main.css";
import "./css/magnific-popup.css";
import   "./js/main";
import "./Products.css";
import { BsArrowRight } from 'react-icons/bs';
import absoluteBlack from './absolute-black.jpg';
import almondPearl from './almond-pearl.jpg';
import rajasthanBlack from "./rajasthan-black.jpg"

import { BsFillXCircleFill } from 'react-icons/bs';





const Products=()=>{
    return(
        <>
         <section id="products" className="portfolio-wrap-layout2">
            <div className="container">
                <div className="section-heading text-center heading-dark heading-layout2">
                    <h2 >Feature works</h2>
                    <div className="item-subtitle">Made with Passion</div>
                </div>
                <div className="row">
{/* This is test */}

{/* This is element 1 */}

   <div className="col-lg-4 col-sm-6">
       <div className="portfolio-box-layout2">
           <div className="item-img">
                 <img src={absoluteBlack} alt="Project Photo"/>
                 <a href="#test-popup1" data-bs-slide-to='0' className=" item-btn inline-popup">
                 <div data-bs-toggle="modal" data-bs-target="#showProductModal">
                 <BsArrowRight size={50} color={"white"} />

                 </div>
                 </a>
            </div>
        <div className="item-content">
                 <h3 className="item-title">
                 <a href="single-portfolio1.html">Paper </a>
                 </h3>
        <div className="item-subtitle">
                 <a href="#">Element</a>
        </div>
        </div>
    </div>
</div>

{/* This is element 2 */}

<div className="col-lg-4 col-sm-6">
       <div className="portfolio-box-layout2">
           <div className="item-img">
                 <img src={almondPearl} alt="Project Photo"/>
                 <a href="#test-popup1" data-bs-slide-to='1' className=" item-btn inline-popup">
                 
                  <div data-bs-toggle="modal" data-bs-target="#showProductModal"> 
                  <BsArrowRight size={50} color={"white"} />
                  </div>
                     
                 </a>
            </div>
        <div className="item-content">
                 <h3 className="item-title">
                 <a href="single-portfolio1.html">Paper </a>
                 </h3>
        <div className="item-subtitle">
                 <a href="#">Element</a>
        </div>
        </div>
    </div>
</div>



                        {/* <!-- Button trigger modal --> */}


{/* <!-- Modal --> */}

<div id="showProductModal" className="modal fade" >
    <div className="modal-dialog">
        <div className="modal-content non-radius non-border">
           
            <div className="modal-header non-border">
                <button type="button" className="close" data-bs-dismiss="modal" aria-hidden="true"><BsFillXCircleFill/></button>
                <h4 className="modal-title"></h4>
            </div>
            <div className="modal-body" >
             {/* <!--begin carousel--> */}
<div id="test-popup1"  className="carousel slide" data-bs-interval="false"  >
<div  className="carousel-inner" data-bs-ride="false"  >
    <div className="carousel-item active ">
        <img src={absoluteBlack} className="display-block w-100" alt="Image1"/>
        <div class="caption carousel-caption d-none d-md-block">
          <h5>Absolute Black</h5>
        </div>
    </div>

    <div className="carousel-item">
      <img src={almondPearl} className="display-block w-100"   alt="Image2"/>
      <div class="caption carousel-caption d-none d-md-block">
          <h5>Almond Pearl</h5>
        </div>
    </div>
    <div className="carousel-item">
      <img src={rajasthanBlack} className="display-block w-100"   alt="Image3"/>
      <div class="caption carousel-caption d-none d-md-block">
          <h5>Rajasthan Black</h5>
        </div>
    </div>
</div>
<button className="carousel-control-prev" type="button" data-bs-target="#test-popup1" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#test-popup1" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
    
        </div>


</div>
{/* Above is test */}



{/* This element 2 */}






      {/* <div className="modal-body">
        <div id="test-popup2" >
                                  <div className="media media-none--xs">
                                      <div className="item-img">
                                          <img src="https://upload.wikimedia.org/wikipedia/commons/b/bc/Fj%C3%A6regranitt3.JPG" alt="img"/>
                                      </div>
                                      <div className="media-body">
                                          <h2 className="item-title"><a href="#">Paper </a></h2>
                                          <ul className="item-category">
                                          {/* <button className="btn btn-primary" data-bs-target="#" data-bs-toggle="modal" data-bs-dismiss="modal">Open second modal</button> */}
                                              {/* <li><BsInfoCircle size={15} color={"blue"} />
                                                     Brand Identity
                                                </li>
                                              <li>Web Design </li>
                                              <li>Development</li>
                                              <li>Photography</li>
                                          </ul>
                                      </div>
                                  </div>
                              </div>    
      </div> */} 
      
    














                    {/* <div className="col-lg-4 col-sm-6">
                        <div className="portfolio-box-layout2">
                            <div className="item-img">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/b/bc/Fj%C3%A6regranitt3.JPG" alt="Project Photo"/>
                                <a href="#test-popup1" className="item-btn inline-popup" >
                                    <i className="flaticon-next"></i>
                                </a>
                            </div>
                            <div className="item-content">
                                <h3 className="item-title">
                                    <a href="single-portfolio1.html">Paper Mockup</a>
                                </h3>
                                <div className="item-subtitle">
                                    <a href="#">Element</a>
                                </div>
                            </div>
                        </div>
                        <div id="test-popup1" className="popup-content mfp-hide">
                            <div className="media media-none--xs">
                                <div className="item-img">
                                    <img src="img/project/project11.jpg" alt="img"/>
                                </div>
                                <div className="media-body">
                                    <h2 className="item-title"><a href="#">Paper Mockup</a></h2>
                                    <ul className="item-category">
                                        <li><i className="fas fa-arrow-right"></i>Brand Identity</li>
                                        <li><i className="fas fa-arrow-right"></i>Web Design &amp; UI</li>
                                        <li><i className="fas fa-arrow-right"></i>Development &amp; CMS</li>
                                        <li><i className="fas fa-arrow-right"></i>Photography</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    {/* <div className="col-lg-4 col-sm-6">
                        <div className="portfolio-box-layout2">
                            <div className="item-img">
                                <img src="img/project/project7.jpg" alt="Project Photo"/>
                                <a href="#test-popup2" className="item-btn inline-popup">
                                    <i className="flaticon-next"></i>
                                </a>
                            </div>
                            <div className="item-content">
                                <h3 className="item-title">
                                    <a href="single-portfolio1.html">Iconic Branding</a>
                                </h3>
                                <div className="item-subtitle">
                                    <a href="#">Branding</a>
                                </div>
                            </div>
                        </div>
                        <div id="test-popup2" className="popup-content mfp-hide">
                            <div className="media media-none--xs">
                                <div className="item-img">
                                    <img src="img/project/project7.jpg" alt="img"/>
                                </div>
                                <div className="media-body">
                                    <h2 className="item-title"><a href="#">Iconic Branding</a></h2>
                                    <ul className="item-category">
                                        <li><i className="fas fa-arrow-right"></i>Brand Identity</li>
                                        <li><i className="fas fa-arrow-right"></i>Web Design &amp; UI</li>
                                        <li><i className="fas fa-arrow-right"></i>Development &amp; CMS</li>
                                        <li><i className="fas fa-arrow-right"></i>Photography</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="portfolio-box-layout2">
                            <div className="item-img">
                                <img src="img/project/project10.jpg" alt="Project Photo"/>
                                <a href="#test-popup3" className="item-btn inline-popup">
                                    <i className="flaticon-next"></i>
                                </a>
                            </div>
                            <div className="item-content">
                                <h3 className="item-title">
                                    <a href="single-portfolio1.html">Smart Watch</a>
                                </h3>
                                <div className="item-subtitle">
                                    <a href="#">Watch</a>
                                </div>
                            </div>
                        </div>
                        <div id="test-popup3" className="popup-content mfp-hide">
                            <div className="media media-none--xs">
                                <div className="item-img">
                                    <img src="img/project/project10.jpg" alt="img"/>
                                </div>
                                <div className="media-body">
                                    <h2 className="item-title"><a href="#">Smart Watch</a></h2>
                                    <ul className="item-category">
                                        <li><i className="fas fa-arrow-right"></i>Brand Identity</li>
                                        <li><i className="fas fa-arrow-right"></i>Web Design &amp; UI</li>
                                        <li><i className="fas fa-arrow-right"></i>Development &amp; CMS</li>
                                        <li><i className="fas fa-arrow-right"></i>Photography</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="portfolio-box-layout2">
                            <div className="item-img">
                                <img src="img/project/project10.jpg" alt="Project Photo"/>
                                <a href="#test-popup4" className="item-btn inline-popup">
                                    <i className="flaticon-next"></i>
                                </a>
                            </div>
                            <div className="item-content">
                                <h3 className="item-title">
                                    <a href="single-portfolio1.html">Electronic Port</a>
                                </h3>
                                <div className="item-subtitle">
                                    <a href="#">Accessories</a>
                                </div>
                            </div>
                        </div>
                        <div id="test-popup4" className="popup-content mfp-hide">
                            <div className="media media-none--xs">
                                <div className="item-img">
                                    <img src="img/project/project10.jpg" alt="img"/>
                                </div>
                                <div className="media-body">
                                    <h2 className="item-title"><a href="#">Electronic Port</a></h2>
                                    <ul className="item-category">
                                        <li><i className="fas fa-arrow-right"></i>Brand Identity</li>
                                        <li><i className="fas fa-arrow-right"></i>Web Design &amp; UI</li>
                                        <li><i className="fas fa-arrow-right"></i>Development &amp; CMS</li>
                                        <li><i className="fas fa-arrow-right"></i>Photography</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="portfolio-box-layout2">
                            <div className="item-img">
                                <img src="img/project/project11.jpg" alt="Project Photo"/>
                                <a href="#test-popup5" className="item-btn inline-popup">
                                    <i className="flaticon-next"></i>
                                </a>
                            </div>
                            <div className="item-content">
                                <h3 className="item-title">
                                    <a href="single-portfolio1.html">Seascape Villa</a>
                                </h3>
                                <div className="item-subtitle">
                                    <a href="#">Aqaba, Jordan</a>
                                </div>
                            </div>
                        </div>
                        <div id="test-popup5" className="popup-content mfp-hide">
                            <div className="media media-none--xs">
                                <div className="item-img">
                                    <img src="img/project/project11.jpg" alt="img"/>
                                </div>
                                <div className="media-body">
                                    <h2 className="item-title"><a href="#">Seascape Villa</a></h2>
                                    <ul className="item-category">
                                        <li><i className="fas fa-arrow-right"></i>Brand Identity</li>
                                        <li><i className="fas fa-arrow-right"></i>Web Design &amp; UI</li>
                                        <li><i className="fas fa-arrow-right"></i>Development &amp; CMS</li>
                                        <li><i className="fas fa-arrow-right"></i>Photography</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="portfolio-box-layout2">
                            <div className="item-img">
                                <img src="img/project/project7.jpg" alt="Project Photo"/>
                                <a href="#test-popup6" className="item-btn inline-popup">
                                    <i className="flaticon-next"></i>
                                </a>
                            </div>
                            <div className="item-content">
                                <h3 className="item-title">
                                    <a href="single-portfolio1.html">Seascape Villa</a>
                                </h3>
                                <div className="item-subtitle">
                                    <a href="#">Aqaba, Jordan</a>
                                </div>
                            </div>
                        </div>
                        <div id="test-popup6" className="popup-content mfp-hide">
                            <div className="media media-none--xs">
                                <div className="item-img">
                                    <img src="img/project/project7.jpg" alt="img"/>
                                </div>
                                <div className="media-body">
                                    <h2 className="item-title"><a href="#">Seascape Villa</a></h2>
                                    <ul className="item-category">
                                        <li><i className="fas fa-arrow-right"></i>Brand Identity</li>
                                        <li><i className="fas fa-arrow-right"></i>Web Design &amp; UI</li>
                                        <li><i className="fas fa-arrow-right"></i>Development &amp; CMS</li>
                                        <li><i className="fas fa-arrow-right"></i>Photography</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
                </div>
            </div>
            </div>
                <div className="loadmore-layout2">
                    <a href="#" className="item-btn">See More Work</a>
                </div>
            </div>
        </section>




         </>
    );
}
export default Products;
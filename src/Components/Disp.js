import React from 'react';
import './css/normalize.css';
import './css/main.css';
import './css/bootstrap.min.css';
import './css/fontawesome-all.min.css'
import './css/font/flaticon.css';
import './css/style.css';
import logo1 from '../logo1.jpg';
import logo3 from '../gigatorb_logo.png';
import './css/personalised.css';
const Disp=()=>{ 
        return (
        <> 
        <section class="inner-page-banner bg-common inner-page-margin  Contitle" data-bg-image="img/figure/banner.jpg">
            <div class="container ">
                <div class="row">
                    <div class="col-12">
                        <div class="breadcrumbs-area">
                            <h1 class="Alleft">Contact With Us</h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="contact-page-wrap">
                <div className="contact-method-area">
                    <div className="row">
                        <div className="col-md-3 col-sm-6">
                            <div className="contact-list">
                                <h5 className="item-title">Address:</h5>
                                <ul>
                                    <li>59 Street, loseagne, Newyork</li>
                                    <li>Road City</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="contact-list">
                                <h5 className="item-title">Phone:</h5>
                                <ul>
                                    <li>+123 977 015 902</li>
                                    <li>+123 977 015 902</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="contact-list">
                                <h5 className="item-title">E-mail:</h5>
                                <ul>
                                    <li>info@gmail.com</li>
                                    <li>info@gmail.com</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="contact-list">
                                <h5 className="item-title">Fax:</h5>
                                <ul>
                                    <li>+59 987 065 009</li>
                                    <li>+59 987 065 009</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <footer class="footer-wrap-layout1">
            <div class="main-footer-wrap-layout1">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 Alleft">
                            <div class="footer-box-layout1">
                                <div class="footer-logo">
                                    <a href="index.html">
                                        <img src={logo1} alt="logo" class="img-fluid"></img>
                                    </a>
                                </div>
                                <div class="footer-contact-info">
                                    <p>For World Class granites ,Give us call or drop an email, Interaction between us gets things done you know
                                    </p>
                                    <ul>
                                        <li>info@zugan.com</li>
                                        <li>+ 88 222 02020</li>
                                        <li>+ 5960 550000</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div class="footer-box-layout1">
                            <h3 className="footer-title">Useful Links</h3>
                                <div className="footer-links">
                                    <ul>
                                        <li>
                                            <a href="index.html">Home</a>
                                        </li>
                                        <li>
                                            <a href="about1.html">About Us</a>
                                        </li>
                                        <li>
                                            <a href="single-portfolio1.html">Products</a>
                                        </li>
                                    </ul>
                                </div>
                                <ul class="footer-social">
                                    <li>
                                        <a href="#">
                                            <i class="fab fa-facebook-f"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i class="fab fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i class="fab fa-behance"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i class="fab fa-dribbble"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i class="fab fa-linkedin-in"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i class="fab fa-google-plus-g"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        <p><img src={logo3} alt="logo" class="img-fluid logo"></img>     WebSite Designed by Gigatorb Software Pvt. Ltd.</p>
        </section>
        </>);
};
 
export default Disp;    
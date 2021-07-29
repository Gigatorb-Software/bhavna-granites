import React from 'react';
import './css/normalize.css';
import './css/main.css';
import './css/bootstrap.min.css';
import './css/fontawesome-all.min.css'
import './css/font/flaticon.css';
import './css/style.css';
import logo1 from './logo2.jpg';
import logo3 from './gigatorb2_logo.jpg';
import './css/personalised.css';
import './Disp.css';

const Disp=()=>{ 
        return (
        <> 
        <section id="contact" className="inner-page-banner bg-common inner-page-margin  Contitle" data-bg-image="img/figure/banner.jpg">
            <div className="container ">
                <div className="row">
                    <div className="col-12">
                        <div className="breadcrumbs-area">
                            <h1 className="Alleft">Contact With Us</h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="contact-page-wrap Contitle1 ">
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
                <footer className="footer-wrap-layout1 Contitle2">
            <div className="main-footer-wrap-layout1">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 Alleft">
                            <div className="footer-box-layout1">
                                <div className="footer-logo">
                                    <a href="index.html">
                                        <img src={logo1} alt="logo" className="img-fluid"></img>
                                    </a>
                                </div>
                                <div className="footer-contact-info">
                                    <p>For World className granites ,Give us call or drop an email, Interaction between us gets things done you know
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
                            <div className="footer-box-layout1">
                            <h3 className="footer-title">Useful Links</h3>
                                <div className="footer-links">
                                    <ul>
                                        <li>
                                            <a href="#">HOME</a>
                                        </li>
                                        <li>
                                            <a href="#about">ABOUT US</a>
                                        </li>
                                        <li>
                                            <a href="#products">PRODUCTS</a>
                                        </li>
                                                                               
                                    </ul>
                                </div>
                                <ul className="footer-social">
                                    <li>
                                        <a href="#">
                                            <i className="fab fa-facebook-f"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fab fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fab fa-behance"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fab fa-dribbble"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fab fa-linkedin-in"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fab fa-google-plus-g"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        <p className="Contitle3"><img src={logo3} alt="logo3" className="img-fluid logo"></img>     WebSite Designed by Gigatorb Software Pvt. Ltd.</p>
        </section>
        </>);
};
 
export default Disp;    
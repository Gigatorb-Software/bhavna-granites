import React from 'react';
import './css/normalize.css';
import './css/main.css';
import './css/bootstrap.min.css';
import './css/fontawesome-all.min.css'
import './css/font/flaticon.css';
import './css/astyle.css';
import logo1 from './logo6_bg1.png';
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
                        <div className="col-md-4 col-sm-8">
                            <div className="contact-list">
                                <h5 className="item-title">Address:</h5>
                                <ul>
                                    <li>E 138 A RIICO INDUSTRIAL AREA AJOLIYA KA KHERA</li>
                                    <li>CHITTORGARH 312001</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-8">
                            <div className="contact-list">
                                <h5 className="item-title">Phone:</h5>
                                <ul>
                                    <li>+91 9649427725</li>
                                    <li>+91 8058273426</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-8">
                            <div className="contact-list">
                                <h5 className="item-title">E-mail:</h5>
                                <ul>
                                    <li>dimplebaser@gmail.com</li>
                                    <li>bhavanagranitesllp@gmail.com</li>
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
                                        <img src={logo1} alt="logo" className="img-fluid" id="footer-loo"></img>
                                    </a>
                                </div>
                                <div className="footer-contact-info">
                                    <p>Give us call or drop an email, Interaction between us gets things done you know!!</p>
                                    <ul>
                                        <li>bhavanagranitesllp@gmail.com</li>
                                        <li>+91 9649427725</li>
                                        <li>+91 8058273426</li>
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
                                            <i className="fab fa-linkedin-in"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <p id = "end-note">WebSite Designed by Gigatorb Software Pvt. Ltd. with ❤️</p>
                    </div>
                </div>
            </div>
        </footer>
        </section>
        </>);
};
 
export default Disp;    
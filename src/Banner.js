import React from 'react';
import imga from './slider1.jpg';
import imge from './slider2.jpg';
import imgg from './slider3.jpg';


const Banner=()=>{
    return(
        <>

<section class="slider-wrap-layout1 box-layout-child-4">
<div class="slider-left-side-content">WELCOME TO BHAVNA GRANITES</div>

<div class="full-width-container">
    <div class="slider-area slider-layout1 slider-top-margin95">
        <div class="bend niceties preview-1">
            <div id="ensign-nivoslider-1" class="slides">
                <img src={imga} alt="slider" title="#slider-direction-1" />
                <img src={imge} alt="slider" title="#slider-direction-2" />
                <img src={imgg} alt="slider" title="#slider-direction-3" />
            </div>
            <div id="slider-direction-1" class="t-cn slider-direction">
                <div class="slider-content s-tb slide-1">
                    <div class="text-left title-container s-tb-c">
                        <div class="container">
                            <div class="slider-sub-text">Granites which will last long</div>
                            <div class="slider-big-text">For life and after</div>
                            <div class="slider-paragraph">Dedicated to provide you the best products since starting.</div>
                            <div class="slider-btn-area">
                                <a href="#" class="item-btn-light">Read More
                                    <i class="fas fa-chevron-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="slider-direction-2" class="t-cn slider-direction">
                <div class="slider-content s-tb slide-2">
                    <div class="text-left title-container s-tb-c">
                       
                                <a href="#" class="item-btn-light">Read More
                                    <i class="fas fa-chevron-right"></i>
                                </a>
                            
                        
                    </div>
                </div>
            </div>
            <div id="slider-direction-3" class="t-cn slider-direction">
                <div class="slider-content s-tb slide-3">
                    <div class="text-left title-container s-tb-c">
                        
                            <div class="slider-btn-area">
                                <a href="#" class="item-btn-light">Read More
                                    <i class="fas fa-chevron-right"></i>
                                </a>
                            </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</section>
</>
);
}
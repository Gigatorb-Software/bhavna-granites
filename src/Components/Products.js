import React from "react";
import "./Style.css";
import "./css/normalize.css";
import "./css/bootstrap.min.css";
import "./css/main.css";
import "./css/magnific-popup.css";
import   "./js/main";
import "./Products.css";
import ProductsLoops from "./ProductsLoop";
import MappingImg from "./MappingImg";
import MappingCaraousels from "./MappingCaraousel";

import Elements from './Elements'
import Caraousels from './Caraousels'
import { BsArrowRight } from 'react-icons/bs';
import { BsFillXCircleFill } from 'react-icons/bs';

import absoluteBlack from './absolute-black.jpg';
import almondPearl from './almond-pearl.jpg';
import appleGreen from './apple-green.jpg';
import balticBrown from './baltic-brown.jpg';
import blackBeauty from './black-beauty.jpg';
import blackGalaxy from './black-galaxy.jpg';
import blackPearl from './black-pearl.jpg';
import bluePearl from './blue-pearl.jpg';
import camelBrown from './camel-brown.jpg';
import cappuccino from './cappuccino.jpg';
import carbonBlack from './carbon-black.jpg';
import catsEye from './cats-eye.jpg';
import cherryBrown from './cherry-brown.jpg';
import chimaPink from './chima-pink.jpg';
import copperSilk from './copper-silk.jpg';
import crystalBlue from './crystal-blue.jpg';
import crystalYellow from './crystal-yellow.jpg';
import desertBrown from './desert-brown.jpg';
import exoticJuparana from './exotic-juparana.jpg';
import fishBlack  from './fish-black.jpg';
import fishBrown  from './fish-brown.jpg';
import greenPearl from './green-pearl.jpg';
import hassanGreen  from './hassan-green.jpg';
import imprialRed  from './imprial-red.jpg';
import imprialWhite  from './imprial-white.jpg';
import jemred  from './jem-red.jpg';
import jhansiRed  from './jhansi-red.jpg';
import kashmiriWhite  from './kashmiri-white.jpg';
import lakhaRed  from './lakha-red.jpg';
import marigold  from './marigold.jpg';
import markeno  from './markeno.jpg';
import merryGreen  from './merry-green.jpg';
import pWhite  from './p-white.jpg';
import pablesBlack  from './pables-black.jpg';
import rajsthanBlack  from './rajasthan-black.jpg';
import merryWood from './merry-wood.jpg'
import redMulti  from './red-multi.jpg';
import rosaPearl  from './rosa-pearl.jpg';
import rosaliya  from './rosaliya.jpg';
import rosyPink  from './rosy-pink.jpg';
import royalCream  from './royal-cream.jpg';
import tenBrown  from './ten-brown.jpg';
import tropicalGold  from './tropical-gold.jpg';
import tropicanaBlueL  from './tropicana-blue-lapato.jpg';
import tropicanaBlue  from './tropicana-blue.jpg';
import volgaBlue  from './volga-blue.jpg';
import whiteGalaxy  from './white-galaxy.jpg';

const Products=()=>{
    return(
        <>
         <section className="portfolio-wrap-layout2">
            <div className="container">
                <div className="section-heading text-center heading-dark heading-layout2">
                    <h2>Feature works</h2>
                    <div className="item-subtitle">Made with Passion</div>
                </div>
                <div className="row">
                <MappingImg />


                {/* <Elements imgUrl={absoluteBlack} Title="Absolute Black" slide='0' /> */}


{/* Elements start from here ------------------------------------------*/}
{/* 
<Elements imgUrl={almondPearl} Title="Almond Pearl" slide='1' />
<Elements imgUrl={appleGreen} Title="Apple Green" slide='2' />
<Elements imgUrl={balticBrown} Title="Baltic Brown" slide='3' />
<Elements imgUrl={balticBrown} Title="Baltic Brown" slide='4' />
<Elements imgUrl={blackBeauty} Title="Black Beauty" slide='5' />
<Elements imgUrl={blackGalaxy} Title="Black Galaxy" slide='6' />
<Elements imgUrl={blackPearl} Title="Black Pearl" slide='7' />
<Elements imgUrl={bluePearl} Title="Blue Pearl" slide='8' />
<Elements imgUrl={camelBrown} Title="Camel Brown" slide='9' />
<Elements imgUrl={cappuccino} Title="Cappuccino" slide='10' />
<Elements imgUrl={carbonBlack} Title="Carbon Black" slide='11' />
<Elements imgUrl={catsEye} Title="Cats Eye" slide='12' />
<Elements imgUrl={cherryBrown} Title="Cherry Brown" slide='13' />
<Elements imgUrl={chimaPink} Title="Chima Pink" slide='14' />
<Elements imgUrl={copperSilk} Title="Copper Silk" slide='15' />
<Elements imgUrl={crystalBlue} Title="Crystal Blue" slide='16' />
<Elements imgUrl={crystalYellow} Title="Crystal Yellow" slide='17' />
<Elements imgUrl={desertBrown} Title="Desert Brown" slide='18' />
<Elements imgUrl={exoticJuparana} Title="Exotic Juparana" slide='19' />
<Elements imgUrl={fishBlack} Title="Fish Black" slide='20' />
<Elements imgUrl={fishBrown} Title="Fish Brown" slide='21' />
<Elements imgUrl={greenPearl} Title="Green Pearl" slide='22' />
<Elements imgUrl={hassanGreen} Title="Hassan Green" slide='23' />
<Elements imgUrl={imprialRed} Title="Imperial Red" slide='24' />
<Elements imgUrl={imprialWhite} Title="Imperial White" slide='25' />
<Elements imgUrl={jemred} Title="Jam Red" slide='26' />
<Elements imgUrl={jhansiRed} Title="Jhansi Red" slide='27' />
<Elements imgUrl={kashmiriWhite} Title="Kashmiri White" slide='28' />
<Elements imgUrl={lakhaRed} Title="Lakha Red" slide='23' />
<Elements imgUrl={marigold} Title="Marigold" slide='29' />
<Elements imgUrl={markeno} Title="Markeno" slide='30' />
<Elements imgUrl={merryGreen} Title="Merry Green" slide='31' />
<Elements imgUrl={merryWood} Title="Merry Wood" slide='32' />
<Elements imgUrl={pWhite} Title="P White" slide='33' />
<Elements imgUrl={pablesBlack} Title="Pables Black" slide='34' />
<Elements imgUrl={rajsthanBlack} Title="Rajasthan Black" slide='35' />
<Elements imgUrl={redMulti} Title="Red Multi" slide='36' />
<Elements imgUrl={rosaPearl} Title="Rosa Pearl" slide='37' />
<Elements imgUrl={rosaliya} Title="Rosaliya" slide='38' />
<Elements imgUrl={rosyPink} Title="Rosy Pink" slide='39' />
<Elements imgUrl={royalCream} Title="Royal Cream" slide='40' />
<Elements imgUrl={tenBrown} Title="Ten Brown" slide='41' />
<Elements imgUrl={tropicalGold} Title="Tropical Gold" slide='42' />
<Elements imgUrl={tropicanaBlueL} Title="Tropicana Blue Lapato" slide='43' />
<Elements imgUrl={tropicanaBlue} Title="Tropicana Blue" slide='44' />
<Elements imgUrl={volgaBlue} Title="Volga Blue" slide='45' />
<Elements imgUrl={whiteGalaxy} Title="White Galaxy" slide='46' /> */}


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
          <h5>Absolute </h5>
        </div>
    </div>
<MappingCaraousels/>    
{/* 
    <div className="carousel-item">
      <img src={almondPearl} className="display-block w-100"   alt="Image2"/>
      <div class="caption carousel-caption d-none d-md-block">
          <h5>Almond Pearl</h5>
        </div>
    </div>
    <div className="carousel-item">
      <img src={rajsthanBlack} className="display-block w-100"   alt="Image3"/>
      <div class="caption carousel-caption d-none d-md-block">
          <h5>Rajasthan Black</h5>
        </div>
    </div> */}
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

 </div>
                </div>
            </div>
            </div>
       
 </div>
</section>




         </>
    );
}
export default Products;
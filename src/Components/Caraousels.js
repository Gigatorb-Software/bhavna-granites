import React from "react";
const Caraousels=(props)=>{
    return(
        <>
            <div className="carousel-item">

        <img src={props.imgUrl} className="display-block w-100" alt="Image1"/>
        <div class="caption carousel-caption d-none d-md-block">
          <h5>{props.Title}</h5>
          <button type="button" className='btn btn-secondary btn-lg'>Quotes</button>
        </div>
        </div>


        </>
    );
}
export default Caraousels;
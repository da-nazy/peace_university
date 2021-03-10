import React from 'react';
import Slider from 'infinite-react-carousel';
import '../../style/amleft.css';
export default function Amleft() {
    const setting={
        arrows:false,
        autoplay:true,
        dots:true,
        duration:210
    };
    return (
        <div className="amSliderWrapper">
               <Slider { ...setting } className="amslider">
          <div>
            <h4>Maduka Education</h4>
            <h2>Lorem Ipsum is simply dummy</h2>
            <h6>Lorem Ipsum is simply dummy text of the printing and 
                typesetting industry. Lorem Ipsum has been the industry's</h6>
          </div>
          <div>
          <h4>Maduka Education</h4>
            <h2>Lorem Ipsum is simply dummy</h2>
            <h6>Lorem Ipsum is simply dummy text of the printing and 
                typesetting industry. Lorem Ipsum has been the industry's</h6>
          </div>
          <div>
          <h4>Maduka Education</h4>
            <h2>Lorem Ipsum is simply dummy</h2>
            <h6>Lorem Ipsum is simply dummy text of the printing and 
                typesetting industry. Lorem Ipsum has been the industry's</h6>
          </div>
        </Slider>
        </div>
    )
}

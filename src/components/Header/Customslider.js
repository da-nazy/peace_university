import React from 'react';
import Slider from 'infinite-react-carousel';
import '../../style/customSlider.css';
export default function Customslider() {
  const settings =  {
    arrows: false,
    autoplay: true,
    dots: true
  };
  return (
    <div className="cslider">
   
        <Slider { ...settings } className="slider">
          <div style={{border:'1px solid green'}}>
            <h3>Develop a passion for learning</h3>
            <p>
            Providing expert care advice & services using Latest Technology to cater Your Problems.
            </p>
            <button>READ MORE</button>
          </div>
          <div>
            <h3>Investment In Knowledge Pays The Best Intrest</h3>
            <p>Providing expert care advice & services using Latest Technology to cater Your Problems.
            </p>
            <button>READ MORE</button>
          </div>
          <div>
            <h3>
            Education Is Life Itself Dont Neglect
            </h3>
            <p>Providing expert care advice & services using Latest Technology to cater Your Problems.</p>
        <button>READ MORE</button>
          </div>
        </Slider>
    </div>
  )
}



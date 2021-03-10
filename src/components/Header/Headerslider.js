import React from 'react';
import erro from  '../../images/er1.PNG';
import {Carousel} from 'react-bootstrap';
import '../../style/header.css';

import 'bootstrap/dist/css/bootstrap.min.css';  
//import Carousel from 'react-bootstrap/Carousel';

export default function Headerslider(){
    return(

        <div>  
       <Carousel>
  <Carousel.Item>
    <img
      width="300px"
      height="300px"
     
      src={erro}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      width="300px"
      height="300px"
      src={erro}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <div
       width="300px"
       height="300px"
      style={{backgroundColor:'#222'}}
    
    ></div>

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel> 
</div> 
                              
    );
}
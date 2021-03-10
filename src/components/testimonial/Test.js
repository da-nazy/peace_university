import React from 'react';
import '../../style/Test.css';
import Slider from 'infinite-react-carousel';
import img2 from '../../images/22.jpg';
import { FaQuoteLeft} from "react-icons/fa";
import {FaQuoteRight} from "react-icons/fa";

export default function Test() {
    const settings={

    }
      const testmonial=[
          {
              name:"Daniel",
              surname:"Ani",
              text:" Donec laoreet eu purus eu viverra. Vestibulum sed convallis massa, eu aliquet massa. Suspendisse lacinia rutrum tincidunt.Integer id erat porta convallis Suspendisse lacinia rutrum tincidunt.Integer id erat porta",
              image:img2
          },
          {
            name:"Tochukwu",
            surname:"Emmanuel",
            text:" Donec laoreet eu purus eu viverra. Vestibulum sed convallis massa, eu aliquet massa. Suspendisse lacinia rutrum tincidunt.Integer id erat porta convallis Suspendisse lacinia rutrum tincidunt.Integer id erat porta",
            image:img2
        },
        {
            name:"Daniel",
            surname:"Ani",
            text:" Donec laoreet eu purus eu viverra. Vestibulum sed convallis massa, eu aliquet massa. Suspendisse lacinia rutrum tincidunt.Integer id erat porta convallis Suspendisse lacinia rutrum tincidunt.Integer id erat porta",
            image:img2
        },
          {
              name:"Jeff",
              surname:"Bezoz",
              text:" Donec laoreet eu purus eu viverra. Vestibulum sed convallis massa, eu aliquet massa. Suspendisse lacinia rutrum tincidunt.Integer id erat porta convallis Suspendisse lacinia rutrum tincidunt.Integer id erat porta",
              image:img2
          }
      ]
    return (
      
           <div className="testSlider">
     
           <Slider { ...settings } className="slideTest">
           {testmonial.map((testmonial,key)=>
           
           <div key={key} className="mainTest">
              
           <div className="leftTest">
           
               <p>
                   <i className="leftQ"><FaQuoteLeft/></i> 
                    {testmonial.text}
                     <i className="rightQ"><FaQuoteRight/></i>
               </p>

                </div>
  
           <div className="rightTest">
               <img src={testmonial.image}>
                   </img>
                   <div>
                   <h2>{testmonial.name}</h2>
                   <h6>{testmonial.surname}</h6>
                   </div>
                   </div>
         </div>
           )}
         
           
        </Slider>

           </div>
            
          
       
    )
}

import React from 'react';
import '../../style/Gallery.css';
import img from '../../images/22.jpg';
import img2 from '../../images/33.jpg';
export default function Gallery() {
    const gallery=[
        {
            img:img,
            alt:"First Image"
        },
        {
            img:img2,
            alt:"Second  Image"
        },
        {
            img:img2,
            alt:"Second  Image"
        },
        {
            img:img2,
            alt:"Second  Image"
        },
        {
            img:img2,
            alt:"Second  Image"
        },
        {
            img:img2,
            alt:"Second  Image"
        }
    ]
    return (
        <div>
            <div className="gallerySection">

        {
            gallery.map((gallery,key)=>
            <div className="img" 
            style={{
                    backgroundImage: `url(${gallery.img})`,
              }}>
                  
            </div>

//backgroundImage: "url(" + Background + ")"
            )
        }
            
            </div>
        </div>
    )
}

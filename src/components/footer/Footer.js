import React from 'react';
import  {FaCopyright} from 'react-icons/fa';
import '../../style/footer.css';
import {FaFacebook,FaTwitter,FaInstagram,FaTelegram} from 'react-icons/fa';

export default function Footer(){
    const  footDetails={
            copyRightImage:<FaCopyright/>,
            copyRightName:"Maduka Univeristy",
            copyRightDate:"2021",
            developerName:"Ani Daniel"
        }

    const socialImages=[{
         image:<FaFacebook/>
    },
    {
        image:<FaTwitter/>
    },
    {
        image:<FaInstagram/>
    }, 
    {
        image:<FaTelegram/>
    }
]
    
    return (
        <div className="foot">
            <div className="socials">
                <div className="socialHandles">
                    {socialImages.map((socialImages,key)=>
                    <i>{socialImages.image}</i>
                    )}</div>
            </div>
            <div className="copyright">
                <h5>
                    <i>{footDetails.copyRightImage}</i>
                    &nbsp;{footDetails.copyRightDate} &nbsp; &nbsp; {footDetails.copyRightName}. All rights reserved  | Designed by 
                    &nbsp;<b>{footDetails.developerName}</b> 
                 </h5>
            </div>
        </div>
    )
}
import React from 'react';
import Header from './Header.js';
import '../../style/headerwrapper.css';
import Customslider from './Customslider.js';
import  '../../style/header.css';
import unibackground from '../../images/unibackground.jpg';
export default function Headerwrapper(){
    return(
        <div className="headerWrapper">
        <Header/>
         <Customslider/>
         <div className="headCover"></div>
        </div>
    )
}
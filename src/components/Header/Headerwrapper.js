import React from 'react';
import Header from './Header.js';
import Customslider from './Customslider.js';
import unibackground from '../../images/unibackground.jpg';
export default function Headerwrapper(){
    return(
        <div className="headerWrapper">
        <Header/>
    <Customslider/>
        </div>
    )
}
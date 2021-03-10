import React from 'react';
import '../../style/right_header.css';
import { FaSearch ,FaBars} from "react-icons/fa";
import '../../../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../../../node_modules/popper.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import {slide as Menu} from 'react-burger-menu';
export default function Right_header(){
// for dropmenu


    const dropItem=[
        {
            name:"SERVICES",
        },
        {
            name:"TEAM",
        },
        {
            name:"GALLERY",
        }
    ]
    return(
        <div className="right_header">
        <ul className="rtHead">
            <li>HOME</li>
            <li>ABOUT</li>

            <li className="dropdown">
            <button className="dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Dropdown 
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                {dropItem.map((dropItem,key)=>
                <a className="dropdown-item" href="#" key={key}>{dropItem.name}</a>
                )}
            
            </div>
            </li>
            <li>TESTIMONIAL</li>
           <li> 
               <input type="text"name="text" className="search_input" placeholder="Search" />
           </li> 
        <li> <i className="search_but" ><FaSearch/></i></li>
        </ul>
        <div className="dpdown">
        <i><FaBars/></i>
        </div>
        </div>

    )
}
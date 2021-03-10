import React from 'react';
import '../../style/right_header.css';
import { FaSearch } from "react-icons/fa";
import '../../../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../../../node_modules/popper.js';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Right_header(){
    return(
        <div className="right_header">
        <ul>
            <li>HOME</li>
            <li>ABOUT</li>

            <li className="dropdown">
            <button className="dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Dropdown button
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item" href="#">SERVICES</a>
            <a className="dropdown-item" href="#">TEAM</a>
            <a className="dropdown-item" href="#">GALLERY</a>
            </div>
            </li>
            <li>TESTIMONIAL</li>
           <li> 
               <input type="text"name="text" className="search_input" placeholder="Search" />
           </li> 
        <li> <i className="search_but" ><FaSearch/></i></li>
        </ul>
        </div>

    )
}
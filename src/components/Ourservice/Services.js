import React from 'react'
import {FaBaseballBall} from "react-icons/fa";
import {FaBriefcase} from "react-icons/fa";
import {FaArchive} from "react-icons/fa";
import {FaAddressCard} from "react-icons/fa";
import {FaAdversal} from "react-icons/fa";
import '../../style/services.css';
export default function Services() {
    return (
        <div className="service">
            <h2>Our Services</h2>
            <div className="serviceSection">
                <div><div><i><FaBaseballBall/></i></div><h4>MADUKA</h4></div>
                <div><div><i><FaBriefcase/></i></div><h4>MADUKA</h4></div>
                <div><div><i><FaArchive/></i></div><h4>MADUKA</h4></div>
                <div><div><i><FaAddressCard/></i></div><h4>MADUKA</h4></div>
                <div><div><i><FaAdversal/></i></div><h4>MADUKA</h4></div>
                <div><div><i><FaBaseballBall/></i></div><h4>MADUKA</h4></div>
            </div>

        </div>
    )
}

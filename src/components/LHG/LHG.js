import React from 'react';
import '../../style/lhg.css';
import { FaArrowAltCircleDown} from "react-icons/fa";
import {FaAndroid} from "react-icons/fa";
import {FaArrowCircleRight} from "react-icons/fa";
export default function LHG() {
    return (
        <div className="lgh">
            <div className="lib">
                <i><FaArrowAltCircleDown/></i>
                <h4>Library</h4>
                <p>delectus reiciendis maiores alias consequatur aut.maiores alias consequatur aut.</p>
            </div>
            <div className="and">
                <i><FaAndroid/></i>
                <h4>Hall</h4>
                <p>delectus reiciendis maiores alias consequatur aut.maiores alias consequatur aut.</p>
            </div>
            <div className="gym">
                <i><FaArrowCircleRight/></i>
                <h4>Gym</h4>
                <p>delectus reiciendis maiores alias consequatur aut.maiores alias consequatur aut.</p>
            </div>
        </div>
    )
}

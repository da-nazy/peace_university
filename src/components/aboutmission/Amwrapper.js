import React from 'react';
import Amleft from './Amleft';
import Amright from './Amright';
import '../../style/amwrapper.css';
export default function Amwrapper() {
    return (
        <div className="amwrap">
           <Amleft/>
           <Amright /> 
        </div>
    )
}

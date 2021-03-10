import React from 'react';
import '../../style/header.css';
import Left_header from './Left_header';
import Right_header from './Right_header';


export default function Header() {
    return (
        <div className="test">
          <Left_header/>
          <Right_header/>
        </div>
        
    )
}

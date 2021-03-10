import React, { useRef, useState } from 'react';
import '../../style/staff.css';
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter} from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import img1 from "../../images/22.jpg";
import img2 from "../../images/33.jpg";

export default function Staff() {

    const midIcon = useRef()

    console.log(midIcon)
     const[displayMidIcon,setDisplayMidIcon] = useState(null);
     const staffs=[
         {
             imge:img1,
             text:"Lorem Ipsum is simply a dummy text",
             title:"Professor",
             name:"Tochukwu"
         },
         {
            imge:img2,
            text:"Lorem Ipsum is simply a dummy text",
            title:"Professor",
            name:"Tochukwu"
        },
        {
            imge:img1,
            text:"Lorem Ipsum is simply a dummy text",
            title:"Professor",
            name:"Tochukwu"
        },
        {
            imge:img1,
            text:"Lorem Ipsum is simply a dummy text",
            title:"Professor",
            name:"Tochukwu"
        },
     ]
    return (
        <div className="staffContainer">
           {
               staffs.map((staff,key)=>
               <div key={key} className="staffs" onMouseEnter={() => setDisplayMidIcon(key)}
               onMouseLeave={()=>setDisplayMidIcon(null)}
               >
                   <div className="imgContainer" >
                       <div className="media_handle" ref={midIcon}style={{transform: displayMidIcon === key ? 'translateY(0)': 'translateY(200px)'}} >
                           <h6>{staff.text}</h6>
                          <div  className="mdicon">
                              <i><FaFacebook/></i>
                              <i><FaLinkedin/></i>
                              <i><FaTwitter/></i>
                           </div>
                       </div>
    
                   </div>
                   <div className="staffDetail">
                       <h5>{staff.title}</h5>
                       <h6>{staff.name}</h6>
    
                    </div>
                </div> 
                )
           }

        </div>
    )
}

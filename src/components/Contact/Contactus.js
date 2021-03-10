import React from 'react';
import '../../style/contactus.css';
import { FaMapMarker,FaPhone,FaEnvelope} from "react-icons/fa";

export default function Contactus(){
    const address=[
        {
          head:"Address:",
          name:"ip3 9RR UK",
          img:<FaMapMarker/>
        },
        {
            head:"Phone :",
            name:"+1 234 5678",
            img:<FaPhone/>
        },
        {
            head:"Email :",
            name:"mail@example.com",
            img:<FaEnvelope/>
        }
    ];
    return(
        <div className="contact">
        <div className="address">
            {
                address.map((address,key)=>
                <div key={key} className="cName">
                    <h5 className="hd">{address.head}</h5>
                    <p className="bdy"><i>{address.img}&nbsp;&nbsp;</i>{address.name}</p>
                </div>
                )
            }
        </div>
        <div className="Form">
            <h3 className="ct">Contact Us:</h3>
            <form>
             <input type="text" name="firstName" placeholder="First Name" required/>
             <input type="text" name="lastName" placeholder="Last Name" required/>
             <br/>
             <input type="email" name="email"   placeholder="Email" required/>
             <input type="phone" name="phone" placeholder="Phone Number" required/>
             <br/>
             <textarea placeholder="Message" />
             <br/>
              <input type="submit" name="submit" value="Submit"/>
            </form>
        </div>
        </div>
    )
}
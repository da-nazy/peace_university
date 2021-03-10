import React, { useState } from 'react';
import '../../style/route.css';
import GoogleMaps from 'simple-react-google-maps';
 export default function Route(){

   const [show,setShow]=useState(false);
    return(

<div> 
<div className="routeHead" onClick={()=>setShow(!show)} style={{backgroundColor:show?'#095880':''}} >
<h5>CLICK HERE FOR ROUTE MAP</h5>
</div>
<div className="routeMap" style={{display:show?'block':'none'}}>
<GoogleMaps
apiKey={"AIzaSyCE41gWBv1AfHzJNsyvCQe6FIPpYHLKcrs"}
style={{height:"100%",width:"100%"}}
zoom={6}
center={{lat:37.4224764, lng:-122.0842499}}
markers={{lat:37.4224764, lng:-122.08499}} //optional
/>
</div>

</div>
    )
 }
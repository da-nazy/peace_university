import React,{Component} from 'react';
import '../../style/amright.css';
export class  Amright extends Component {
  

      state = {
          activeLink: null
      }

      handleClick (e) {
        console.log(typeof e.target.className);
        let a=e.target.className;
    //     a.split(' ').find(value => value === 'some' && this.setState({ activeLink: }))
      }

    render() {

     return(
       
        <div className="amright">

<ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
<li className="nav-item" >
<a className="nav-link active"  id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab"  aria-controls="pills-home" aria-selected="true">About Us</a>
</li>
<li className="nav-item">
<a className="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Our mission</a>
</li>
</ul>
<div className="tab-content" id="pills-tabContent">
<div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</div>
<div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">L is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</div>
</div>
<h6 class="amfoot">when an unknown printer took a galley of type and scrambled it to make a type specimen book.</h6>
        </div>
      
  
     )
}
}
export default Amright;
import React,{component} from "react";

import './Footer.css'
import {Link} from 'react-router-dom'

import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
function Footer() {
    const navStyle = {
        color:'white'
    };
     return(
   <div className="Footer">
     <div class="row">
<div className="col-md-3">
    <p>GET IN TOUCH WITH US</p> 
        <hr/>
          
   <ul>
    Phone: +41792414544
   <li><Link> info@adre-abt.com </Link></li>
  </ul>
</div>
<div className="col-md-3">
           <p>OUR MOBILE APP</p> 
           <hr/>
</div>

<hr />
         
<div className="col-md-3">
           <p>ABOUT US</p> 
           <hr/>       
       
           <Link style ={navStyle} to ="/Home"><li>About the shop</li></Link>   
            <Link style ={navStyle} to ="/Home"><li>Our story</li></Link>
            <Link style ={navStyle} to ="/Home"><li>Services</li></Link>   

            </div>
         <div className="col-md-3">
           <p>ACCOUNT & SHIPPING INFO</p>
           <hr/> 
           <Link style ={navStyle} to ="/Home"><li style-type="disc">Your Account;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li></Link>
           <Link style ={navStyle} to ="/Home"><li>Shipping rates and policies</li></Link>
           <Link style ={navStyle} to ="/Home"><li>Refunds and Replacements</li></Link>
           <Link style ={navStyle} to ="/Home"><li>Taxes&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li></Link>
           <Link style ={navStyle} to ="/Home"><li>Delivery info&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li></Link>
           <Link style ={navStyle} to ="/Home"><li>Affiliate program&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li></Link>
         </div>
       </div>
    </div>
        
            
       
        
         
      
     
     )
 };

export default Footer;
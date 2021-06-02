 import React from 'react'
 import {Link} from 'react-router-dom'
;
 
 function Nav() {
     const navStyle = {
         color:'white'
     };
     return (
         <nav>
             {/* <h3>logo</h3> */}
             <ul className="nav-links">
                 <Link style={navStyle} to = "/Home">
                  <li>Home</li>
                  </Link>
                  <Link style={navStyle} to= "/Main">
                  <li>Product</li>
                  </Link>
                  <Link style={navStyle}to = "/Cart">
                  <li>Cart</li>
                  </Link>
             </ul>
         </nav>
     )
 }
 
 export default Nav
 
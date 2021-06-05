import React,{useState}  from "react";
import { Items } from "./Items";
import { NavLink } from "react-router-dom"
import { useHistory } from "react-router-dom";
import { FcMenu } from "react-icons/fc";



const Data1=()=>{
    const listItems=Items.map((item)=>
<div className={`card${activeView}`} key={item.id}>

    <div className="card_img">
 <img src={item.pic} className="img2" />
        
    </div>
    </div>
    );
    // console.log(Items);
return(
    <div className="main_content">
    <nav>
    <div className="container">
    <FcMenu size={35} className="menu"></FcMenu>
      

    <ul className="navbar">
          <NavLink className="n1" to="/" >Home</NavLink>

         <NavLink className="n2" to="/Products" > Products</NavLink>

           <NavLink className="n3" to="/Cart">Cart</NavLink>
          </ul>
       
          </div>
         </nav>
        
<div className="pp">
 <h2 className="bb">Products</h2>
<h4 className="h">Home - Product</h4> 
</div>
{/* <p className="p">products</p> */}




        
        
 
 

     <div className="container f">
    <p>Technowells @2021</p>
    <div className="social">
        <i className="fa fa-facebook"/>
        <i className="fa fa-instagram"/>
    </div> 
        </div>

</div>
    )
    }

export default Data1

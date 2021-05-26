import React,{useState} from 'react'

import { FaGripHorizontal, FaListUl } from "react-icons/fa";
    
 function Header(props) {
   return ( 

   
 
   


    <div class="main">
      <div class="red">
          <a href="#/"><p>info@andre-abt.com</p></a> 
        </div>
   
        <div class="white">
           <a href="#/">HOME</a>&nbsp;&nbsp;&nbsp; <a href="#/">PRODUCTS</a>&nbsp;&nbsp;&nbsp; <a href="#/">CART</a> 
        </div>

         
             
        <header class="row block center">

          
        {/* <div class="container">  */}
	<div class="row">
		<div class="col-md-8 text-left">
			<a href="">Products</a>
		</div>
		<div class="col-md-4 text-right">
			<label>Home - Products</label>
		</div>
	{/* </div> */}
 </div>

       


</header>

<div className="top-h-p">
        <label for="sort">Sort by:</label>

        <select name="sort" id="sort">
          <option value="Newest Articles">Newest Articles</option>
          <option value="Low-High Price">Low-High Price</option>
          <option value="High-Low Price">High-Low Price</option>
          <option value="A-Z Order">A-Z Order</option>
          <option value="Z-A Order">Z-A Order</option>
        </select>
        <div className="items">Showing: 1-8 items</div>
        {/* <button className="grid-view">
          <FaGripHorizontal></FaGripHorizontal>
        </button>
        <button className="list-view">
          <FaListUl></FaListUl>
        </button> */}
      </div>


             
         
        
          


     
     </div>
    

      










    
    )
}

export default Header

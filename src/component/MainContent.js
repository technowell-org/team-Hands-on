import React from 'react'
import product_card from '../data/Product_data'

const MainContent=()=>{
    console.log(product_card);
const listItems=product_card.map((item)=>


<div className="card" key={item.id}>

    <div className="card_img">
    <div id="off">{item.offer}</div>
        <div id="rating">Rating:{item.rating}</div>
        
        <img src={item.thumb} className="img"/>
    </div>
<div className="card_header">
    <h3 className="product">{item.product_name}</h3>
    <h4 className="price">{item.currency}</h4>
    <h4 className="des">{item.price}</h4>
<div className="btn">ADD TO CART</div>
</div>


</div>


);
return(

<div className="main_content">
<h3 className="bb">Products</h3>
{listItems}

</div>  
    )
    }

export default MainContent

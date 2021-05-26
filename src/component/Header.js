import React,{useState} from 'react'

    
 function Header(props) {
 const[products]=useState([
 {
name:'Famous blue bag',
cost:'$750.00',
image:'https://firebasestorage.googleapis.com/v0/b/cas-fee-shop.appspot.com/o/product-images%2F02.jpg?alt=media&token=b963ab93-6047-43dc-8f66-77b3f15655a1'
 

},






 ])

    return ( 

   
 
   


    <div class="main">
      <div class="red">
          <a href="#/"><p>info@andre-abt.com</p></a> 
        </div>
   
        <div class="white">
           <a href="#/">HOME</a>&nbsp;&nbsp;&nbsp; <a href="#/">PRODUCTS</a>&nbsp;&nbsp;&nbsp; <a href="#/">CART</a> 
        </div>

          {/* <div class="blue"> */}
             
        <header class="row block center">
        <div class="container">
	<div class="row">
		<div class="col-md-8 text-left">
			<a href="">Products</a>
		</div>
		<div class="col-md-4 text-right">
			<label>Home - Products</label>
		</div>
	</div>
</div>

              {/* <a href="#/">  <h3>products</h3></a>
              
            <div>
              <a href="#/cart">Home</a> <a href="#/signin">.products</a> 
          </div> */}
         
        </header>
          {/* </div> */}
        {/* <div class="App">
        <h1>products</h1>
        <div>
        <h3>Famous blue bag</h3>
         <h4>$750.00</h4>
        <img src="https://firebasestorage.googleapis.com/v0/b/cas-fee-shop.appspot.com/o/product-images%2F02.jpg?alt=media&token=b963ab93-6047-43dc-8f66-77b3f15655a1"/>
        <button>Add to cart</button>
        </div>
        </div>
   */}


     
     </div>
    

      










    //     <div className="a">
            
    //    <header className="row block center">
    //        <div>
               
    //            <a href ="#/">
    //                <h1>products</h1>
    //            </a>
    //        </div>
    //        <div>
    //            <a href = "#/cart">Home</a> <a href = "#/signin">.products</a>
                
    //        </div>
    //    </header>
    //  </div> 
    )
}

export default Header

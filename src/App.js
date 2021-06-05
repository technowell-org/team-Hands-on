// import logo from './logo.svg';
import './App.css';
import react, { useState } from "react";
 import {BrowserRouter,Route,Switch} from "react-router-dom"; 
 import Products from "./components/products/Products";
import Home from "./components/Home"
 import Cart from "./components/cart/Cart"

function App() {
  const [cartItem, setCartItem] = useState([]);
  return (
    
 <BrowserRouter>
    <div className="">
   <Switch>
       <Route exact path="/">
          <Home />
        </Route>
        <Route path="/Products/:id">
          <Products />
        </Route>
        <Route path="/Cart">
          <Cart />
        </Route>
        </Switch>
        
    </div>
  </BrowserRouter>
  );
}

export default App;

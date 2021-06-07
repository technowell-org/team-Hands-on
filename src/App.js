import { useState } from "react";
import Homee from "./component/Homee";
import Products from "./component/Products/Main";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./component/Header";
import { Item } from "./component/Products/Item";
import Cart from "./component/Cart/Cart";



const App = () => {
  const [cartItem, setCartItem] = useState([]);
  return (
    <div className="App">
     
      <BrowserRouter>
        <div>
          <Header></Header>
          <Switch>
            <Route path="/" exact component={Homee} />
            <Route
              path="/products"
              exact
              render={(props) => (
                <Products
                  {...props}
                  cartItem={cartItem}
                  setCartItem={setCartItem}
                />
              )}
            />

            <Route
              path="/products/:id"
              exact
              render={(props) => (
                <Item
                  {...props}
                  cartItem={cartItem}
                  setCartItem={setCartItem}
                />
              )}
            />
            <Route
              path="/cart"
              exact
              render={(props) => (
                <Cart
                  {...props}
                  cartItem={cartItem}
                  setCartItem={setCartItem}
                />
              )}
            />
          </Switch>
        </div>
      </BrowserRouter>
      
     
    </div>
  );
};

export default App;
import { useState } from "react";
import Home from "./components/Home";
import Products from "./components/products/Products";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import { Item } from "./components/products/Item";
import Cart from "./components/cart/Cart";

const App = () => {
  const [cartItem, setCartItem] = useState([]);
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Header></Header>
          <Switch>
            <Route path="/" exact component={Home} />
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

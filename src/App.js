import Home from "./components/Home";
import Products from "./components/products/Products";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Item from "./components/products/Item";
import Cart from "./components/cart/Cart";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Header></Header>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/products" exact component={Products} />

            <Route path="/products/:id" exact component={Item} />
            <Route path="/cart" exact component={Cart} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;

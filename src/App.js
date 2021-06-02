import logo from './logo.svg';
import './App.css';

import Main from './component/Main'

import Nav from './component/Nav'

import Cart from './component/Cart'
import Home from './component/Home'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"



const App = () => {
  
  return (
    
   <Router>
    <div className="App">   
<Nav></Nav>
<Route path ="/Main" component={Main} />
<Route path ="/Cart" component={Cart} />
<Route path ="/Home" component={Home} />
     
      
    {/* <Main></Main>
    <Home></Home> */}
    {/* <Cart></Cart> */}
   
   
   
     
    

 

      
     
      
       
      
   
    </div>
    </Router>
  );
}

export default App;

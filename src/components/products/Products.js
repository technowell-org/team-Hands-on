import React,{useState}  from "react";
import { Items } from "./Items";
import { Items1 } from "./Items1";
import { NavLink } from "react-router-dom"
import { FaGripHorizontal, FaListUl } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import { FcMenu } from "react-icons/fc";
import { useParams } from "react-router-dom";




const Products=()=>{
  const { id } = useParams();

    var des_price = [];
    Items.map((item, index) => {
      return des_price.push({ key: item.des_price, val: index });
    });
    var title = [];
    Items.map((item, index) => {
      return title.push({ key: item.title, val: index });
    });

    

    const onMenuClick = () => {

    };
    
    const [activeView, setActiveView] = useState("");
     const [sortby, setSortby] = useState([Array(Items.length).keys()]);

    const history = useHistory();


const onPreviousClick =()=>{
   history.push(`/Products`);
}

const onNextClick =()=>{
  setActiveView("");
}


const onGViewClick = () => {
      setActiveView("");
    }; 
    const onLViewClick = () => {
      setActiveView("-LView");
      };
  
    const onSortClick = (e) => {
      if (e.target.value === "NA") {
        setSortby([0,1,2,3,4,5,6,7]);
      } else if (e.target.value === "LH") {
        var lh = [...des_price];
        lh.sort((a, b) => a.key - b.key);
        var temp = [];
        lh.map((element) => temp.push(element.val));
        setSortby(temp);
      } else if (e.target.value === "HL") {
        var hl = [...des_price];
        hl.sort((a, b) => a.key - b.key);
        var temp1 = [];
        hl.map((element) => temp1.push(element.val));
        temp1.reverse();
        setSortby(temp1);
      } else if (e.target.value === "AZ") {
        var az = [...title];
        az.sort((a, b) => a.key.localeCompare(b.key));
        var temp2 = [];
        az.map((element) => temp2.push(element.val));
        setSortby(temp2);
      } else if (e.target.value === "ZA") {
        var za = [...title];
        za.sort((a, b) => a.key.localeCompare(b.key));
        var temp3 = [];
        za.map((element) => temp3.push(element.val));
        temp3.reverse();
        setSortby(temp3);
      }
    };
   
  

const listItems=Items.map((item)=>
<div className={`card${activeView}`} key={item.id}>

    <div className="card_img">
    <div id={`off${activeView}`}>{item.offer}</div>
        <div id={`rating${activeView}`}>Rating:{item.rating}</div>

         {/* <div onClick={() => onItemClick(`${item.id}`)}>  */}
         <img src={item.pic} className="img2" />
        {/* </div> */}
    </div>
<div className="card_header">
    <h3 className={`product${activeView}`}>{item.title}</h3>
    <h4 className={`price${activeView}`}>{item.actual_price}</h4>
    <h4 className={`des${activeView}`}>{item.des_price}</h4>
  <button type="button" className="btn">ADD TO CART</button>
  </div>
  </div>
        
);
return(
    <div className="main_content">
    <nav>
    <div className="container">
    <FcMenu size={35} className="menu" onClick={onMenuClick}></FcMenu>
      

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

<div className="top-h-p">
        <label for="sort">Sort by:</label>

        <select name="sort" id="sort" onChange={onSortClick}>
          <option value="NA">Newest Articles</option>
          <option value="LH">Low-High Price</option>
          <option value="HL">High-Low Price</option>
          <option value="AZ">A-Z Order</option>
          <option value="ZA">Z-A Order</option>
        </select>
        <div>Showing: 1-8 items</div>
        <button className={`grid-view${activeView}`} onClick={onGViewClick}>
          <FaGripHorizontal></FaGripHorizontal>
        </button>
        <button className={`list-view${activeView}`} onClick={onLViewClick}>
          <FaListUl></FaListUl>
        </button>
      </div>



 <div className="">{listItems}</div> 

 <div className="container1">
   <div>
 <button type="button" className={`btn1${activeView}`} onClick={onPreviousClick}>Previous</button>
 <button type="button" className={`btn2${activeView}`} onClick={onNextClick} >Next</button>
 </div>
</div>

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

export default Products

import React from "react";
import { Link} from "react-router-dom";
import './Home.css';
function navz1() {
    return (
      <div>
      <header>
      <h1>Shoe Store</h1>
      <nav>
          <ul>
          <li><Link to="/" >Home</Link></li>
          <li><Link to="/Customer" >Tshirts</Link></li>
          <li><Link to="/Products" >Shoes</Link></li>         
          <li><Link to="/Jeans" >Kids</Link></li><li><Link to="/Product" >Contact Us</Link></li> </ul>
      </nav>
  </header>
  </div>

);
}export default navz1
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, BrowserRouter as Router ,Routes, Link} from 'react-router-dom';
import './shoes/Nav.css'
import App from './App';
import Customer from './Navigation/Customer'
import Product from './Navigation/Product'
import Notfound from './Navigation/Notfound'
import TempComp from './Navigation/Notfound'
import Products  from './shoes/Product';
import App1 from './shoes/Nav1'
import Jeans from './shoes/Jeans';
import About from './Navigation/About';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <div>
    <ul className='nmaq' id="SideMenu">
            <li ><Link to="/" >Home</Link></li>
            <li><Link to="/Products" >Sports Shoes</Link></li>
            <li><Link to="/Customer" >Casual Shoes</Link></li>
            <li><Link to="/Jeans" >Formal Shoes </Link></li>
            <li><Link to="/Product" >ContactUs</Link></li>
            <li><Link to="/About" >About us</Link></li>
            <input  className='kl1' type="text" placeholder="Search Shoes"
                       name="search"></input>
            { /*     <button ><img src='https://cdn-icons-png.flaticon.com/128/54/54481.png'alt='name' />     . Search</button>
           <button className='ca1' ><img src='https://cdn-icons-png.flaticon.com/128/833/833314.png' alt='name' /></button></span>*/}
             </ul>
            
        

    
      <Routes>
        <Route exact path='/' element={<App1/>} />
        <Route  path="/Products" element={<Products/>} />
        <Route path="/Customer" element={<Customer/>} />
       
        <Route path="/Product" element={<Product/>}/>
        <Route path="/Jeans" element={<Jeans/>} />          
        <Route path='/About' element={<About/>}/>
      </Routes>
    </div>
  </Router>
);
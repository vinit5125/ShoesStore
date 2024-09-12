import React from "react";
import im1 from './Images/shoes-img.png'
import im2 from './Images/bg-effact.png'
import './Nav.css'
import { Route, BrowserRouter as Router ,Routes, Link} from 'react-router-dom';

function App1() {
    return (
      <div>
      
      <div className="main-container">
    <div className="navbar">
    </div>

    <div className="bottom-content">
        <div className="bottom-left">
            <h1>Your feet deserve the best</h1>
            <p>ShoeStores.com is all about footwear. We have been in the shoe business for over 130 years. Yes, you read that correctly, over a century plus a quarter</p>
            <div className="btn-sec">
                <button>Shop Now</button>
                <select name="cars" id="names">
                <option  value="types" disabled selected>Types   </option>
                      <option value="Mens">Mens</option>
                        <option value="Womens">Womens</option>
                          <option value="Kids">Kids</option>
                           
                            </select>
            </div>
        </div>
        <div className="bottom-right">
            <img src={im2} alt="" className="bg-effact"/>
            <img  src={im1} alt="" className="shoes-img"/>
        </div>
    </div>

   </div>
   

  <div className="products">
      <h2>Our Bestsellers</h2>
      <div  className="product">
          <img    src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/56db8a089e534ec89306b305fec42dcd_9366/NRGY_fusion_M_Black_IU6328_01_standard.jpg" alt="Shoe 1"/>
          <p></p>
          <h3>Running Shoes</h3>
                 
      </div>

      <div className="product">
          <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/9921d678-ed65-49c6-bdcb-e85bebeb7c46/AIR+JORDAN+1+MID.png" alt="Shoe 2"/>
          <p></p>
          <h3>Basketball Shoes</h3>
          
         
      </div>

      <div className="product">
          <img src="https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/n/w/i/-original-imahfxtgz7yqrt4g.jpeg?q=70" alt="Shoe 3"/>
          <p></p>
          <h3>Casual Shoes</h3>
        
         
      </div>
  </div>
  
  
  <footer>
      <p>&copy; 2024 Shoe Store. All rights reserved.</p>
        </footer>
  </div>

    );
  }export default App1
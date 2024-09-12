import React from "react";
import './Form.css';
const Product =()=>{
    return(
        <div className="vba"  >
            <form>
    <label for="firstname">First name: </label>
    <input className="mrt" type="text" placeholder="firstname"  required/>
    <br/>
   
    <label for="email">email:          </label>
    <input  className="email"  type="email" placeholder="enter emaill"  required/>
    <br/>
    <label for="password">Message: </label>
    <input className="mrt" type="messaage" name="message"  required/>
    <br/>
    <input className="sb1" type="submit" value="Login!"/>
</form>

        </div>
    )
}
export default Product
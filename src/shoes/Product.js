import React,{Component} from 'react';

import './Productlist.css';

import JSON from './Shoes.json'
import Productlist from './Productlist.js' ;

class Products extends Component {    
    constructor(){
        super();
        this.state={                          
            products : JSON                     
        }
    }
    render(){
        return(
            <div>
               
                <Productlist prodlist={this.state.products}/>             </div>
        )
    }
}
export default Products;
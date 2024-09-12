import React,{Component} from 'react';
//'react': is a default import .default imports are exported with 'export default <classname>'.there is only one default export .
/*{}:is used for a named import . member omports that are expected with 'export <function/props/class',
there can be multiple membber exports,*/

import JSON from './Jeans.json'
import Productlist from './Jeanslist.jsx' ; //ref  to the db.json data file

class Products extends Component {    
    constructor(){
        super();
        this.state={                          //state
                        //props
            products : JSON                     //assign the shoes.json data file to the 
        }
    }
    render(){
        return(
            <div>
               
                <Productlist prodlist={this.state.products}/> {/* pass data from.son file to productlist component prop */}
            </div>
        )
    }
}
export default Products;
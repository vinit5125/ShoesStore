import React,{Component} from 'react';
//'react': is a default import .default imports are exported with 'export default <classname>'.there is only one default export .
/*{}:is used for a named import . member omports that are expected with 'export <function/props/class',
there can be multiple membber exports,*/
import './Productlist.css';

import JSON from './Rjeans.json'
import Jeanslist from './Jeanslist.jsx' ; //ref  to the db.json data file

class Jeans extends Component {    
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
               
                <Jeanslist prodlist={this.state.products}/> {/* pass data from.son file to productlist component prop */}
            </div>
        )
    }
}
export default Jeans;
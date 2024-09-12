import React from "react"
import './Productlist.css';
const Jeanslist =(prodlist)=>{                      

    const renderlist =({prodlist})=>{                 
                                                     
        if(prodlist){                                
            return prodlist.map((data)=> {           
                 return (
                    <div className="mxs">
                    <div  key={data.id} className="card__mxs">
                       <article class="card__article">
                          <img src={data.img} lt={data.name} class="card__img"/>
           
                          <div className="card__data">
                          <h1>{data.name}</h1>
                      <p><h2>{data.brand}</h2></p>
                      <p className="price">${data.price}</p>
                      <p>{data.category}</p>
                      <p>{data.gender}</p>
                      <p><button>Add to Cart</button></p>
           
                             
                          </div>
                       </article>
           
                      
                    </div>
                 </div>
                )
            })
        }}
        return(
            <div className="container" >
                <div className="row">
                    {renderlist(prodlist)}{/* calls the above custom functions to render the data in the view*/}
                </div>
            </div>
        )
    }

export default Jeanslist;
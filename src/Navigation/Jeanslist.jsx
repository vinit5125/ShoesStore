import React from "react"
const Productlist =(prodlist)=>{                      

    const renderlist =({prodlist})=>{                 
                                                     
        if(prodlist){                                  
            return prodlist.map((data)=> {                
                 return (
                    <div class="mxs">
                    <div  key={data.id} class="card__mxs">
                       <article class="card__article">
                          <img src={data.img} alt={data.name} class="card__img"/>
           
                          <div class="card__data">
                          <h1>{data.name}</h1>
                      <p><h2>{data.brand}</h2></p>
                      <p class="price">${data.price}</p>
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
                    {renderlist(prodlist)}
                </div>
            </div>
        )
    }

export default Productlist;

import React, { useState } from 'react'
import { useStateValue } from '../StateProvider'
import './style/Product.css'
export default function Product({title,price,rating,images,ID}) {
    const [ratings, setState] = useState(null)
    const [{basket},dispatch]=useStateValue();
    const addToBasket=()=>{
        //dispatch the items to the datalyer
        dispatch({
            type:'ADD_TO_BASKET',
            item:{
                id:ID,
                title:title,
                image:images,
                price:price,
                rating:rating
            }
    })
    }

    return (
     <div className="product">
         <div className="product_info">
             <h1>{ID}</h1>
             <p>{title}</p>
             <p className="product_price">
                 <small>$</small>
                 <strong>{price}</strong>
             </p>
        
             <div className="product_rating">
             { [...Array(rating)].map(()=><span class="material-icons">star_rate</span>) }
             </div>
             <img src={images} />
             <button onClick={addToBasket}>Add to</button>
         </div>
     </div>
    )
}

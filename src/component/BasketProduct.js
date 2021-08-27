import React from 'react'
import './style/BasketProduct.css'
import {useStateValue} from '../StateProvider'
export default function BasketProduct({ id, image, title, price, rating }) {
    const [{basket},dispatch]=useStateValue();
    const removeFromBasket=()=>{
        // remove the item from basket
        dispatch({
            type:"REMOVE_FROM_BASKET",
            id:id
        })

    }
    return (
        <div className='basket_product'>
            <img className='basket_product_image' src={image} />
            <div className='basket_product_info'>
                <p className='basket_product_title'>{title}</p>
                <small>$</small>
                <strong>{price}</strong>
                <div class='basket_product_rating'> { [...Array(rating)].map(()=><span class="material-icons">star_rate</span>) }</div>
                <button className='basket_product_button' onClick={removeFromBasket}>Remove from basket</button>
            </div>
        </div>

    )
}

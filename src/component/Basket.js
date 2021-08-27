import React from 'react'
import './style/Basket.css'
import Subtotal from './Subtotal'
import BasketProduct from './BasketProduct'
import { useStateValue } from '../StateProvider'


export default function Basket() {
   const [{basket,user},dispatch]= useStateValue();

    return (
        <div className='basket'>
            <div className='basket_left'>
                <img  className='basket_add' src="/images/basket_banner.jpg" alt=""/>
                <div>
                    <h3>hello,{user?.email}</h3>
                    <h2 className='basket_title'>your shoping basket</h2>
                   {basket.map(item =>(
                       <BasketProduct
                       id={item.id}
                       title={item.title}
                       image={item.image}
                       price={item.price}
                       rating={item.rating}
                       />
                   ))}
                </div>
            </div>
            <div className='basket_right'>
               <Subtotal/>
            </div>

        </div>
    )
}

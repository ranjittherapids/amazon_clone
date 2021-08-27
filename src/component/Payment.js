import React from 'react'
import { useStateValue } from '../StateProvider'
import BasketProduct from './BasketProduct'
import { Link } from 'react-router-dom'
import './style/payment.css'
// import{cardElement,useStrip,useElement} from '@stripe/react-stripe-js'
export default function Payment() {
    const [{basket, user }] = useStateValue()
    // const strip=useStrip();
    // const element=useElement();
    return (
        <div className='payment'>
            <div className='payment_container'>
                <h1>checkout (<Link to='/basket'>{basket.length} items</Link>)</h1>
                <div className='payment_section'>
                    <div className='payment_title'>
                        <h3>Delivery adress</h3>
                    </div>
                    <div className='payment_adress'>
                        <p>
                            {user?.email}
                        </p>
                        <p>react lane provider</p>
                        <p>los angeles,PA</p>
                    </div>
                </div>
                <div className='payment_section'>
                <div className='payment_title'>
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className='payment_items'>
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
                <div className='payment_section'>

                </div>
            </div>
        </div>
    )
}

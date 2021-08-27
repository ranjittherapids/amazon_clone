import React from 'react'
import './style/Home.css'
import Product from './Product'

export default function Home() {
    return (
        <div className="home_container">
            <img className="home_img" src="/images/amazon_prime_banner.jpg" />
            <div className="home_row1">
                <Product title='this is your  this is your book please by if useful for youbook please by '
                ID="1234"
                    price={29.9}
                    rating={3}
                    images='/images/book2.png'
                />
                <Product title='this is your book please by if useful for you this is your book please by if useful for you '
                ID="12345"
                    price={9.9}
                    rating={3}
                    images='/images/book3.png' />


            </div>
            <div className="home_row2 ">
                <Product title='wow  very good materia this is your book please by if useful for youl'
                ID="123456"
                    price={39.9}
                    rating={5}
                    images='/images/home1.png' />
                <Product title='useful for you  '
                ID="1234567"
                    price={49.9}
                    rating={5}
                    images='/images/home2.png' />
                <Product title='this is your home materials useful  this is your book please by if useful for youfor you '
                ID="12345678" price={19.9}
                    rating={3}
                    images='/images/home3.png' />
            </div>
            <div className="home_row3">

                <Product title='that is this is your book please by if useful for you the best phone in this month '
                ID="123456789"
                    price={290.9}
                    rating={4}
                    images='/images/phone.png' />

            </div>
        </div>
    )
}

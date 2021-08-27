import React from 'react'
import { Link } from 'react-router-dom';
import './style/Header.css';
import {useStateValue} from '../StateProvider'
import { auth } from '../firebased';
export default function Header() {
    const [{basket,user},dispatch]=useStateValue()
    const handleAuthentication=()=>{
        if(user){
            auth.signOut();
        }

    }
    return (
        <div className="header">
        <Link to='/'>
            <img className="header_logo" src="/images/amazon_header_logo.png" />
        </Link>
            
            <div className="header_search">
                <input className="header_search_input" type="search" />
                 <span className=" search_icon material-icons">search</span>

            </div>
            <div className="header_nav">
                <Link to={!user && '/login'}>
                <div className="header_nav_option" onClick={handleAuthentication}>
                    <span className="header_nav_option_line1 ">Hello Guest</span>
                    <span className="header_nav_option_line2">{user?"Sign Out":"sign In"}</span>
                </div>
                </Link>
                
                <div className="header_nav_option">

                    <span className="header_nav_option_line1 ">Return</span>
                    <span className="header_nav_option_line2">& Orders</span>
                </div>
                <div className="header_nav_option">
                    <span className="header_nav_option_line1 ">Your</span>
                    <span className="header_nav_option_line2">Prime</span>

                </div>
                <Link className='link header_nav_option' to='/basket'>
                    <span className="header_add_material"><span className="material-icons">shopping_cart </span>{basket?.length}</span>
                </Link>
              
                

            </div>
        </div>
    )
}

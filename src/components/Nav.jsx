import React from 'react';
import logo from '../assets/fontlogo.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <header>
            <div className="logo">
                <Link to="/"> <img src={logo}></img></Link>
            </div>
            <div className="cart">
                <Link to="/cart"><FontAwesomeIcon icon={faCartShopping} /> </Link>
            </div>
        </header>
    )
};

export default Nav;
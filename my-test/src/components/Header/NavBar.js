import React from "react";
import cart from '../../assets/icons/cart.png';


const NavBar = () => (
    <nav className="navBar">
        <a className="navBar_item">Equipment</a>
        <a className="navBar_item">About us</a>
        <a className="navBar_item">Blog</a>
        <a className="navBar_item">
            <img src={cart} alt="account icon" />
            Account
        </a>
    </nav>
);

export default NavBar;
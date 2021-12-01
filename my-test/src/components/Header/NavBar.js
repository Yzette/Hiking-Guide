import React from "react";
import cart from '../../assets/icons/cart.png';


const NavBar = () => (
    <nav className="navBar">
        <a href="" className="navBar_item">Equipment</a>
        <a href="" className="navBar_item">About us</a>
        <a href="" className="navBar_item">Blog</a>
        <a href="" className="navBar_item">
            <img src={cart} alt="account icon" />
            Account
        </a>
    </nav>
);

export default NavBar;
import React from "react";
import NavBar from "./NavBar";

import logo from '../../assets/icons/Logo.svg';
import cart from '../../assets/icons/cart.png';

import './header.scss';

// ici j'utilise des liens à l'aide de la balise <a> 
// car ne réalisant que l'intégration d'une page "statique" 
// et unique je ne vais pas installer react-router-dom qui me permettrait d'utiliser Link

const Header = () => (
    <header className="header">
        <a className="header_logo">
            <img src={logo} alt="website logo" />
        </a>
        <NavBar />
        <a className="header_account">
            <img src={cart} alt="account icon" />
            Account
        </a>
    </header>

);

export default Header;
import React from "react";
import NavFooter from './NavFooter';

import logo from '../../assets/icons/Logo.svg';


import './footer.scss';

const Footer = () => (
    <footer className="footer">
        <div className="footer_left">
            <div className="footer_left_top">
                <a href="" className="footer_left_logo">
                    <img src={logo} alt="website logo" />
                </a>
                <p className="footer_left_link">
                    Get out there &amp; discover your next <br/> slope, mountain &amp; destination!
                </p>
            </div>
            <div className="footer_left_bottom">
                <p className="footer_left_copyright">
                    Copyright 2019 MNTN, Inc. Terms &amp; Privacy
                </p>
            </div>
        </div>
        <NavFooter />
    </footer>
);

export default Footer;
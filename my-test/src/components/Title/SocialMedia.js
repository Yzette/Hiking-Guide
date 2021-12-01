import React from "react";

import instagram from '../../assets/icons/instagram.png';
import twitter from '../../assets/icons/twitter.png';

const SocialMedia = () => (
    <div className="socialMedia">
        <p className="socialMedia_text">Follow us</p>
        <a href="">
        <img src={instagram} alt="instagram icon" />
        </a>
        <a href="">
        <img src={twitter} alt="twitter icon" />
        </a>

    </div>
);

export default SocialMedia;
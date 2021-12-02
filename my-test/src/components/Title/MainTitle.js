import React from "react";

import arrow from '../../assets/icons/arrow.png';



const MainTitle = () => (
    <div className="mainTitle">
        <div className="mainTitle_top">
            <div className="line"></div>
            <h5 className="mainTitle_top_subtitle">a hiking guide</h5>
        </div>
        <h1 className="mainTitle_medium">be prepared for the mountains and beyond!</h1>
        <div className="mainTitle_bottom">
            <p className="mainTitle_bottom_text">scroll down</p>
            <img src={arrow} alt="arrow to scroll" />
        </div>

    </div>

);

export default MainTitle;
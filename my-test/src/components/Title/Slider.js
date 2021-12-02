import React from "react";

import slider from '../../assets/icons/Slider.png';


const Slider = () => (
    <div className="slider">
        <div className="slider_left">
            <p>Start</p>
            <p>01</p>
            <p>02</p>
            <p>03</p>
        </div>
        <div className="slider_right">
            <img src={slider} alt="progress bar" />
        </div>
    </div>
);

export default Slider;
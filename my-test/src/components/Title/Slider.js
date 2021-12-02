import React from "react";

import slider from '../../assets/icons/Slider.png';


const Slider = ({ scroll }) => (
    <div className="slider">
        <div className="slider_left">
            <p>Start</p>
            <p>01</p>
            <p>02</p>
            <p>03</p>
        </div>
        <div className="slider_right">
            <div id="progress_bar_container">
                <div className="progress_bar" style={{transform: `scale(${scroll}, 1)`, opacity: `${scroll}`}}></div>
            </div>
        </div>
    </div>
);

export default Slider;
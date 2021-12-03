import React from "react";


import hiker from '../../assets/images/hiker.png';
import one from '../../assets/icons/one.png';
import arrow from '../../assets/icons/arrow-more.png';

const FirstContent = () => (
    <div className="firstContent" id="01">
        
        <div className="firstContent_introduction">
            <div className="firstContent_introduction_top">
                <img className="firstContent_introduction_top_one" src= {one} alt="number one" />
                <div className="firstContent_introduction_top_line"></div>
                <h5 className="firstContent_introduction_top_subtitle">get started</h5>
            </div>
            <div className="firstContent_introduction_medium">
                <h2 className="firstContent_introduction_medium_title">What level of  hiker are you?</h2>
                <p>Determining what level of hiker you are can be an important tool when planning future hikes. This hiking level guide will help you plan hikes according to different hike ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you – novice, moderate, advanced moderate, expert, or expert backpacker? </p>
            </div>
            <div className="firstContent_introduction_bottom">
                <p>read more</p>
                <img src={arrow} alt="arrow icon read more" />
            </div>
        </div>
        <img className="firstContent_image" src={hiker} alt="hiker picture" />
    </div>
);

export default FirstContent;
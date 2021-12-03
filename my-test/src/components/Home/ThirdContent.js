import React from "react";


import compass from '../../assets/images/compass.png';
import three from '../../assets/icons/three.png';
import arrow from '../../assets/icons/arrow-more.png';

const ThirdContent = () => (
    <div className="thirdContent" id="03">
        
        <div className="thirdContent_introduction">
            <div className="thirdContent_introduction_top">
                <img className="thirdContent_introduction_top_three" src= {three} alt="number three" />
                <div className="thirdContent_introduction_top_line"></div>
                <h5 className="thirdContent_introduction_top_subtitle">where you go is the key</h5>
            </div>
            <div className="thirdContent_introduction_medium">
                <h2 className="thirdContent_introduction_medium_title">Understand Your Map &amp; Timing</h2>
                <p>To start, print out the hiking guide and map. If it’s raining, throw them in a Zip-Lock bag. Read over the guide, study the map, and have a good idea of what to expect. I like to know what my next landmark is as I hike. For example, I’ll read the guide and know that say, in a mile, I make a right turn at the junction..</p>
            </div>
            <div className="thirdContent_introduction_bottom">
                <p>read more</p>
                <img src={arrow} alt="arrow icon read more" />
            </div>
        </div>
        <img className="thirdContent_image" src={compass} alt="compass picture" />
    </div>
);

export default ThirdContent;
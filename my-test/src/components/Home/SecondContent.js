import React from "react";


import view from '../../assets/images/view.png';
import two from '../../assets/icons/two.png';
import arrow from '../../assets/icons/arrow-more.png';

const SecondContent = () => (
    <div className="secondContent" id="02">
        <img className="secondContent_image" src={view} alt="a nice view picture" />
        <div className="secondContent_introduction">
            <div className="secondContent_introduction_top">
                <img className="secondContent_introduction_top_two" src= {two} alt="number two" />
                <div className="secondContent_introduction_top_line"></div>
                <h5 className="secondContent_introduction_top_subtitle">Hiking Essentials</h5>
            </div>
            <div className="secondContent_introduction_medium">
                <h2 className="secondContent_introduction_medium_title">Picking the right Hiking Gear!</h2>
                <p>The nice thing about beginning hiking is that you don’t really need any special gear, you can probably get away with things you already have.
                Let’s start with clothing. A typical mistake hiking beginners make is wearing jeans and regular clothes, which will get heavy and chafe wif they get sweaty or wet.</p>
            </div>
            <div className="secondContent_introduction_bottom">
                <p>read more</p>
                <img src={arrow} alt="arrow icon read more" />
            </div>
        </div>
        
    </div>
);

export default SecondContent;
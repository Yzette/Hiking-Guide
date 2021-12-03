import React from "react";
import { Link } from "react-scroll";



const Slider = ({ scroll }) => (
    <div className="slider">
        <div className="slider_left">
            <Link 
            activeClass="active" 
            to="start" 
            spy={true} 
            smooth={true} 
            offset={-70} 
            duration={500}>
            Start
            </Link>
            <Link 
            activeClass="active" 
            to="01" 
            spy={true} 
            smooth={true} 
            offset={50} 
            duration={500}>
            01
            </Link>
            <Link 
            activeClass="active" 
            to="02" 
            spy={true} 
            smooth={true} 
            offset={50} 
            duration={500}>
            02
            </Link>
            <Link 
            activeClass="active" 
            to="03" 
            spy={true} 
            smooth={true} 
            offset={50} 
            duration={500}>
            03
            </Link>
        </div>
        <div className="slider_right">
            <div id="progress_bar_container">
                <div className="progress_bar" style={{transform: `scale(${scroll}, 1)`, opacity: `${scroll}`}}></div>
            </div>
        </div>
    </div>
);

export default Slider;
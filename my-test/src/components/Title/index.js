import React, { useEffect, useState } from "react";
import SocialMedia from "./SocialMedia";
import MainTitle from "./MainTitle";
import Slider from "./Slider";

import './title.scss';

const Title = () => {

    const [scroll, setScroll] = useState(0);

useEffect(() => {

    let progressBarHandler = () => {
        
        const totalScroll = document.documentElement.scrollTop;
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scroll = `${totalScroll / windowHeight * 100}%`;

        setScroll(scroll);
    }

    window.addEventListener("scroll", progressBarHandler);

    return () => window.removeEventListener("scroll", progressBarHandler);
});

 return (
    <div className="title">
        <SocialMedia />
        <MainTitle />
        <Slider scroll={scroll} />
    </div>
);
};

export default Title;
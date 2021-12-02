import React from "react";
import SocialMedia from "./SocialMedia";
import MainTitle from "./MainTitle";
import Slider from "./Slider";

import './title.scss';

const Title = () => (
    <div className="title">
        <SocialMedia />
        <MainTitle />
        <Slider />
    </div>
);

export default Title;
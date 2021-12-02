import React from "react";

import FirstContent from "./FirstContent";
import SecondContent from "./SecondContent";
import ThirdContent from "./ThirdContent";


import './home.scss';

const Home = () => (
    <main className="home">
        <FirstContent />
        <SecondContent />
        <ThirdContent />
    </main>
);

export default Home;
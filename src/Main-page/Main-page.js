import React from "react";

import Greet from "../Greet/Greet";
import Speech from "../Speech/Speech";
import Carousel from "../Carousel/Carousel";
import MapApi from "../Map-API/Map-API";

import './Main-page.css';

const MainPage = ({ buisnessActive, setBuisnessActive }) => {
    return (
        <div className="main-page">
            <main>
                <Greet/>
                <Speech/>
                <Carousel
                    buisnessActive={buisnessActive}
                    setBuisnessActive={setBuisnessActive}/>
                <MapApi/>
            </main>
        </div>
    );
};

export default MainPage;
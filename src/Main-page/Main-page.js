import React from "react";

import Greet from "../Greet/Greet";
import Speech from "../Speech/Speech";
import Carousel from "../Carousel/Carousel";
import CallbackForm from "../Callback-form/Callback-form";
import MapApi from "../Map-API/Map-API";

import './Main-page.css';

const MainPage = () => {
    return (
        <div className="main-page">
            <main>
                <Greet/>
                <Speech/>
                <Carousel/>
                <CallbackForm/>
                <MapApi/>                
            </main>
        </div>
    );
};

export default MainPage;
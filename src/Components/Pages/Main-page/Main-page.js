// modules
import React from "react";

// Components
import Greet from "./Components/Greet/Greet";
import Speech from "./Components/Speech/Speech";
import Carousel from "./Components/Carousel/Carousel";
import MapApi from "./Components/Map-API/Map-API";

// styles
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
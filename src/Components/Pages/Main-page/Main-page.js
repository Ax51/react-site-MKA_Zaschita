// modules
import React from "react";

// Components
import Greet from "./Components/Greet/Greet";
import Speech from "./Components/Speech/Speech";
import Carousel from "./Components/Carousel/Carousel";
import Infographics from "./Components/Infographics/Infographics";
import MapApi from "../../Map-API/Map-API.js";

// styles
import './Main-page.css';

const MainPage = ({ buisnessActive, setBuisnessActive }) => {
    return (
        <div className="main-page">
            <main>
                {/* <Greet/>
                <Speech/> */}
                {/* <Carousel
                    buisnessActive={buisnessActive}
                    setBuisnessActive={setBuisnessActive}/> */}
                {/* <Infographics/> */}
                <MapApi
                    fromMainPage={true}/>
            </main>
        </div>
    );
};

export default MainPage;
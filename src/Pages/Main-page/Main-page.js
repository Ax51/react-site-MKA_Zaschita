// modules
import React from "react";

// Components
import Greet from "./Components/Greet/Greet";
import WhyWe from "./Components/Why-we/Why-we";
import Benefits from "./Components/Benefits/Benefits";
import WorkAreas from "./Components/Work-areas/Work-areas";
// import Speech from "./Components/Speech/Speech";
import Carousel from "./Components/Carousel/Carousel";
import Infographics from "./Components/Infographics/Infographics";
import MapApi from "../../Components/Map-API/Map-API.js";

// styles
import './Main-page.css';

const MainPage = ({ buisnessActive, setBuisnessActive }) => {
    return (
        <div className="main-page">
            <main>
                <Greet/>
                {/* <Speech/> */}
                <WhyWe/>
                <Benefits/>
                <WorkAreas/>
                <Carousel
                    buisnessActive={buisnessActive}
                    setBuisnessActive={setBuisnessActive}/>
                <Infographics/>
                <MapApi
                    fromMainPage={true}/>
            </main>
        </div>
    );
};

export default MainPage;
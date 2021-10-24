// modules
import React from "react";

// components
import NavLine from "../../Nav-line/Nav-line";
import ServicesComponent from "./Services-component/Services-component";
import BuisnessSwitch from "../../Buisness-switch/Buisness-switch";

// data
import buisnessDb from '../../../Db/Carousel-Db/Buisness-carousel_items.json'
import privateDb from '../../../Db/Carousel-Db/Private-carousel_items.json'

// pics
import noLogo from '../../img/mz_ic-1.fcb9.png'

// styles
import './Services-main-page.css';

export default function ServicesMainPage ({ buisnessActive, setBuisnessActive }) {
    
    function serviceComponents ( array, isBuisness = false ) {
        return array.map((item) => {
            const { name, img, site } = item;
            return (
                <ServicesComponent
                    key={name}
                    name={name}
                    img={img ?? noLogo}
                    site={site}
                    buisness={isBuisness}/>
            )
        })
    }

    return (
        <div className="services-page">
            <NavLine
                pathArray={[{name:"Услуги"}]}/>
            <div className="services-page_header">
                <h1>Основные виды оказываемой нашими адвокатами правовой помощи</h1>
                <div className="header-block header-block_dark"/>
                <BuisnessSwitch
                    buisnessActive={buisnessActive}
                    setBuisnessActive={setBuisnessActive}/>
            </div>
            {/* <div className="svp-list">
                <div className="svp-list_label"><div className="svp-list_label_bottom"/></div>
            </div> */}
            <div className="services-wrapper">
                {buisnessActive
                    ? serviceComponents(buisnessDb, true)
                    : serviceComponents(privateDb)}
            </div>
        </div>
    )
}


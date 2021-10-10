// modules
import React from "react";

// components
import NavLine from "../../Nav-line/Nav-line";

// styles
import './Services-page.css';

const ServicesPage = () => {
    return (
        <div className="services-page">
            <NavLine
                pathArray={[{name:"Услуги и цены"}]}/>
            <div className="services-page_header">
                <h1>This is Services page. Trust me</h1>
                <div className="header-block header-block_dark"/>
            </div>
        </div>
    )
}

export default ServicesPage;
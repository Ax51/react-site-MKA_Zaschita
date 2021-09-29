// modules
import React from "react";

// components
import NavLine from "../../Nav-line/Nav-line";

// styles
import './About-page.css';

const AboutPage = () => {
    return (
        <div className="about-page">
            <NavLine
                thisPageName="О нас"/>
            this is About page. trust me
        </div>
    )
}

export default AboutPage;
//modules
import React from "react";

//styles
import './Infographics_component.css';

export default function InfographicsComponent({ step, header, text, mirror = false, last = false }) {
    return (
        <div className="infographics-component_wrapper">
            <div className="infographics-label-count"><span className="infographics-label-count-num">{step}</span><br />Шаг</div>
            <div className="infographics-main-body">
                <h3 className="infographics-header">{header}</h3>
                <p className="infographics-main-text">{text}</p>
            </div>
        </div>
    )
}
//modules
import React from "react";

// pics
import label from '../../../../../img/infographics/info_label.png';
import labelMirror from '../../../../../img/infographics/info_label_mirror.png';

//styles
import './Infographics_component.css';

export default function InfographicsComponent({ step, header, text, mirror = false, last = false }) {
    return (
        <div className={`infographics-component_wrapper ${mirror ? "infographics-component_wrapper_mirror" : ''}`}>
            {!mirror
                ? <img
                    className="infographics-label-pic"
                    src={label}
                    alt="label"
                />
                : <img
                    className="infographics-label-pic_mirror"
                    src={labelMirror}
                    alt="label"
                />}
            <div className={!mirror ? "infographics-label-count" : "infographics-label-count_mirror"}>Шаг<br />{step}</div>
            <div className={`infographics-main-body ${mirror ? "infographics-main-body_mirror" : ''}`}>
                <h1 className={!mirror ? "infographics-header" : "infographics-header_mirror"}>{header}</h1>
                <div className={`header-sub-block header-block_dark ${mirror ? "infographics_header-sub-block_mirror" : ''}`} />
                <p className="infographics_main-text">{text}</p>
            </div>
            <div className="infographics_bottom-text-shadow" />
            {!last
                    ? <div className={`infographics_next-step-arrow ${mirror ? "infographics_next-step-arrow_mirror" : ""}`} />
                    : null}
        </div>
    )
}
// modules
import React from "react";
import { NavLink } from "react-router-dom";

// styles
import './Services-component.css';

export default function ServicesComponent ({ name, img, site, buisness }) {

    return (
        <div className="services-card_wrapper">
            <NavLink to={`/services/${buisness ? 'buisness' : 'private'}/${site}`}>
        <div className="services-card">
            <img
                src={img}
                alt="service" />
            <p>{name}</p>
        </div>
        </NavLink>
        </div>
    )
}
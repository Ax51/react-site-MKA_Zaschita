// modules
import React from "react";
import { NavLink } from "react-router-dom";

//pics
import noLogo from '../../../img/mz_ic-1.fcb9.png'

// styles
import './Services-component.css';

export default function ServicesComponent ({ name, img, site, buisness }) {

    return (
        <div className="services-card_wrapper">
            <NavLink to={`/services/${buisness ? 'buisness' : 'private'}/${site}`}>
        <div className="services-card">
            <img
                src={img}
                alt="service"
                onError={e => e.target.src = noLogo}/>
            <p>{name}</p>
        </div>
        </NavLink>
        </div>
    )
}
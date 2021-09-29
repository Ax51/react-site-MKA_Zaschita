//modules
import React from "react";
import { NavLink } from "react-router-dom";

//pics
import arrowRight from "../img/arrow-right.png";

//styles
import './Nav-line.css';

const NavLine = ({ thisPageName }) => {
    return (
        <div className="_nav-line">
                <NavLink
                    className="_nav-main"
                    to='/'>Главная</NavLink>
                <img
                    className="_nav-route_img"
                    src={arrowRight}
                    alt="path" />
                <div className="_nav-this">
                    {thisPageName}
                </div>
            </div>
    )
}

export default NavLine;
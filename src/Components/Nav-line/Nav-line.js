//modules
import React from "react";
import { NavLink } from "react-router-dom";

//pics
import arrowRight from "../img/arrow-right.png";

//styles
import './Nav-line.css';

const NavLine = ({ pathArray }) => {
    const pathNesting = pathArray.map((item) => {
        return (
            <React.Fragment key={item.name}>
                <img
                    className="_nav-route_img"
                    src={arrowRight}
                    alt="path" />
                {item.path ?
                    <NavLink className="_nav-main" to={`/${item.path}`}>
                        {item.name}
                    </NavLink> :
                    <div className="_nav-main">
                        {item.name}
                    </div>
                }
            </React.Fragment>
        )
    })
    return (
        <div className="_nav-line">
                <NavLink
                    className="_nav-main"
                    to='/'>Главная</NavLink>
                {pathNesting}
            </div>
    )
}

export default NavLine;
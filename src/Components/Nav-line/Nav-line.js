//modules
import React from "react";
import { NavLink } from "react-router-dom";

//pics
import arrowRight from "../img/arrow-right.png";

//styles
import './Nav-line.css';

const NavLine = ({ pathArray }) => {

    // pathArray = [{name:"Имя вкладки", path:"путь до вкладки без '/'"}]

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
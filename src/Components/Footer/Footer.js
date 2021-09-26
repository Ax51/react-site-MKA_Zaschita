import React from "react";
import { NavLink } from "react-router-dom";

import logo from '../img/mz_logo-blue.4cf7.png'

import './Footer.css';

const Footer = (props) => {
    const menuList = props.menuItems.map((item) =>
        <li key={item.name}>
            <NavLink to={item.site}>{item.name}</NavLink>
        </li>)

    return (
        <div className="footer">
            <NavLink to='/' className="logo">
                <img
                    className="logo-img"
                    src={logo}
                    alt='logo'
                    title='На главную'/>
            </NavLink>
            <div className="flex-container">
                <div className="footer-menu">
                    <ul>
                        {menuList}
                    </ul>
                </div>
                <div className="buisness-card">
                    <h3>Наш головной офис:</h3>
                    <a href="https://yandex.ru/maps/-/CCUqE8rpdC">
                        <p>123056 г. Москва</p>
                        <p>ул. Зоологическая, д. 30,<br/> стр. 2</p>
                    </a>
                    <a href="mailto:advokaty.zaschita@yandex.ru?subject=Вопрос адвокату">advokaty.zaschita@yandex.ru</a>
                    <a href="tel:+74957696889">8 (495) 769-68-89</a>
                    <a href="tel:+74992526522">8 (499) 252-65-22</a>
                </div>
            </div>
        </div>
    );
};

export default Footer;
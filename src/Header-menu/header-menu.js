import React from "react";

import './header-menu.css';

import logo from '../img/mz_logo-name.2c83.png'
import menu from '../img/mz_menu-17.3a29.png'

const HeaderMenu = () => {
    return (
        <header className="header-menu">
            <div className="header-menu__logo">
                <img
                    src={logo}
                    alt='logo' />
            </div>
            {window.innerWidth > 1000 ?
                <>
                    <div className="header-menu__menu-section">
                        <ul>
                            <li><a href="#">Стоимость</a></li>
                            <li><a href="#">Практики</a></li>
                            <li><a href="#">Адвокатская практика</a></li>
                            <li><a href="#">Карьера</a></li>
                            <li><a href="#">Контакты</a></li>
                        </ul>
                    </div>
                    <div className="header-menu__phones">
                        <ul>
                            <li><a href="tel:+74957696889">8(495)769-68-89</a></li>
                            <li><a href="tel:+74992526522">8(499)252-65-22</a></li>
                        </ul>
                    </div>
                </> :
                <div className="header-menu__menu-burger">
                    <a href="#">
                        <img
                            src={menu}
                            alt='menu' />
                    </a>
                </div>}
        </header>
    );
};

export default HeaderMenu;
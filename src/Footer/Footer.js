import React from "react";

import logo from '../img/mz_logo-blue.4cf7.png'

import './Footer.css';

const Footer = (props) => {
    const menuList = props.menuItems.map((item) => <li key={item.name}><a href={item.site}>{item.name}</a></li>)
    return (
        <div className="footer">
            <div className="logo">
                <img
                    src={logo}
                    alt='logo'/>
            </div>
            <div className="flex-container">
                <div className="footer-menu">
                    <ul>
                        {menuList}
                    </ul>
                </div>
                <div className="buisness-card">
                    <h3>Наш головной офис:</h3>
                    <p>123056 г. Москва</p>
                    <p>ул. Зоологическая, д. 30,<br/> стр. 2</p>
                    <a href="mailto:advokaty.zaschita@yandex.ru?subject=Вопрос адвокату">advokaty.zaschita@yandex.ru</a>
                    <a href="tel:+74957696889">8 (495) 769-68-89</a>
                    <a href="tel:+74992526522">8 (499) 252-65-22</a>
                </div>
            </div>
        </div>
    );
};

export default Footer;
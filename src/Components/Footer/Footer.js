import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import MapDb from '../../Db/Map-API-Db/Map-coordinates.js'

import logo from '../../img/mz_logo-blue.4cf7.png'
import mobileLogo from '../../img/mobile_logo_min.png'

import './Footer.css';

const Footer = ({menuItems}) => {
    const [ showAuthors, setShowAuthors ] = useState(false);
    const menuList = menuItems.map((item) =>
        <li key={item.name}>
            <NavLink to={`/${item.site}`}>{item.name}</NavLink>
        </li>)
    const { adress, eMail, phones, workingTime } = MapDb.branch_1.comment;

    function getWorkingTime() {
        return workingTime.map((i, b) => <p key={b} className="buisness-card_working-time">{i}</p>)
    }

    return (
        <div className="footer">
            <NavLink to='/' className="logo">
                <img
                    className="logo-img"
                    src={logo}
                    alt='logo'
                    title='На главную'/>
                <img
                    className="mobile-logo-img"
                    src={mobileLogo}
                    alt='logo'
                    title='На главную'/>
            </NavLink>
            <div className="flex-container">
                <div className="footer-menu">
                    <ul>
                        {menuList}
                    </ul>
                </div>
                <div className="svp-list_shadow">
                    <div className="svp-list_label">
                        <div className="buisness-card">
                            <h3>Наш головной офис:</h3>
                            <a href={adress[1]}>
                                <p>{adress[0].slice(0, 17)}</p>
                                <p>{adress[0].slice(17, 43)}</p>
                                <p>{adress[0].slice(43)}</p>
                            </a>
                            <a href={`mailto:${eMail[0]}?subject=Вопрос адвокату`}>{eMail[0].slice(0, 17)}<br/>{eMail[0].slice(17)}</a>
                            <a href={`tel:${phones[0]}`} style={{paddingBottom:0}}>{phones[0]}</a>
                            <a href={`tel:${phones[1]}`} style={{paddingTop:0}}>{phones[1]}</a>
                            {/* <p>Время работы:</p> */}
                            {getWorkingTime()}
                            <div className="svp-list_label_bottom"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className={showAuthors === 6 ? "authors-cover-active" : "authors-cover"}
                onClick={() => setShowAuthors(showAuthors => (showAuthors === 6) ? showAuthors = 1 : showAuthors + 1)}/>
            <div className="authors">
                <p className={showAuthors === 6 ? "authors-names-active" : "authors-names"}>Сайт создан исключительными силами двух человек:<br/>Александром Поляковым и Максимом Устинюком</p>
            </div>
        </div>
    );
};

export default Footer;
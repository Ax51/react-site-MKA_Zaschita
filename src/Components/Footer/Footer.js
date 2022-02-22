import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './footer.module.css';

import logo from '../../img/footer-logo.svg';
import apMoscowLogo from '../../img/logos/ap_moscow_logo.png';
import fpaLogo from '../../img/logos/fpa_logo.svg';
import minjustLogo from '../../img/logos/minjust_logo.png';

import buisnessArray from '../../Db/Carousel-Db/Buisness-carousel_items.json';
import privateArray from '../../Db/Carousel-Db/Private-carousel_items.json';


export default function Footer() {

    const thisYear = new Date().getFullYear()

    const buisnessMenu = buisnessArray.map(({name, site}, number) => {
        return (
            <li>
                <NavLink
                    to={`/services/buisness/${site}`}
                    key={number} >
                    {name}
                </NavLink>
            </li>
        )
    });
    const privateMenu = privateArray.map(({name, site}, number) => {
        return (
            <li>
                <NavLink
                    to={`/services/private/${site}`}
                    key={number} >
                    {name}
                </NavLink>
            </li>
        )
    });

    return(
        <div className={styles["footer"]}>
            <div className={styles["grid"]}>
                <div className={styles["grid-item"]}>
                    <img src={logo} alt="logo" />
                    <div className={styles["icon-set"]}>
                        <img src={apMoscowLogo} alt="moscow bar association" />
                        <img src={fpaLogo} alt="federal bar assosiation" />
                        <img src={minjustLogo} alt="ministry of justice" />
                    </div>
                </div>
                <div className={`${styles["grid-item"]} ${styles["hide"]}`}>
                    <h3>частным лицам</h3>
                    <ul>
                        {privateMenu}
                    </ul>
                </div>
                <div className={`${styles["grid-item"]} ${styles["hide"]}`}>
                    <h3>бизнесу</h3>
                    <ul>
                        {buisnessMenu}
                    </ul>
                </div>
            </div>
            <div className={styles["credits"]}>
                <p>{"\u00A9"} {thisYear} Московская коллегия адвокатов "Защита"</p>
                <p>Все права защищены</p>
                <p>Разработка дизайна сайта: <a href="https://www.instagram.com/uliawd/">Юлия Рыболовлева</a></p>
            </div>
        </div>
    )
}
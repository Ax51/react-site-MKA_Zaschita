import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import CallbackForm from '../Callback-form/Callback-form.js';

import './header-menu.css';

import logo from '../../img/mz_logo-name.2c83.png'
import miniLogo from '../../img/mobile_logo_min.png'
import phone from '../../img/telephone-fill__white.png'
import arrowUp from '../../img/arrow-up-circle.png'

const HeaderMenu = ({ menuItems }) => {

    const scrollUpFunc = e => {
        window.scroll({ top: 0, left: 0, behavior: 'smooth' })
    };

    const [mobileMenuActive, setMobileMenuActive] = useState(false);

    useEffect(() => {  // block scrolling while mobile menu opened
        mobileMenuActive
            ? document.body.style.overflow = "hidden"
            : document.body.style.overflow = ""
    })

    function menuList() {
        return menuItems.map(item => {
            if (item.name === 'Наш коллектив') {
                return (
                    <li key={item.name}>
                        <NavLink to={`/${item.site}`}>{item.name}</NavLink>
                    </li>
                )
            } else {
                return (
                    <li key={item.name}>
                        <NavLink to={`/${item.site}`} onClick={() => document.body.style = { overflow: '' }}>{item.name}</NavLink>
                    </li>
                )
            }
        })
    }

    function closeMobileMenu() {
        setMobileMenuActive(false)
        document.body.style = { overflow: '' }
    }

    function toggleMobileMenu() {
        setMobileMenuActive(!mobileMenuActive)
    }

    return (
        <>
            <input /* don't move this element! */
                id="header-menu_mobile-menu-checkbox"
                type="checkbox"
                onChange={toggleMobileMenu}
                checked={mobileMenuActive} />
            <label
                htmlFor="header-menu_mobile-menu-checkbox"
                className="header-menu_mobile-menu-label">
                <div className="header-menu_mobile-menu-icon" />
            </label>
            <header className="header-menu">
                <div className="header-menu_wrapper">
                    <div className="header-menu__logo">
                        <NavLink to="/" onClick={() => closeMobileMenu()}>
                            <img
                                className="header-menu__logo-img"
                                src={logo}
                                alt='logo'
                                title='На главную' />
                        </NavLink>
                    </div>
                    <div className="header-menu__logo_mobile">
                        <NavLink to="/" onClick={() => closeMobileMenu()}>
                            <img
                                className="header-menu__logo-img_mobile"
                                src={miniLogo}
                                alt='logo'
                                title='На главную' />
                        </NavLink>
                    </div>
                    <div className="header-menu__menu-section">
                        <ul>
                            {menuList()}
                        </ul>
                    </div>
                    <div className="header-menu__phones">
                        <ul>
                            <li><a href="tel:+74957696889">8(495)769-68-89</a></li>
                            <li><a href="tel:+74992526522">8(499)252-65-22</a></li>
                        </ul>
                    </div>
                </div>
                <a href="tel:+74957696889" className="header-menu_mobile_phone">
                    <img
                        src={phone}
                        alt="call us" />
                </a>
                <div
                    className="header-menu_mobile-menu"
                    onClick={closeMobileMenu}>
                    <ul>
                        {menuList()}
                    </ul>
                </div>
            </header>
            <button className="scroll-up-btn"
                onClick={scrollUpFunc}>
                <img
                    src={arrowUp}
                    alt='scroll up' />
            </button>
            <CallbackForm />
        </>
    );
};

export default HeaderMenu;
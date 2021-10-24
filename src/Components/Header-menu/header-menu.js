import React, { useState, useRef } from "react";
import { NavLink } from "react-router-dom";

import CallbackForm from '../Callback-form/Callback-form.js';

import './header-menu.css';

import logo from '../img/mz_logo-name.2c83.png'
import phone from '../img/telephone-fill__white.png'
import menu from '../img/mz_menu-17.3a29.png'
import arrowUp from '../img/arrow-up-circle.png'

const HeaderMenu = ({ menuItems }) => {

    const myRef = useRef(null);
    const scrollUpFunc = () => myRef.current.scrollIntoView()

    const [ mobileMenuActive, setMobileMenuActive ] = useState("header-menu_mobile-menu_wrapper"); 

    function menuList() {
        return menuItems.map((item) =>
            <li key={item.name}>
                <NavLink to={`/${item.site}`}>{item.name}</NavLink>
            </li>)
    }

    function toggleMobileMenu () {
        if (mobileMenuActive === "header-menu_mobile-menu_wrapper") {
            setMobileMenuActive("header-menu_mobile-menu_wrapper_active");
            document.body.style.overflow = "hidden";
        } else {
            setMobileMenuActive("header-menu_mobile-menu_wrapper");
            document.body.style.overflow = "";
        }
    }

    return (
        <>
            <div ref={myRef} />  {/* div with zero position to scroll to */}
            <header className="header-menu">
                <div className="header-menu__logo">
                    <NavLink to="/">
                        <img
                            className="header-menu__logo-img"
                            src={logo}
                            alt='logo'
                            title='На главную'/>
                    </NavLink>
                </div>
                <>
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
                </> 
                <div className="header-menu__menu-burger">
                    <a href="tel:+74957696889">
                        <button>
                            <img
                                src={phone}
                                alt="call us" />
                        </button>
                    </a>
                    <button
                        onClick={toggleMobileMenu}>
                        <img
                            src={menu}
                            alt='menu' />
                    </button>
                </div>
            </header>
            <div className={mobileMenuActive} /* "header-menu_mobile-menu_wrapper" */
                onClick={toggleMobileMenu}>
                <div className="header-menu_mobile-menu">
                    <ul>
                        {menuList()}
                    </ul>
                </div>
            </div>
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
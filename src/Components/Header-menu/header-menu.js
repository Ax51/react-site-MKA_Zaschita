import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import CallbackForm from '../Callback-form/Callback-form.js';

import MapDb from '../../Db/Map-API-Db/Map-coordinates.js';

import './header-menu.css';

import logo from '../../img/mz_logo-name.2c83.png'
import miniLogo from '../../img/mobile_logo_min.png'
import arrowUp from '../../img/arrow-up-circle.png'

const HeaderMenu = ({ menuItems }) => {

    const [mobileMenuActive, setMobileMenuActive] = useState(false),
        [workTimeNow, setWorkTimeNow] = useState(false);

    const { phones, workingTime } = MapDb.branch_1.comment;
    const holidays = [
        [1,2,3,4,5,6,7,8,9], // January
        [23], // February
        [7,8], // March
        [], // April
        [2,3,9,10], // May
        [13], // June
        [], // July
        [], // August
        [], // September
        [], // October
        [4], // November
        [] // December
    ];

    const scrollUpFunc = () => {
        window.scroll({ top: 0, left: 0, behavior: 'smooth' })
    };

    useEffect(() => {  // block scrolling while mobile menu opened
        mobileMenuActive
            ? document.body.style.overflow = "hidden"
            : document.body.style.overflow = ""
    })

    useEffect(() => {
        isWorkingTime()
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

    function showPhones() {
        return phones.map((phone, index) => <li key={index} className="header-menu__phones_phone"><a href={`tel:${phone}`}><i className="bi bi-telephone-fill" />{phone.replace(/\s/g, "")}</a></li>)  //.replace removes spaces in phone number
    }
    function showWorkingTime() {
        return workingTime.map((i, b) => <li key={b} className="ul_pencil"><p>{i}</p></li>)
    }

    function isWorkingTime() {
        const now = new Date(),
            startWorkHour = +workingTime[0].slice(7, 9),
            stopWorkHour = +workingTime[0].slice(13, 15);
        if (now.getHours() >= startWorkHour
            && now.getHours() < stopWorkHour
            && now.getDay() > 0 
            && now.getDay() < 6
            && !holidays[now.getMonth()].includes(now.getDate())) {
                setWorkTimeNow(true)
                let remainTimeToWork = (stopWorkHour - 1 - now.getHours()) * 3600000 /* 1 hour in ms */ + (60 - now.getMinutes()) * 60000 /* 1 min in ms */
                setTimeout(isWorkingTime, remainTimeToWork)
        } else {
            setWorkTimeNow(false)
            let remainTimeToWork = 600000; // initial value. 10 mins in ms
            if (now.getHours() < startWorkHour) { // too early
                remainTimeToWork = (startWorkHour - 1 - now.getHours()) * 3600000 /* 1 hour in ms */ + (60 - now.getMinutes()) * 60000 /* 1 min in ms */
            } else {  // too late
                remainTimeToWork = (23 - now.getHours() + startWorkHour) * 3600000 /* 1 hour in ms */ + (60 - now.getMinutes()) * 60000 /* 1 min in ms */
            }
            if (now.getDay() === 5 && now.getHours() >= stopWorkHour) { // if friday and late
                remainTimeToWork += 172800000;  // 48 hours in ms
            } else if (now.getDay() === 6 || holidays[now.getMonth()].includes(now.getDate())) {  // if saturday or holiday
                remainTimeToWork += 86400000;  // 24 hours in ms
            }
            // console.log(`Remain ${Math.floor(remainTimeToWork/86400000)} days, ${Math.floor((remainTimeToWork % 86400000)/3600000)} hours, ${Math.floor((remainTimeToWork % 3600000)/60000)} minutes`);
            setTimeout(isWorkingTime, remainTimeToWork)
            // console.log(`next timer will be in ${new Date(Date.now()+remainTimeToWork)}`);
        }
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
                            {workTimeNow ? showPhones() : showWorkingTime()}
                        </ul>
                    </div>
                </div>
                {workTimeNow
                    ? <a href={`tel:${phones[0]}`} className="header-menu_mobile_phone">
                        <i className="bi bi-telephone-fill" />
                    </a>
                    : <button
                        className="header-menu_mobile_phone header-menu_mobile_phone_unavaliable"
                        onClick={() => alert(`К сожалению, сейчас мы не работаем. Пожалуйста, позвоните нам в рабочее время! Режим работы: ${workingTime}`)}>
                        <i className="bi bi-telephone-x-fill" />
                    </button>}
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
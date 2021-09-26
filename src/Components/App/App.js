// modules
import React, { useState } from 'react';
import { Route } from 'react-router-dom'

// Components
import HeaderMenu from '../Header-menu/header-menu.js';

import MainPage from '../Pages/Main-page/Main-page.js';
import AboutPage from '../Pages/About-page/About-page.js';
import ServicesPage from '../Pages/Services-page/Services-page.js';
import TeamPage from '../Pages/Team-page/Team-page.js';
import CareerPage from '../Pages/Career-page/Career-page.js';
import ContactsPage from '../Pages/Contacts-page/Contacts-page.js';

import Footer from '../Footer/Footer.js';

// styles
import './App.css';

function App() {
    const [menuItems] = useState([
        {name:"О нас", site:"about"},
        {name:"Услуги", site:"services"},
        {name:"Наш коллектив", site:"team"},
        {name:"Карьера", site:"career"},
        {name:"Контакты", site:"contacts"}
    ]);

    const [ buisnessActive, setBuisnessActive ] = useState(false);
    
    return (
        <>
            <HeaderMenu
                menuItems={menuItems}/>
            <Route
                exact path='/'
                render={() => 
                    <MainPage
                        buisnessActive={buisnessActive}
                        setBuisnessActive={setBuisnessActive}/>}/>
            <Route
                path='/about'
                render={() =>
                    <AboutPage/>}/>
            <Route
                path='/services'
                render={() =>
                    <ServicesPage/>}/>
            <Route
                path='/team'
                render={() =>
                    <TeamPage/>}/>
            <Route
                path='/career'
                render={() =>
                    <CareerPage/>}/>
            <Route
                path='/contacts'
                render={() =>
                    <ContactsPage/>}/>
            <Footer
                menuItems={menuItems}/>
        </>
    );
}

export default App;
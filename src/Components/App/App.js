// modules
import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom'

// Components
import HeaderMenu from '../Header-menu/header-menu.js';

import MainPage from '../Pages/Main-page/Main-page.js';
import AboutPage from '../Pages/About-page/About-page.js';
import ServicesMainPage from '../Pages/Services-page/Services-main-page.js';
import ServicePage from '../Pages/Services-page/Service-page/Service-page.js';
import TeamPage from '../Pages/Team-page/Team-page.js';
import CareerPage from '../Pages/Career-page/Career-page.js';
import ContactsPage from '../Pages/Contacts-page/Contacts-page.js';
import AdvPage from '../Pages/Team-page/Adv-page/Adv-page.js';
import NotFoundPage from '../Pages/Not-found-page/Not-found-page.js';

import Footer from '../Footer/Footer.js';

// data
import teamDb from '../../Db/Team-Db/Team-Db.json';
import privateServiceDb from '../../Db/Carousel-Db/Private-carousel_items.json';
import buisnessServiceDb from '../../Db/Carousel-Db/Buisness-carousel_items.json';

// styles
import './App.css';

function App() {
    
    const [ buisnessActive, setBuisnessActive ] = useState(false);
    
    const [menuItems] = useState([
        {name:"О нас", site:"about", Component:AboutPage},
        {name:"Услуги", site:"services", Component:ServicesMainPage},
        {name:"Наш коллектив", site:"team", Component:TeamPage},
        {name:"Карьера", site:"career", Component:CareerPage},
        {name:"Контакты", site:"contacts", Component:ContactsPage}
    ]);
    
    const generalRoutes = menuItems.map((item) => {
        const { name, site, Component } = item;
        switch (item.site) {
            case "services":
                return (
                    <Route
                        key={name}
                        exact path={`/${site}`}>
                        <Component
                        buisnessActive={buisnessActive}
                        setBuisnessActive={setBuisnessActive}/>
                    </Route>
                );    
            default:
                return (
                    <Route
                        key={name}
                        exact path={`/${site}`}>
                        <Component/>
                    </Route>
                );
        }
    })

    function servicesRoutes( array, parentRoute ) {
        return array.map((item, num) => {
            const { name, site, text, shortText, img } = item;
            return (
                <Route
                    key={num}
                    path={`/services/${parentRoute}/${site}`}>
                    <ServicePage
                        name={name}
                        text={text}
                        shortText={shortText}
                        img={img}
                        parentRoute={parentRoute}/>
                </Route>
            )
        })
    }
    
    
    const advRoutes = Object.keys(teamDb).filter(i => i !== "_comment" && teamDb[i]["shown"]).map((item) => {
        const key = teamDb[item]["reestr_ID"];
        return (
            <Route
                key={key}
                path={`/${key}`}>
                <AdvPage
                    advocate={item}/>
            </Route>
        )
    });

    // console.log(Object.keys(teamDb).filter(i => !teamDb[i]["shown"])); 
    // uncomment these line, if you want to see in console.log array of hidden adv

    return (
        <>
            <HeaderMenu
                menuItems={menuItems}/>
            <Switch>
                <Route
                    exact path='/'>
                    <MainPage
                            buisnessActive={buisnessActive}
                            setBuisnessActive={setBuisnessActive}/>
                </Route>
                {generalRoutes}
                {advRoutes}
                {servicesRoutes(privateServiceDb, "private")}
                {servicesRoutes(buisnessServiceDb, "buisness")}
                <Route
                    path='*'>
                        <NotFoundPage/>
                </Route>
            </Switch>
            <Footer
                menuItems={menuItems}/>
            <div className="low-width-alert-message"><h4>Сайт не может быть отображен на Вашем устройстве!</h4></div>
        </>
    );
}

export default App;
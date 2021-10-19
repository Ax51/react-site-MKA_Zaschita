// modules
import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom'

// Components
import HeaderMenu from '../Header-menu/header-menu.js';

import MainPage from '../Pages/Main-page/Main-page.js';
import AboutPage from '../Pages/About-page/About-page.js';
import ServicesPage from '../Pages/Services-page/Services-page.js';
import TeamPage from '../Pages/Team-page/Team-page.js';
import CareerPage from '../Pages/Career-page/Career-page.js';
import ContactsPage from '../Pages/Contacts-page/Contacts-page.js';
import AdvPage from '../Pages/Team-page/Adv-page/Adv-page.js';
import NotFoundPage from '../Pages/Not-found-page/Not-found-page.js';

import Footer from '../Footer/Footer.js';

// data
import teamDb from '../../Db/Team-Db/Team-Db.json';

// styles
import './App.css';

function App() {
    const [menuItems] = useState([
        {name:"О нас", site:"about", component:AboutPage},
        {name:"Услуги", site:"services", component:ServicesPage},
        {name:"Наш коллектив", site:"team", component:TeamPage},
        {name:"Карьера", site:"career", component:CareerPage},
        {name:"Контакты", site:"contacts", component:ContactsPage}
    ]);

    const [ buisnessActive, setBuisnessActive ] = useState(false);
    
    const routes = menuItems.map((item) => {
        return (
            <Route
                key={item.name}
                path={`/${item.site}`}>
                <item.component/>
            </Route>
        )
    })

    const advRoutes = Object.keys(teamDb).map((item) => {
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
                {routes}
                {advRoutes}
                <Route
                    path='*'>
                        <NotFoundPage/>
                </Route>
            </Switch>
            <Footer
                menuItems={menuItems}/>
        </>
    );
}

export default App;
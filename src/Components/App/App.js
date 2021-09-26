// modules
import React, { useState } from 'react';
import { Route } from 'react-router-dom'

// Components
import HeaderMenu from '../Header-menu/header-menu.js';
import MainPage from '../Pages/Main-page/Main-page.js';
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
            <Footer
                menuItems={menuItems}/>
        </>
    );
}

export default App;
import React, { useState } from 'react';

import HeaderMenu from '../Header-menu/header-menu.js';
import MainPage from '../Main-page/Main-page.js';
import Footer from '../Footer/Footer.js';

import './App.css';

function App() {
    const [menuItems] = useState([
        {name:"О нас", site:"#"},
        {name:"Услуги", site:"#"},
        {name:"Наш коллектив", site:"#"},
        {name:"Карьера", site:"#"},
        {name:"Контакты", site:"#"}
    ]);
    
    return (
        <>
            <HeaderMenu
                menuItems={menuItems}/>
            <MainPage/>
            <Footer
                menuItems={menuItems}/>
        </>
    );
}

export default App;
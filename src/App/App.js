import React from 'react';

import HeaderMenu from '../Header-menu/header-menu.js';
import MainPage from '../Main-page/Main-page.js';
import Footer from '../Footer/Footer.js';

import './App.css';

function App() {
    return (
        <>
            <HeaderMenu></HeaderMenu>
            <MainPage></MainPage>
            <Footer></Footer>
        </>
    );
}

export default App;
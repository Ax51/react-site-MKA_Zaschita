// modules
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, useLocation } from 'react-router-dom';

// componens
import App from './Components/App/App.js';

// styles
import './index.css';

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [ pathname ]);
    
    return null
}

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <ScrollToTop/>
            <App />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

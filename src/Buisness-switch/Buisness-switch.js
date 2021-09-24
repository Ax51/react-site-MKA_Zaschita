import React, { useState } from "react";

import './Buisness-switch.css';

const BuisnessSwitch = ({ styles, setBuisnessActive }) => {
    const [ privateClassNames, setPrivateClassNames ] = useState(styles + " btn active");
    const [ buisnessClassNames, setbuisnessClassNames ] = useState(styles + " btn");


    const activePrivate = () => {
        setPrivateClassNames(styles + " btn active");
        setbuisnessClassNames(styles + " btn");
        setBuisnessActive(false);
    };
    const activeBuisness = () => {
        setPrivateClassNames(styles + " btn");
        setbuisnessClassNames(styles + " btn active");
        setBuisnessActive(true);
    };

    return (
        <div className="buisness-switch">
            <button 
                className={privateClassNames}
                onClick={activePrivate}>
                Частным лицам
            </button>
            <button 
                className={buisnessClassNames}
                onClick={activeBuisness}>
                Бизнесу
            </button>
        </div>
    )
}

export default BuisnessSwitch;
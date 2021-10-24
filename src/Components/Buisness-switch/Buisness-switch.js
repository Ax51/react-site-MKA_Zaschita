import React, { useState } from "react";

import './Buisness-switch.css';

const BuisnessSwitch = ({ styles = "btn-dark", buisnessActive, setBuisnessActive }) => {
    const [ privateClassNames, setPrivateClassNames ] = useState(styles + ` btn${buisnessActive ? "" : " active"}`);
    const [ buisnessClassNames, setBuisnessClassNames ] = useState(styles + ` btn${buisnessActive ? " active" : ""}`);


    const activePrivate = () => {
        setPrivateClassNames(styles + " btn active");
        setBuisnessClassNames(styles + " btn");
        setBuisnessActive(false);
    };
    const activeBuisness = () => {
        setPrivateClassNames(styles + " btn");
        setBuisnessClassNames(styles + " btn active");
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
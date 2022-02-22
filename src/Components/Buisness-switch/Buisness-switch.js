import React, { useState } from "react";

import './Buisness-switch.css';

const BuisnessSwitch = ({ styles = "", buisnessActive, setBuisnessActive }) => {
    const [ privateClassNames, setPrivateClassNames ] = useState(styles + ` button${buisnessActive ? "" : " active"}`);
    const [ buisnessClassNames, setBuisnessClassNames ] = useState(styles + ` button${buisnessActive ? " active" : ""}`);


    const activePrivate = () => {
        setPrivateClassNames(styles + " button active");
        setBuisnessClassNames(styles + " button");
        setBuisnessActive(false);
    };
    const activeBuisness = () => {
        setPrivateClassNames(styles + " button");
        setBuisnessClassNames(styles + " button active");
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
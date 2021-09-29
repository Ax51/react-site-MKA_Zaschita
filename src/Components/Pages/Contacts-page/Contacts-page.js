// modules
import React, { useState } from "react";

// Components
import MapApi from "../../Map-API/Map-API.js";
import Db from '../../Map-API/Db/Map-coordinates.js';
import NavLine from "../../Nav-line/Nav-line.js";

// styles
import './Contacts-page.css';

const ContactsPage = () => {
    let [branchCode, setBranchCode] = useState(7);

    let selectedBranch = Db[Object.keys(Db)[branchCode]];

    let buttons = Object.keys(Db).map((item, num) => {
        return (
            <button
                key={Db[item].iconCaption}
                className="btn btn-dark"
                onClick={() => setBranchCode(num)}>
                {Db[item].iconCaption || Db[item].iconContent}
            </button>
        )
    })
    return (
        <>
            <div className="contacts-page">
                <NavLine
                    thisPageName='Контакты' />
                <div className='contacts-page_buttons'>
                    {buttons}
                </div>
                <div className="contacts-page_contacts">
                    {selectedBranch.comment}
                </div>
            </div>
            <MapApi
                branchCode={branchCode} />
        </>
    )
}

export default ContactsPage;
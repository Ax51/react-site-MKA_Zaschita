// modules
import React, { useState } from "react";

// Components
import MapApi from "../../Map-API/Map-API.js";
import Db from '../../../Db/Map-API-Db/Map-coordinates.js';
import NavLine from "../../Nav-line/Nav-line.js";

// styles
import './Contacts-page.css';

const ContactsPage = () => {
    let [ branchCode, setBranchCode ] = useState(8);

    let selectedBranch = Db[Object.keys(Db)[branchCode]];

    let buttons = Object.keys(Db).map((item, num) => {
        return (
            <button
                key={Db[item].iconCaption}
                className={branchCode === num ? "btn btn-dark active" : "btn btn-dark"}
                onClick={() => setBranchCode(num)}>
                {Db[item].iconCaption || Db[item].iconContent}
            </button>
        )
    })
    return (
        <>
            <div className="contacts-page">
                <NavLine
                    pathArray={[{name:"Контакты"}]} />
                <div className="contacts-page_header">
                    <h1>Реквизиты наших филиалов</h1>
                    <div className="header-block header-block_dark"/>
                </div>
                <div className="contacts-page_wrapper">
                    <div className='contacts-page_buttons'>
                        {buttons}
                    </div>
                    <div className="contacts-page_contacts">
                        {selectedBranch.comment}
                    </div>
                </div>
            </div>
            <MapApi
                branchCode={branchCode} />
        </>
    )
}

export default ContactsPage;
// modules
import React, { useState, useRef } from "react";

// Components
import MapApi from "../../Map-API/Map-API.js";
import Db from '../../../Db/Map-API-Db/Map-coordinates.js';
import NavLine from "../../Nav-line/Nav-line.js";

// styles
import './Contacts-page.css';

const ContactsPage = () => {
    const [branchCode, setBranchCode] = useState(8);
    const contactsRef = useRef(null);

    let selectedBranch = Db[Object.keys(Db)[branchCode]];

    function chooseBranch(num) {
        setBranchCode(num);
        contactsRef.current.scrollIntoView({ block: 'start', behavior: 'smooth' });
    }

    let buttons = Object.keys(Db).map((item, num) => {
        return (
            <button
                key={Db[item].iconCaption}
                className={branchCode === num ? "btn btn-dark active" : "btn btn-dark"}
                onClick={() => chooseBranch(num)}>
                {Db[item].iconCaption || Db[item].iconContent}
            </button>
        )
    })
    return (
        <>
            <div className="contacts-page">
                <NavLine
                    pathArray={[{ name: "Контакты" }]} />
                <div className="contacts-page_header">
                    <h1>Реквизиты наших филиалов</h1>
                    <div className="header-block header-block_dark" />
                </div>
                <div className="contacts-page_wrapper">
                    <div className='contacts-page_buttons'>
                        {buttons}
                    </div>
                    <div className="contacts-page_contacts">
                        <div className="contacts-page_contacts_anchor" ref={contactsRef} /> {/* scroll anchor */}
                        <h2>{selectedBranch.iconCaption || selectedBranch.iconContent}</h2>
                        <div className="header-block header-block_dark" />
                        {/* {selectedBranch.comment} */}
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero veritatis placeat repellendus, sequi eum voluptas molestiae magni minima consequuntur voluptates dolores eaque atque labore quisquam vel ea quis iusto in accusamus numquam cupiditate? In excepturi libero sapiente consectetur quia dolore quos, esse vel tempore consequatur officiis laudantium repellendus magnam ratione!
                        <ul>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, placeat dolorum!</li>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipisicing.</li>
                            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem, aspernatur.</li>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, vel?</li>
                        </ul>
                    </div>
                </div>
            </div>
            <MapApi
                branchCode={branchCode} /> 
        </>
    )
}

export default ContactsPage;
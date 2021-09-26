// modules
import React, { useState } from "react";

// Components
import MapApi from "../../Map-API/Map-API.js";

// styles
import './Contacts-page.css';

const ContactsPage = () => {
    let [ branchCode, setBranchCode ] = useState(7);

    return (
        <div className="contacts-page">
            <button className="btn btn-dark" onClick={() => setBranchCode(7)}>Филиал № 1</button>
            <button className="btn btn-dark" onClick={() => setBranchCode(0)}>Филиал № 2</button>
            <button className="btn btn-dark" onClick={() => setBranchCode(1)}>Филиал № 3</button>
            <button className="btn btn-dark" onClick={() => setBranchCode(2)}>Филиал № 4</button>
            <button className="btn btn-dark" onClick={() => setBranchCode(3)}>Филиал № 5</button>
            <button className="btn btn-dark" onClick={() => setBranchCode(4)}>Филиал № 8</button>
            <button className="btn btn-dark" onClick={() => setBranchCode(5)}>Филиал № 18</button>
            <button className="btn btn-dark" onClick={() => setBranchCode(6)}>Филиал Интерлоер</button>
            <MapApi
                branchCode={branchCode}/>
        </div>
    )
}

export default ContactsPage;
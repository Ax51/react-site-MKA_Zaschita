// modules
import React from "react";

// components
import NavLine from "../../../Nav-line/Nav-line.js";
import AdvComponent from "../../../Adv-component/Adv-component.js";

// Data
import Db from '../../../../Db/Team-Db/Team-Db.json';

// pics
// import noPhoto from '../../../img/empty-person.png'

// styles
import './Adv-page.css';

const AdvPage = ({ advocate, modal = false }) => {
    const adv = Db[advocate];
    const fullName = `${adv.surname ?? ""} ${adv.name ?? ""} ${adv.middlename ?? ""}`;

    if (!modal) {
        return (
            <div className="adv-page">
                <NavLine
                    pathArray={[
                        { name: "Наш коллектив", path: "team" },
                        { name: `${fullName}` }]} />
                <div className="adv-page_wrapper">
                    <AdvComponent
                        advocate={advocate}/>
                </div>
            </div>
        )
    } else {
        return (
            <>
                <AdvComponent
                    advocate={advocate}/>
            </>
        )
    }
}

export default AdvPage;
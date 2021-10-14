// modules
import React from "react";
import { NavLink } from "react-router-dom";

// components
import NavLine from "../../Nav-line/Nav-line";
import AdvPage from "./Adv-page/Adv-page.js";

// Data
import Db from '../../../Db/Team-Db/Team-Db.json';

// styles
import './Team-page.css';

const TeamPage = () => {
    const DbArray = Object.keys(Db);

    const advList = DbArray.map((item) => {
        const name = Db[item]["name"],
            middlename = Db[item]["middlename"],
            surname = Db[item]["surname"],
            key = Db[item]["reestr_ID"];
        return (
            <li key={key} className="adv-name">
                <NavLink to={`/${key}`}>{`${surname ?? ""} ${name ?? ""} ${middlename ?? ""}`}</NavLink>
            </li>
        )
    })

    return (
        <div className="team-page">
            <NavLine
                pathArray={[
                    { name: "Наш коллектив", path: "team" }
                ]} />
            <div className="team-page_header">
                <h1>Наши Адвокаты</h1>
                <div className="header-block header-block_dark" />
            </div>
            <div className="team-page_body">
                <ul>{advList}</ul>
                <AdvPage
                    advocate="77/15032"
                    modal={true}/>
            </div>
        </div>
    )
}

export default TeamPage;
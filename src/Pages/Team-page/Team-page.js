// modules
import React, { useState } from "react";

// components
import NavLine from "../../Components/Nav-line/Nav-line.js";
import AdvComponent from "../../Components/Adv-component/Adv-component.js";
// import AdvPage from "./Adv-page/Adv-page.js";

// Data
import Db from '../../Db/Team-Db/Team-Db.json';

// styles
import './Team-page.css';

const TeamPage = () => {
    const collator = new Intl.Collator("ru",{ sensitivity: "base" }),
        minLenghtSearch = 0, // this number affects the deadzone search. To instant search set this value to 0.
        DbArray = Object.keys(Db),
        sortedDbArray = DbArray
            .filter(i => i !== "_comment" && Db[i]["shown"])
            .sort((a, b) => collator.compare(Db[a].surname + Db[a].name,Db[b].surname + Db[b].name));

    let [inputValue, setInputValue] = useState(""),
        [selectedAdv, setSelectedAdv] = useState(null),
        filteredDbArray = sortedDbArray;

    function onFilterDbArray() {
        // filter function
        if (inputValue.slice(0, 1) === "!") {
            //search by lawyer specialization
            filteredDbArray = sortedDbArray.filter((item) => {
                const adv = Db[item]
                return adv.share ? (adv.specialization.join(', ').toLowerCase().indexOf(inputValue.slice(1).toLowerCase()) > -1) : false
            })
        } else if (inputValue.slice(0, 1) === "?") {
            //search by any letter match (even cross word)
            filteredDbArray = sortedDbArray.filter((item) => {
                const adv = Db[item]
                return (adv["surname"] + adv["name"] + adv["middlename"] + adv["reestr_ID"] + adv["cert_ID"]).toLowerCase().indexOf(inputValue.slice(1).toLowerCase()) > -1
            })
        } else if (inputValue.slice(0, 1) === "№" || inputValue.slice(0, 1) === "#") {
            // search by branch
            filteredDbArray = sortedDbArray.filter(item => {
                const adv = Db[item]["branch"]?.[0] ?? null
                if (inputValue.length > 1) {
                    if (typeof adv === "number") {
                        return adv.toString().length === (inputValue.length - 1) ? adv.toString().indexOf(inputValue.slice(1, inputValue.length)) > -1 : false
                    } else if (typeof adv === "string") {
                        return adv?.slice(0, inputValue.length).toLowerCase().indexOf(inputValue.slice(1).toLowerCase()) > -1
                    } else return false;
                } else {
                    // If only "№" entered, shows no branch lawyers
                    return adv === null
                }
            })
        } else if (inputValue.length <= minLenghtSearch && inputValue.slice(0, 1) !== "!") {
            // plug for search without required minimum letters lenght entered
            filteredDbArray = sortedDbArray
        } else {
            // default search
            filteredDbArray = sortedDbArray.filter((item) => {
                const adv = Db[item]
                return (`${adv["surname"].slice(0, inputValue.length)} ${adv["name"].slice(0, inputValue.length)} ${adv["reestr_ID"]} ${adv["cert_ID"]}`).toLowerCase().indexOf(inputValue.toLowerCase()) > -1
            })
        }
    }

    function advList() {
        onFilterDbArray()
        if (filteredDbArray.length >= 1) {
            // if at least 1 adv was found
            return (
                <ul>
                    {filteredDbArray.map((item, index) => {
                        const name = Db[item]["name"],
                            middlename = Db[item]["middlename"],
                            surname = Db[item]["surname"],
                            key = Db[item]["reestr_ID"];
                        return (
                            <li key={key} className="adv-name">
                                {/* <NavLink to={`/${key}`}><span className="team-page_adv-index">{index + 1}.</span>{` ${surname ?? ""} ${name ?? ""} ${middlename ?? ""}`}</NavLink> */}  {/* if nedeed to open individual page instead of modal window, uncomment these lines, and comment that above */}
                                <span onClick={() => setSelectedAdv(key)}><span className="team-page_adv-index">{index + 1}.</span>{` ${surname ?? ""} ${name ?? ""} ${middlename ?? ""}`}</span>
                            </li>
                        )
                    })}
                </ul>
            )
        } else {
            // empty search results
            return (
                <div className="team-page_empty-search_wrapper">
                    <div className="team-page_empty-search">
                        <h1>Никого не нашлось!</h1>
                        <div className="header-block header-block_dark" />
                        <ul>
                            <li>Проверьте: правильно ли введен поисковой запрос, нет ли опечаток?</li>
                            <li>Попробуйте поиск по реестровому номеру адвоката</li>
                            <li>Попробуйте использовать более короткий поисковой запрос</li>
                            <li><a href="tel:+7(495)769-68-89">Позвоните нам по телефону!</a></li>
                        </ul>
                    </div>
                </div>
            )
        }

    }

    function openAdvComponent() {  // modal advComponent
        if (selectedAdv) {
            document.body.style.overflow = "hidden";
            return (
                <div className="team-page_personal-file_wrapper"
                    onClick={() => setSelectedAdv(null)}>
                    <div className="team-page_personal-file">
                        <AdvComponent
                            advocate={selectedAdv}
                            modal={true}
                        />
                    </div>
                </div>
            )
        } else {
            document.body.style.overflow = "";
        }
    }

    return (
        <>
            {openAdvComponent()}
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
                    <div className="team-page_search">
                        <input
                            className="team-page_search-input"
                            type="text"
                            placeholder="Поиск адвоката"
                            onChange={(event) => setInputValue(event.target.value)} />
                        <div className="header-block header-block_dark" />
                    </div>
                    {advList()}
                </div>
            </div>
        </>
    )
}

export default TeamPage;
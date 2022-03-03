// modules
import React, { useState, useRef } from "react";
import { NavLink } from "react-router-dom";

// Components
import MapApi from "../../Components/Map-API/Map-API.js";
import MapDb from '../../Db/Map-API-Db/Map-coordinates.js';
import TeamDb from '../../Db/Team-Db/Team-Db.json';
import NavLine from "../../Components/Nav-line/Nav-line.js";

// styles
import './Contacts-page.css';

const ContactsPage = () => {
    const [branchCode, setBranchCode] = useState(8),
        [paymentVisible, setPaymentVisible] = useState(false),
        contactsRef = useRef(null);

    let selectedBranch = MapDb[Object.keys(MapDb)[branchCode]];

    const { head, adress, workingTime, phones, site, eMail, payment } = selectedBranch.comment,
        [managerName, managerID] = head;

    function chooseBranch(num) {
        setBranchCode(num);
        // setTimeout(() => contactsRef.current.scrollIntoView({ block: 'start', behavior: 'smooth' }), 100);
    }

    let buttons = Object.keys(MapDb).map((item, num) => {
        return (
            <button
                key={MapDb[item].iconCaption}
                className={branchCode === num ? "contacts-page_branch-button active" : "contacts-page_branch-button"}
                onClick={() => chooseBranch(num)}>
                {MapDb[item].iconCaption || MapDb[item].iconContent}
            </button>
        )
    })

    function paragraphFromArray(array, modifier) {
        if (Array.isArray(array)) {
            switch (modifier) {
                case "workingTime":
                    return array.map((i, b) => <p key={b} className="ul_pencil">{i}</p>)
                case "phones":
                    return array.map((i, b) => <p key={b}><a href={`tel:${i}`}>{i}</a></p>)
                case "site":
                    return array.map((i, b) => <p key={b}><a href={i[0]} target="_blank" rel="noreferrer">{i[1]}</a></p>)
                case "eMail":
                    return array.map((i, b) => <p key={b}><a href={`mailto:${i}`}>{i}</a></p>)
                default:
                    return array.map((i, b) => <p key={b}>{i}</p>)
            }
        } else return array
    }
    function togglePaymentVisible() {
        paymentVisible ? setPaymentVisible(false) : setPaymentVisible(true)
    }

    return (
        <>
            <div className="contacts-page">
                <NavLine
                    pathArray={[{ name: "Контакты" }]} />
                <h2>Контакты</h2>
                <div className='contacts-page_buttons'>
                    {buttons}
                </div>
                <div className="contacts-page_contacts">
                    {/* <div className="contacts-page_contacts_anchor" ref={contactsRef} /> */} {/* scroll anchor */}
                    <h2>{selectedBranch.iconCaption || selectedBranch.iconContent}</h2>
                    <div className="contacts-page_contacts_container">
                        {adress
                            ? <div className="contacts-page_item"><i className="bi bi-geo-alt" /> {/* <h3>Наш офис расположен по адресу:</h3> */}
                                <p>
                                    {adress[1]
                                        ? <a href={adress[1]} target="_blank" rel="noreferrer">{adress[0]}</a>
                                        : <>{adress[0]}</>}</p></div>
                            : null}
                        {workingTime
                            ? <div className="contacts-page_item"><i className="bi bi-clock" /> {/* <h3>Режим работы:</h3> */}
                                {paragraphFromArray(workingTime, "workingTime")}</div>
                            : null}
                        {phones
                            ? <div className="contacts-page_item"><i className="bi bi-telephone" /> {/* <h3>Телефон:</h3> */}
                                {paragraphFromArray(phones, "phones")}</div>
                            : null}
                        {eMail
                            ? <div className="contacts-page_item"><i className="bi bi-envelope" /> {/* <h3>E-Mail:</h3> */}
                                {paragraphFromArray(eMail, "eMail")}</div>
                            : null}
                        {site
                            ? <div className="contacts-page_item"><i className="bi bi-display" /> {/* <h3>Web-сайт:</h3> */}
                                {paragraphFromArray(site, "site")}</div>
                            : null
                        }
                        {head
                            ? TeamDb[managerID].gender === "female"
                                ? <div className="contacts-page_item"><i className="bi bi-person" /> <h3>Заведующая филиалом:</h3>
                                    <p><NavLink to={`/${managerID}`}>{managerName}</NavLink></p></div>
                                : <div className="contacts-page_item"><i className="bi bi-person" /> <h3>Заведующий филиалом:</h3>
                                    <p><NavLink to={`/${managerID}`}>{managerName}</NavLink></p></div>
                            : null}
                        {payment
                            ? <div className="contacts-page_item">
                                <h3>
                                    <i className="bi bi-cash-coin" />
                                    Платежные реквизиты:
                                </h3>
                                {paymentVisible
                                    ? <button
                                        className="_contacts_show-payment _contacts_show-payment-active"
                                        onClick={togglePaymentVisible}>
                                        Скрыть
                                    </button>
                                    : <button
                                        className="_contacts_show-payment"
                                        onClick={togglePaymentVisible}>
                                        Показать
                                    </button>}
                                {paymentVisible ? paragraphFromArray(payment) : null}</div>
                            : null}
                    </div>
                </div>
            </div>
            <div className="contacts-page_absolute-map">
                <MapApi
                    branchCode={branchCode} />
            </div>
        </>
    )
}

export default ContactsPage;
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

    const {head, adress, workingTime, phones, eMail, payment} = selectedBranch.comment,
        [managerName, managerID] = head;

    function chooseBranch(num) {
        setBranchCode(num);
        contactsRef.current.scrollIntoView({ block: 'start', behavior: 'smooth' });
    }

    let buttons = Object.keys(MapDb).map((item, num) => {
        return (
            <button
                key={MapDb[item].iconCaption}
                className={branchCode === num ? "btn btn-dark active" : "btn btn-dark"}
                onClick={() => chooseBranch(num)}>
                {MapDb[item].iconCaption || MapDb[item].iconContent}
            </button>
        )
    })

    function paragraphFromArray(array,modifier) {
        if (Array.isArray(array)) {
            switch (modifier) {
                case "workingTime":
                    return array.map((i, b) => <p key={b} className="ul_pencil">{i}</p>)
                case "phones":
                    return array.map((i, b) => <p key={b}><a href={`tel:${i}`}>{i}</a></p>)
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
                        {head
                            ? TeamDb[managerID].gender === "female"
                                ? <><h3><i className="bi bi-person"/> Заведующая филиалом:</h3>
                                <p><NavLink to={`/${managerID}`}>{ managerName }</NavLink></p></>
                                : <><h3><i className="bi bi-person"/> Заведующий филиалом:</h3>
                                <p><NavLink to={`/${managerID}`}>{ managerName }</NavLink></p></>
                            : null}
                        {adress 
                            ? <><h3><i className="bi bi-geo-alt" /> Наш офис расположен по адресу:</h3>
                            <p>
                                {adress[1]
                                ? <a href={adress[1]}>{adress[0]}</a>
                                : <>{adress[0]}</>}</p></>
                            : null}
                        {workingTime
                            ? <><h3><i className="bi bi-clock" /> Режим работы:</h3>
                            {paragraphFromArray(workingTime, "workingTime")}</>
                            : null}
                        {phones
                            ? <><h3><i className="bi bi-telephone-outbound" /> Телефон:</h3>
                            {paragraphFromArray(phones,"phones")}</>
                            : null}
                        {eMail
                            ? <><h3><i className="bi bi-envelope-open" /> E-Mail:</h3>
                            {paragraphFromArray(eMail,"eMail")}</>
                            : null}
                        {payment
                            ? <><h3 onClick={togglePaymentVisible}>
                                    <i className="bi bi-cash-coin" /> 
                                    Платежные реквизиты: {paymentVisible ? <button className="_contacts_show-payment _contacts_show-payment-active">Скрыть</button> : <button className="_contacts_show-payment">Показать</button>}
                                </h3>
                            {paymentVisible ? paragraphFromArray(payment) : null}</>
                            : null}
                    </div>
                </div>
            </div>
            <MapApi
                branchCode={branchCode} />
        </>
    )
}

export default ContactsPage;
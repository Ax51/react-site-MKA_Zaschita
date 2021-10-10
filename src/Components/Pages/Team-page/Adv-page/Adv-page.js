// modules
import React from "react";

// components
import NavLine from "../../../Nav-line/Nav-line.js";

// Data
import Db from '../../../../Db/Team-Db/Team-Db.json';

// pics
import noPhoto from '../../../img/empty-person.png'

// styles
import './Adv-page.css';

const AdvPage = ({ advocate }) => {
    const adv = Db[advocate];
    const fullName = `${adv.surname ?? ""} ${adv.name ?? ""} ${adv.middlename ?? ""}`;

    const telLink = adv.contacts?.tel?.map((i) => <><a href={`tel:${i}`}>{`${i}`}</a><br/></>)
        
    return (
        <div className="adv-page">
            <NavLine
                pathArray={[
                    { name: "Наш коллектив", path: "team" },
                    { name: `${fullName}` }]} />
            <div className="adv-page_wrapper">
                <img
                    src={adv.photo ?? noPhoto}
                    alt="Фотография адвоката" />
                <div className="adv-page_table">
                    <table>
                        <thead><tr><td colSpan="2"><b><h2>{fullName}</h2></b></td></tr></thead>
                        <tbody>
                            <tr><td><b>Реестровый номер:</b></td><td className="adv-page_table_body_data">{adv.reestr_ID}</td></tr>
                            <tr><td><b>Номер удостоверения:</b></td><td className="adv-page_table_body_data">{adv.cert_ID}</td></tr>
                            {adv.branch ? <tr><td><b>Состоит в филиале:</b></td><td className="adv-page_table_body_data">{adv.branch}</td></tr> : null}
                            <tr><td><b>Образование:</b></td><td className="adv-page_table_body_data">{adv.degree}</td></tr>
                            <tr><td><b>Общий стаж по юриспруденции (лет):</b></td><td className="adv-page_table_body_data">{adv.gen_exp}</td></tr>
                            <tr><td><b>Стаж адвокатской деятельности (лет):</b></td><td className="adv-page_table_body_data">{adv.adv_exp}</td></tr>
                            <tr><td><b>Специализируется:</b></td><td className="adv-page_table_body_data">{adv.specialization.join(', ')}</td></tr>
                            {adv.rewards ? <tr><td><b>Присвоенные награды:</b></td><td className="adv-page_table_body_data">{adv.rewards.join(', ')}</td></tr> : null}
                            {adv.contacts?.email ? <tr><td><b>E-mail:</b></td><td className="adv-page_table_body_data"><a href={`mailto:${adv.contacts.email}`}>{adv.contacts.email}</a></td></tr> : null}
                            {adv.contacts?.tel ? <tr><td><b>Телефон для связи:</b></td><td className="adv-page_table_body_data">{telLink}</td></tr> : null}
                            {adv.contacts?.site ? <tr><td><b>Веб-сайт:</b></td><td className="adv-page_table_body_data"><a href={adv.contacts.site}>{adv.contacts.site}</a></td></tr> : null}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default AdvPage;
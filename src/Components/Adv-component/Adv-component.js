// modules
import React from "react";

// Data
import Db from '../../Db/Team-Db/Team-Db.json'

// Pics
import noPhoto from '../img/empty-person.png'

// styles
import './Adv-component.css'

export default function AdvComponent({ advocate, modal = false }) {  //  Pay attention on modal modifier in this component! Nevertheless, it mainly changes styles
    const adv = Db[advocate],
        fullName = `${adv.surname ?? ""} ${adv.name ?? ""} ${adv.middlename ?? ""}`,
        thisYear = new Date().getFullYear(),
        totalYears = thisYear - adv.gen_exp,
        advYears = (thisYear - adv.adv_exp) > 0 ? (thisYear - adv.adv_exp) : (thisYear - adv.adv_exp + 1);
        
    const telLink = adv.contacts?.tel?.map((i) => <React.Fragment key={i}><a className="adv-component_tel" href={`tel:${i}`}>{`${i}`}</a><br /></React.Fragment>),
        rewards = adv.rewards?.map((i) => <div className="adv-component_rewards" key={i}>{i}<div className="header-sub-block header-block_dark"/></div>),
        reestrID = <a id="adv-component_href" href={`http://lawyers.minjust.ru/lawyers?fullName=&registerNumber=${adv.reestr_ID?.slice(0,2)}%2F${adv.reestr_ID?.slice(3)}&identityCard=&status=&orgForm=&regCode=`}>
            {adv.reestr_ID}</a>,
        certID = <a id="adv-component_href" href={`http://lawyers.minjust.ru/lawyers?fullName=&registerNumber=${adv.reestr_ID?.slice(0,2)}%2F${adv.reestr_ID?.slice(3)}&identityCard=&status=&orgForm=&regCode=`}>
        {adv.cert_ID}</a>;

    function correctSpelling(years) {
        let correctSpell;
        if ( years >= 10 && years <= 20 ) {
            correctSpell = "лет"
        } else {
            if (( years % 10 ) === 1 ) {
                correctSpell = "год"
            } else if ( ( years % 10 ) > 1 && ( years % 10 ) < 5 ) {
                correctSpell = "года"
            } else {
                correctSpell = "лет"
            }
        }
        return correctSpell
    }

    return (
        <div className={!modal ? "adv-component_wrapper" : "adv-component_wrapper adv-component_wrapper_modal"}>
            <img
                className={!modal ? "adv-component_adv-pic" : "adv-component_adv-pic_modal"}
                src={adv.photo ?? noPhoto}
                alt="Фотография адвоката"
                onClick={(event) => {if (modal) event.stopPropagation()}} />
            <div className={`adv-component_table ${modal ? "adv-component_table_modal" : ""}`}
                onClick={(event) => {if (modal) event.stopPropagation()}} >
                <table>
                    <thead><tr><td colSpan="2"><b><h2>{fullName}</h2></b></td></tr></thead>
                    <tbody>
                        <tr><td><b>Реестровый номер:</b></td><td className="adv-component_table_body_data">{reestrID}</td></tr>
                        {adv.cert_ID ? <tr><td><b>Номер удостоверения:</b></td><td className="adv-component_table_body_data">{certID}</td></tr> : null}
                        {adv.branch ? <tr><td><b>Состоит в филиале:</b></td><td className="adv-component_table_body_data">{adv.branch}</td></tr> : null}
                        {adv.degree ? <tr><td><b>Образование:</b></td><td className="adv-component_table_body_data">{adv.degree}</td></tr> : null}
                        {adv.gen_exp ? <tr><td><b>Общий стаж по юриспруденции:</b></td><td className="adv-component_table_body_data">{`${totalYears} ${correctSpelling(totalYears)}`}</td></tr> : null}
                        {adv.adv_exp ? <tr><td><b>Стаж адвокатской деятельности:</b></td><td className="adv-component_table_body_data">{`${advYears > 0 ? advYears : "<1"} ${correctSpelling(advYears)}`}</td></tr> : null}
                        {adv.specialization ? <tr><td><b>Специализируется:</b></td><td className="adv-component_table_body_data">{adv.specialization.join(", ")}</td></tr> : null}
                        {adv.rewards ? <tr><td className="adv-component_table_body_rewards"><b className={modal ? "adv-component_table_body_rewards_text_modal" : "adv-component_table_body_rewards_text"}>Присвоенные награды:</b></td><td className={"adv-component_table_body_data"}>{rewards}</td></tr> : null}
                        {adv.contacts?.email ? <tr><td><b>E-mail:</b></td><td className="adv-component_table_body_data"><a href={`mailto:${adv.contacts.email}`}>{adv.contacts.email}</a></td></tr> : null}
                        {adv.contacts?.tel ? <tr><td><b>Телефон для связи:</b></td><td className="adv-component_table_body_data">{telLink}</td></tr> : null}
                        {adv.contacts?.site ? <tr><td><b>Веб-сайт:</b></td><td className="adv-component_table_body_data"><a href={adv.contacts.site}>{adv.contacts.site}</a></td></tr> : null}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
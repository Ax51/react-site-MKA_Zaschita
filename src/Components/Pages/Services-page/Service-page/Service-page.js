// modules
import React from "react";

// components
import NavLine from "../../../Nav-line/Nav-line";

// pics
import noLogo from '../../../img/mz_ic-1.fcb9.png';

//styles
import './Service-page.css';

export default function ServicePage ({ name, text, shortText, img, parentRoute }) {
    
    function textWithParagraphs () {
        if (Array.isArray(text) && text.length > 0) {
            return text.map(( item, num ) => {
                console.log();
                if (Array.isArray(item)) {
                    const list = item.map(( item, key ) => <li key={key}>{item}</li>)
                    return <ul key={num}>{list}</ul>
                }
                return <p key={num}>{item}</p>
            })
        } else {
            return <p>{shortText}</p>
        }
    }

    return (
        <div className="service-page_wrapper">
            <NavLine 
                pathArray={[
                    {name:"Услуги", path:"services"},
                    {name:parentRoute === "buisness" ? "Бизнесу" : "Частным лицам", path:"services"},
                    {name:name}
                ]}/>
            <div className="service-page_header">
                <h1>{name}</h1>
                <img
                    src={img ?? noLogo}
                    alt={name}/>
            </div>
            <div className="service-page_text">{textWithParagraphs()}</div>
        </div>
    )
}
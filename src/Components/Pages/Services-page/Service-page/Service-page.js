// modules
import React from "react";

// components
import ServicesComponent from "../Services-component/Services-component";

// pics
import noLogo from '../../../img/mz_ic-1.fcb9.png';

//styles
import './Service-page.css';

export default function ServicePage ({ name, text, img }) {
    
    const textWithParagraphs = text.map(( item, num ) => {
        console.log();
        if (Array.isArray(item)) {
            const list = item.map(( item, key ) => <li key={key}>{item}</li>)
            return <ul key={num}>{list}</ul>
        }
        return <p key={num}>{item}</p>
    })

    return (
        <div className="service-page_wrapper">
            <div className="service-page_header">
                <h1>{name}</h1>
                <img
                    src={img ?? noLogo}
                    alt={name}/>
            </div>
            <div className="service-page_text">{textWithParagraphs}</div>
        </div>
    )
}
// modules
import React from 'react';

// components
import InfographicsComponent from './Infographics_component/Infographics_component.js';
// pics

// data
import Db from '../../../../Db/Infographics-Db/InfographicsDb.json';

// styles
import './Infographics.css';

export default function Infographics () {
    const posts = Db.posts.map((item, count, array) => {
        const isMirror = !!(count % 2),
            isLast = count + 1 === array.length;
        return (
            <InfographicsComponent
                key={item.step}
                step={item.step}
                header={item.header}
                text={item.text}
                mirror={isMirror}
                last={isLast}
                />
        )
    })
    return (
        <div className="infographics_colored-bcg">
            <div className="infographics_title">
                <h1>Как мы работаем?</h1>
                <div className="header-block header-block_dark"/>
            </div>
            <div className="infographics_wrapper">
                {posts}
            </div>
        </div>
    )
}
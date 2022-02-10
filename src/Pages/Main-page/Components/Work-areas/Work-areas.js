// modules
import React from 'react';

// pics
import books from '../../../../img/books-pic.jpg';

// styles
import './Work-areas.css';

export default function WorkAreas() {
    return (
        <div className="areas">
            <img src={books} alt="books" />
            <div className="areas_wrapper">
                <h2>направления работы</h2>
                <ul>
                    <li>Проведение консультаций и выдача справок по правовым вопросам, как в устной, 
так и в письменной форме</li>
                    <li>Составление заявлений, жалоб, ходатайств и других документов правового характера</li>
                    <li>Представление интересов доверителя</li>
                    <span className="areas_sub-list">в уголовоном судопроизводстве и производстве по делам об административных 
                        <br/>правонарушениях</span>
                    <span className="areas_sub-list">в гражданском или административном судопроизводстве</span>
                    <span className="areas_sub-list">в исполнительном производстве, а также представление интересов подзащитного 
                        <br/>при исполнении уголовного наказания</span>
                    <span className="areas_sub-list">при разбирательстве дел в третийском суде, международном коммерческом суде, 
                        <br/>а также иных органах разрешения конфликтов</span>
                    <span className="areas_sub-list">в органах государственной власти, органах местного самоуправления, общественных 
                        <br/>объединениях и иных организациях</span>
                    <span className="areas_sub-list">в налоговых провоотношениях</span>
                    <span className="areas_sub-list">в конституционном судопроизводстве</span>
                    <li>Иная юридическая помощь, не запрещенная законом</li>
                </ul>
            </div>
        </div>
    )
}
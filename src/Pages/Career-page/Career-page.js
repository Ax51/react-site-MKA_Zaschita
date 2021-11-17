// modules
import React from "react";
import { NavLink } from "react-router-dom";

// components
import NavLine from "../../Components/Nav-line/Nav-line";

// styles
import './Career-page.css';

const CareerPage = () => {
    return (
        <div className="career-page">
            <NavLine
                pathArray={[{name:"Карьера"}]} />
            <div className="career-page_header">
                <h1>Информация для будущих помощников / стажеров</h1>
                <div className="header-block header-block_dark" />
            </div>
            <div className="career-page_text">
                <p>МКА «ЗАЩИТА» производит набор помощников/стажеров адвокатов на конкурсной основе. Практическое и теоретическое обучение профессии, оформление по ТК РФ, стаж по юридической специальности, необходимый для допуска к сдаче квалификационного экзамена, подготовка к сдаче квалификационных экзаменов на статус адвоката в Адвокатской Палате г. Москвы и Московской области. Для получения более подробной информации, <NavLink to="/contacts">свяжитесь с нами.</NavLink></p>
                <ul>
                    <li><a href="https://fparf.ru/documents/fpa-rf/the-documents-of-the-council/regulations-on-the-procedure-of-internship/" target="_blank" rel="noreferrer">Положение о порядке прохождения стажировки</a></li>
                    <li><a href="https://fparf.ru/documents/fpa-rf/the-documents-of-the-council/regulations-on-the-procedure-of-work-of-the-assistant-to-the-lawyer/?sphrase_id=80015" target="_blank" rel="noreferrer">Положение о порядке работы помощника адвоката</a></li>
                </ul>
            </div>
        </div>
    )
}

export default CareerPage;
// modules
import React from "react";
import { NavLink } from 'react-router-dom';

// pics
import mouseImg from "../../../../img/mz_mouse.7e7e.png";
import logo from "../../../../img/mz_logo-wh.a5b7.png";

// data
import branchesDb from '../../../../../Db/Map-API-Db/Map-coordinates.js';
import teamDb from '../../../../../Db/Team-Db/Team-Db.json';

// styles
import './Greet.css';

const Greet = () => {
    const companyAge = new Date().getFullYear() - 1995,
        numberOfBranches = Object.keys(branchesDb).length,
        numberOfAdv = Object.keys(teamDb).filter(i => i !== "_comment" && teamDb[i]["shown"]).length;

    function correctSpelling(word, number) {
        if (number >= 10 && number <= 20) {
            word = `${word}ов`
        } else {
            if ((number % 10) === 1) {
                word = `${word}`
            } else if ((number % 10) > 1 && (number % 10) < 5) {
                word = `${word}а`
            } else {
                word = `${word}ов`
            }
        }
        return word
    }
    function correctAgeSpelling(word, number) {
        if (number >= 10 && number <= 20) {
            word = "лет"
        } else {
            if ((number % 10) === 1) {
                word = `${word}`
            } else if ((number % 10) > 1 && (number % 10) < 5) {
                word = `${word}а`
            } else {
                word = "лет"
            }
        }
        return word
    }

    return (
        <div className="greet">
            <div className="greet__info">
                <p className="greet__info__big">
                    <span className="greet__info__years">{companyAge}</span>
                    {correctAgeSpelling("год", companyAge)} защищаем Ваши интересы
                </p>
                <div className="greet__info__stat">
                    <div>
                        <div className="greet__info__stat__num">
                            1995
                        </div>
                        {correctAgeSpelling("лет",companyAge)} основания
                    </div>
                    <div>
                        <div className="greet__info__stat__num">
                            {numberOfAdv}
                        </div>
                        {correctSpelling('Адвокат', numberOfAdv)} в реестре
                    </div>
                    <div>
                        <div className="greet__info__stat__num">
                            {numberOfBranches}
                        </div>
                        {correctSpelling('Филиал', numberOfBranches)} в Москве и МО
                    </div>
                </div>
                <NavLink to='/about'>
                    <button
                        className="btn btn-white">
                        Подробнее
                    </button>
                </NavLink>
            </div>
            <img
                className="greet__scroll"
                src={mouseImg}
                alt="scroll" />
            <img
                className="greet__logo"
                src={logo}
                alt="logo" />
        </div>
    );
};

export default Greet;
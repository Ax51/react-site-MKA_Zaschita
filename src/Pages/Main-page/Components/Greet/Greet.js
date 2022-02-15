// modules
import React from "react";
import { NavLink } from 'react-router-dom';

// data
import branchesDb from '../../../../Db/Map-API-Db/Map-coordinates.js';
import teamDb from '../../../../Db/Team-Db/Team-Db.json';

// styles
import './Greet.css';

const Greet = () => {
    const companyAge = new Date().getFullYear() - 1995,
        numberOfBranches = Object.keys(branchesDb).length,
        numberOfAdv = Object.keys(teamDb).filter(i => i !== "_comment" && teamDb[i]["shown"]).length,
        windowWidth = window.innerWidth;

    function correctSpelling(word, number) {
        if ((number % 100) >= 10 && (number % 100) <= 20) {
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
        if ((number % 100) >= 10 && (number % 100) <= 20) {
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
                <div className="greet__info__big">
                    {windowWidth > 700 
                        ? <>
                            <div className="greet__info__years">{companyAge}</div>
                            <h1>{correctAgeSpelling("год", companyAge)} <br/>защищаем <br/>Ваши интересы</h1>
                        </>
                        :    <h1><span className="greet__info__years__mobile">{companyAge} </span>{correctAgeSpelling("год", companyAge)} <br/>защищаем <br/>Ваши интересы</h1>
                            
                    }
                </div>
                <div className="greet__info__stat">   
                    <div>
                        <div className="greet__info__stat__num">
                            <NavLink to="/about">1995</NavLink>
                        </div>
                        год <br/>основания
                    </div>
                    <div>
                        <div className="greet__info__stat__num">
                        <NavLink to="/team">{numberOfAdv}</NavLink>
                        </div>
                        {correctSpelling('Адвокат', numberOfAdv)} <br/>в реестре
                    </div>
                    <div>
                        <div className="greet__info__stat__num">
                        <NavLink to="/contacts">{numberOfBranches}</NavLink>
                        </div>
                        {correctSpelling('Филиал', numberOfBranches)} <br/>в Москве и МО
                    </div>
                </div>
                <NavLink to='/about'>
                    <button
                        className="greet-btn">
                        Оставить заявку
                    </button>
                </NavLink>
            </div>
        </div>
    );
};

export default Greet;
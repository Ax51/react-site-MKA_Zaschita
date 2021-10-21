// modules
import React from "react";
import { NavLink } from 'react-router-dom';

// pics
import mouseImg from "../../../../img/mz_mouse.7e7e.png";
import logo from "../../../../img/mz_logo-wh.a5b7.png";

// styles
import './Greet.css';

const Greet = () => {
    const companyAge = new Date().getFullYear() - 1995;
    return (
        <div className="greet">
            <div className="greet__info">
                <p className="greet__info__big">
                    <span className="greet__info__years">{companyAge}</span>
                    лет защищаем Ваши интересы
                </p>
                <div className="greet__info__stat">
                    <div>
                        <div className="greet__info__stat__num">
                            1995
                        </div>
                        год основания
                    </div>
                    <div>
                        <div className="greet__info__stat__num">
                            210
                        </div>
                        адвокатов в реестре
                    </div>
                    <div>
                        <div className="greet__info__stat__num">
                            9
                        </div>
                        филиалов в москве и МО
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
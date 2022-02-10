//modules
import react from "react";

// pics
import foots from '../../../../img/logos_v2/foots.svg';
import hands from '../../../../img/logos_v2/hands.svg';
import medal from '../../../../img/logos_v2/medal.svg';
import time from '../../../../img/logos_v2/time.svg';

//styles
import './Benefits.css';

export default function Benefits() {
    return (
        <div className="benefits">
            <h2>Преимущества нашей коллегии</h2>
            <img src={time} alt="time" />
            <p>
                Наша коллегия уже 27 лет на рышке юридических услуг
            </p>
            <img src={medal} alt="rewards" />
            <p>
                Наши адвокаты были неоднократно отмечены орденами, медалями и почетными грамотами 
                <br/>
                за достижения в своей профессиональной деятельности
            </p>
            <img src={foots} alt="nearby" />
            <p>
                Наш центральный офис, а также филиалы удобно 
                <br/>
                расположены и всегда находятся в пешей доступности
            </p>
            <img src={hands} alt="honor" />
            <p>
                Все адвокаты-члены нашей коллегии строго соблюдают адвокатскую тайну.
                <br/>
                Все сказанное Вами Вашему адвокату останется в тайне
            </p>
        </div>
    )
}
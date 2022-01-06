// modules
import React from "react";

// pics
import photo from '../../../../img/mz_ph.43b8.jpg';

// styles
import './Speech.css';

// Db
import teamDb from '../../../../Db/Team-Db/Team-Db.json';
import branchDb from '../../../../Db/Map-API-Db/Map-coordinates.js';

const Speech = () => {
    const companyAge = new Date().getFullYear() - 1995,
        teamCount = Object.keys(teamDb).filter(i => i !== "_comment" && teamDb[i]["shown"]).length,
        branchCount = Object.keys(branchDb).length;

    function countSpell(word, number) {
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
        return `${number} ${word}`
    }
    function ageSpell(number) {
        let word = "год";
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
        return `${number} ${word}`
    }

    return (
        <div className="speech">
            <div className="speech-header">
                <h1>Московская коллегия адвокатов "Защита"</h1>
                <div className="header-block header-block_dark" />
            </div>
            <div className="speech-position">
                <img className="speech-photo" src={photo} alt="Председатель президиума" title="Поляков Игорь Алексеевич, председатель Президиума"></img>
                <div className="speech-text">
                    <p>Московская коллегия адвокатов «ЗАЩИТА» была создана в 1995 году и существует уже {ageSpell(companyAge)}. С момента образования и до
                        сегодняшнего дня наш коллектив, стал являться одним из самых крупнейших адвокатских
                        образований в России и на данный момент объединяет {countSpell("адвокат", teamCount)} и {countSpell("филиал", branchCount)} в городе Москве и
                        Московской области.</p>
                    <p>Как показывает практический опыт, для минимизации возможных рисков и наступления негативных
                        последствий, по тем или иным юридическим вопросам, правильным будет заранее обратиться к
                        профессиональному юристу – адвокату, который в доступной форме разъяснит, что необходимо
                        предпринять в первую очередь, а чего делать ни в коем случае не следует и как правильно
                        вести себя в сложившейся ситуации.</p>
                    <p>Адвокаты нашей коллегии имея практический опыт и специализацию в конкретной области права,
                        честно, разумно, добросовестно, квалифицировано, принципиально и своевременно защищают
                        интересы своих доверителей.</p>
                    <p>Очевидно, что стандартных проблем не существует, именно поэтому к каждому обратившемуся
                        доверителю, подбирается свой индивидуальный подход для разрешения сложившейся ситуации с
                        максимально благоприятным исходом для клиента, который позволяет добиться максимально
                        эффективного решения поставленной задачи.</p>
                    <div className="speech-text--sign">
                        Поляков Игорь Алексеевич,<br />
                        председатель Президиума<br />
                        Московской коллегии адвокатов «ЗАЩИТА»,<br />
                        Президент Адвокатской палаты города Москвы,<br />
                        член Совета Федеральной палаты адвокатов РФ,<br />
                        почётный юрист России.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Speech;
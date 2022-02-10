//modules
import React from "react";

//styles
import './Why-we.css';

function WhyWe() {
    return (
        <div className="why-we">
            <h2>чем адвокаты могут Вам помочь</h2>
            <div className="why-we_wrapper">
                <div className="why-we_item">
                    <span className="why-we_order-num">1</span>
                    <h3>избавиться от хлопот</h3>
                    <p className="why-we_text">
                        Юридические проблемы доставляют немало хлопот, стресса, отнимают много времени и сил. Пытаясь решить их самостоятельно, велик риск получить отрицательный результат не только на бумаге, но и потерять гораздо больше – жилье, деньги, бизнес, детей и пр.
                    </p>
                    <p className="why-we_text">
                        Наши адвокаты помогут Вам правильно составить документ, сделать верный акцент на, казалось бы, незначительных мелочах, которые могут оказать значительное влияние на исход Вашего дела.
                    </p>
                </div>
                <div className="why-we_item">
                    <span className="why-we_order-num">3</span>
                    <h3>пролучить грамотный совет</h3>
                    <p className="why-we_text">
                        Наши адвокаты смогут проанализировать ваши документы и дать грамотный совет не только с точки зрения юридической теории, но и сложившейся практики, применяемой в судах общей юрисдикции, экономических судах. Ведь теория зачастую сильно отличается от судебной практики, именно поэтому вам и нужен адвокат, профессиональный представитель ваших интересов в суде.
                    </p>
                </div>
                <div className="why-we_item">
                    <span className="why-we_order-num">2</span>
                    <h3>узнать ответы на свои вопросы</h3>
                    <p className="why-we_text">
                        Если Вы собираетесь открыть своё дело и при этом не заплатить лишних денег, совершить сделку на максимально выгодных для Вас условиях, например: купить квартиру, разделить имущество, дать взаймы, заключить какой-либо иной договор – заранее обратитесь к адвокату, получите юридическую консультацию и разъяснения по правовым вопросам.
                    </p>
                </div>
                <div className="why-we_item">
                    <span className="why-we_order-num">4</span>
                    <h3>Быстро собрать документы</h3>
                    <p className="why-we_text">
                        У адвокатов есть "суперспособность" — запрашивать документы (адвокатский запрос), даже если их не хотят отдавать. В этом случае обычный юрист может получить их только через суд.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default WhyWe
import React from "react";

import './Callback-form.css';

const CallbackForm = () => {
    return (
        <div className="callback-form">
            <div className="callback-form_flex">
                <form className="callback-form__form">
                    <h1>Заказать консультацию</h1>
                    <p>Заполните форму и мы свяжемся с Вами в ближайшее время</p>
                    <input 
                        className="callback-form__form__input"
                        required
                        type="text"
                        maxLength="50"
                        placeholder="Ваше имя"
                        pattern="^[А-Яа-яЁё\s]+$"/>
                    <input 
                        className="callback-form__form__input"
                        required
                        type="tel"
                        maxLength="16"
                        placeholder="Ваш телефон"/>
                    <input 
                        className="callback-form__form__input"
                        required
                        type="email"
                        maxLength="50"
                        placeholder="Ваш E-mail"/>
                    <textarea 
                        className="callback-form__form__input textarea"
                        required
                        maxLength="300"
                        placeholder="Сообщение"/>
                    <button className="btn btn-white callback-form__btn">Отправить</button>
                </form>
                <div className="callback-form__text">
                    <h1>Направление деятельности</h1>
                    <div className="header-block header-block_white"/>
                    <p>Если вам необходимы услуги профессионального адвоката, способного оказать реальную помощь в делах любой сложности, вы попали по нужному адресу.</p>
                    <p>При оказании юридической помощи мы руководствуемся Федеральным Законом «Об адвокатской деятельности», а также «Кодексом профессиональной деятельности адвоката», действуем в полном соответствии с их положениями. Каждому обратившемуся к нам клиенту мы гарантируем соблюдение адвокатской тайны и полную конфиденциальность.</p>
                    <p>Большой опыт выигранных дел позволяет нам оказывать помощь на высоком профессиональном уровне, успешно решать юридические проблемы, возникающие у наших клиентов. Обратившись к нам, вы можете быть уверены, что сможете получить необходимую помощь в любой день недели и время суток.</p>
                    <button className="btn btn-white callback-form__btn">УЗНАТЬ ПОДРОБНЕЕ</button>
                </div>
            </div>
        </div>
    );
};

export default CallbackForm;
import React, { useState } from "react";

import './Callback-form.css';

import close from '../img/close_big.png'

const CallbackForm = () => {
    const [modalClassName, setModalClassName] = useState("callback-form");


    const openModal = () => {
        setModalClassName("callback-form active-modal");
        document.body.style.overflow = "hidden"
    }
    const closeModal = () => {
        setModalClassName("callback-form");
        document.body.style.overflow = "";
    }
    const onEmptyCloseModal = () => {
        closeModal();
    }

    return (
        <>
            <div
                className={modalClassName}
                onClick={onEmptyCloseModal}>
                <form
                    className="callback-form__form"
                    onClick={(event) => { event.stopPropagation() }}
                    onSubmit={closeModal}>
                    <button
                        onClick={closeModal}>
                        <img
                            src={close}
                            alt='close' />
                    </button>
                    <div className="block-1">
                        <h1>Заказать консультацию</h1>
                        <p>Заполните форму и мы свяжемся с Вами в ближайшее время</p>
                        <input
                            className="callback-form__form__input"
                            required
                            type="text"
                            maxLength="50"
                            placeholder="Ваше имя"
                            pattern="^[А-Яа-яЁё\s]+$" />
                        <input
                            className="callback-form__form__input"
                            required
                            type="tel"
                            maxLength="16"
                            placeholder="Ваш телефон" />
                        <input
                            className="callback-form__form__input"
                            required
                            type="email"
                            maxLength="50"
                            placeholder="Ваш E-mail" />
                    </div>
                    <div className="block-2">
                        <textarea
                            className="callback-form__form__input textarea"
                            required
                            maxLength="300"
                            placeholder="Сообщение" />
                        <input
                            type="checkbox"
                            required />
                        <label className="callback-form__form__input agreement">
                            Нажимая "Отправить" я соглашаюсь на обработку моих персональных данных
                        </label>
                        <button className="btn btn-white callback-form__btn">Отправить</button>
                    </div>
                </form>
                {/* <div className="callback-form__text">
                        <h1>Направление деятельности</h1>
                        <div className="header-block header-block_white" />
                        <p>Если вам необходимы услуги профессионального адвоката, способного оказать реальную помощь в делах любой сложности, вы попали по нужному адресу.</p>
                        <p>При оказании юридической помощи мы руководствуемся Федеральным Законом «Об адвокатской деятельности», а также «Кодексом профессиональной деятельности адвоката», действуем в полном соответствии с их положениями. Каждому обратившемуся к нам клиенту мы гарантируем соблюдение адвокатской тайны и полную конфиденциальность.</p>
                        <p>Большой опыт выигранных дел позволяет нам оказывать помощь на высоком профессиональном уровне, успешно решать юридические проблемы, возникающие у наших клиентов. Обратившись к нам, вы можете быть уверены, что сможете получить необходимую помощь в любой день недели и время суток.</p>
                        <button className="btn btn-white callback-form__btn">УЗНАТЬ ПОДРОБНЕЕ</button>
                    </div> */}
            </div>

            <button
                className="callback-btn"
                onClick={openModal}>
                Заказать звонок
            </button>
        </>
    );
};

export default CallbackForm;
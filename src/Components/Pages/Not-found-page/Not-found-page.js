// modules
import React from "react";

// pics
import pic from '../../img/404-page.jpg';

// styles
import './Not-found-page.css';

export default function NotFoundPage () {
    return (
        <div className="empty-page_wrapper">
            <h1>Кажется, Вы зашли на несуществующую страницу!</h1>
            <h3>Попробуйте снова!</h3>
            <img
                src={pic}
                alt="page not found!"/>
        </div>
    )
}
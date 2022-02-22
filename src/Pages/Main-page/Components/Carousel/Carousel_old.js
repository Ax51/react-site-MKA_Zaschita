// modules
import React from 'react';
import { NavLink } from 'react-router-dom';
import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Components
import BuisnessSwitch from '../../../../Components/Buisness-switch/Buisness-switch.js';

// Data
import buisnessArray from '../../../../Db/Carousel-Db/Buisness-carousel_items.json';
import privateArray from '../../../../Db/Carousel-Db/Private-carousel_items.json';

// pics
import noLogo from '../../../../img/mz_ic-1.fcb9.png';
// import bankruptLogo from '../../../../img/bankrupt.svg'

// styles
import 'swiper/swiper.min.css';
import './Carousel_old.css';

SwiperCore.use([Autoplay]);

const Carousel = ({ buisnessActive, setBuisnessActive }) => {
    function slides(array) {
        return array.map((item) => {
            const { name, img, shortText, site } = item;

            return (
                <SwiperSlide key={name}>
                    <NavLink to={`/services/${buisnessActive ? "buisness" : "private"}/${site}`}>
                        <div className="swiper-slide-title_flex">
                            <p className="swiper-slide--title">{name}</p>
                            <img
                                className="swiper-slide--logo"
                                src={img || noLogo}
                                alt="logo"
                                onError={e => e.target.src = noLogo} />
                        </div>
                        <p className="swiper-slide--text">{shortText}</p>
                    </NavLink>
                </SwiperSlide>
            )
        })
    };

    return (
        <div className="swiper-block">
            <div className="swiper-title">
                <h2>Практики коллегии</h2>
            </div>
            <BuisnessSwitch
                buisnessActive={buisnessActive}
                setBuisnessActive={setBuisnessActive} />
            <div className="swiper">
                <Swiper
                    modules={[Autoplay]}
                    slidesPerView={5}
                    spaceBetween={15}
                    loop={true}
                    centeredSlides={true}
                    autoplay={{ delay: 3000 }}
                    breakpoints={{
                        0: {
                            "slidesPerView": 1.2,
                            "spaceBetween": 15,
                        },
                        380: {
                            "slidesPerView": 1.5,
                            "spaceBetween": 15
                        },
                        580: {
                            "slidesPerView": 2.1,
                            "spaceBetween": 20
                        },
                        768: {
                            "slidesPerView": 3.1,
                            "spaceBetween": 20
                        },
                        1024: {
                            "slidesPerView": 4.1,
                            "spaceBetween": 25
                        },
                        1450: {
                            "slidesPerView": 5.1,
                            "spaceBetween": 30
                        }
                    }
                    }>
                    {buisnessActive ? slides(buisnessArray) : slides(privateArray)}
                </Swiper>
            </div>
            <NavLink to='/services'>
                <button
                    className="btn btn-dark swiper-block_goto-btn">Смотреть все
                </button>
            </NavLink>
        </div>
    )
}

export default Carousel;
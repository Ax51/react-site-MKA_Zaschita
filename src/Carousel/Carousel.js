import React from 'react';
import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import BuisnessSwitch from '../Buisness-switch/Buisness-switch.js';

import buisnessArray from './Db/Buisness-carousel_items.js';
import privateArray from './Db/Private-carousel_items.js'

import 'swiper/swiper.min.css';

import './Carousel.css';

SwiperCore.use([ Autoplay ]);

const Carousel = ({ buisnessActive, setBuisnessActive }) => {
    const buisnessSlides = /* carouselArray */buisnessArray.map((item) => {
        let { name, img, shortText } = item;
        return (
            <SwiperSlide key={name}>
                <div className="swiper-slide-title_flex">
                    <p className="swiper-slide--title">{name}</p>
                    <img
                        className="swiper-slide--logo"
                        src={img}
                        alt="logo" />
                </div>
                <p className="swiper-slide--text">{shortText}</p>
            </SwiperSlide>
        )
    });
    const privateSlides = /* carouselArray */privateArray.map((item) => {
        let { name, img, shortText } = item;
        return (
            <SwiperSlide key={name}>
                <div className="swiper-slide-title_flex">
                    <p className="swiper-slide--title">{name}</p>
                    <img
                        className="swiper-slide--logo"
                        src={img}
                        alt="logo" />
                </div>
                <p className="swiper-slide--text">{shortText}</p>
            </SwiperSlide>
        )
    });

    return (
        <div className="swiper-block">
            <div className="swiper-title">
                <h1>Практики коллегии</h1>
                <div className="header-block header-block_dark"/>
            </div>
            <BuisnessSwitch
                styles="btn-dark"
                setBuisnessActive={setBuisnessActive}/>
            <div className="swiper">
                <Swiper
                    modules={[Autoplay]}
                    slidesPerView={5}
                    spaceBetween={15}
                    loop={true}
                    centeredSlides={true}
                    autoplay={{delay: 3000}}
                    breakpoints= {{
                        "0": {
                            "slidesPerView": 1,
                            "spaceBetween": 8
                          },
                        "640": {
                            "slidesPerView": 2,
                            "spaceBetween": 10
                          },
                          "768": {
                            "slidesPerView": 4,
                            "spaceBetween": 12
                          },
                          "1024": {
                            "slidesPerView": 5,
                            "spaceBetween": 15
                          } 
                        }
                    }>
                        {buisnessActive ? buisnessSlides : privateSlides}
                </Swiper>
            </div>
            <button
                className="btn btn-dark">Смотреть все
            </button>
        </div>
    )
}

export default Carousel;
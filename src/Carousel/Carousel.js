import React from 'react';
import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import carouselArray from './Carousel_items';

import 'swiper/swiper.min.css';

import './Carousel.css';

SwiperCore.use([Autoplay]);

const Carousel = () => {
    const slides = carouselArray.map((item) => {
        let { name, img, text } = item;
        return (
            <SwiperSlide key={name}>
                <div className="swiper-slide-title_flex">
                    <p className="swiper-slide--title">{name}</p>
                    <img
                        className="swiper-slide--logo"
                        src={img}
                        alt="logo" />
                </div>
                <p className="swiper-slide--text">{text}</p>
            </SwiperSlide>
        )
    })
    return (
        <div className="swiper-block">
            <div className="swiper-title">
                <h1>Практики коллегии</h1>
                <div className="header-block header-block_dark"/>
            </div>
            <div className="swiper">
                <Swiper
                    modules={[Autoplay]}
                    slidesPerView={5}
                    spaceBetween={20}
                    loop={true}
                    centeredSlides={true}
                    autoplay={{delay: 5000}}
                    breakpoints= {{
                        "0": {
                            "slidesPerView": 1,
                            "spaceBetween": 10
                          },
                        "640": {
                            "slidesPerView": 2,
                            "spaceBetween": 15
                          },
                          "768": {
                            "slidesPerView": 4,
                            "spaceBetween": 20
                          },
                          "1024": {
                            "slidesPerView": 5,
                            "spaceBetween": 20
                          } 
                        }
                    }>
                        {slides}
                </Swiper>
            </div>
            <button
                className="btn btn-dark">Смотреть все
            </button>
        </div>
    )
}

export default Carousel;
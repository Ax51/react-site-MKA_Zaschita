import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import { Navigation } from 'swiper';

import 'swiper/swiper.min.css';
import 'swiper/swiper-bundle.css';
import './Awards.css';

export default function Awards() {
    return (
        <div className="awards">
            <h2 className="awards-header">наши достижения</h2>
            <p className="awards-text">
                За долгую историю работы нашей коллегии адвокатов, наши специалисты были неоднократно отмечены медалями, 
                <br/>почетными грамотами и орденами за достижения в своей профессиональной деятельности
            </p>
            <div className="awards-summary">
                <div className="awards-summary-item">
                    <div className="awards-summary-item-count">2</div>
                    <div className="awards-summary-item-name">ордена</div>
                </div>
                <div className="awards-summary-item">
                    <div className="awards-summary-item-count">188</div>
                    <div className="awards-summary-item-name">грамот</div>
                </div>
                <div className="awards-summary-item">
                    <div className="awards-summary-item-count">91</div>
                    <div className="awards-summary-item-name">медаль</div>
                </div>
            </div>
            <div className="awards-swiper">
                <Swiper
                    navigation={{
                        nextEl: '.swiper2-next-el',
                        prevEl: '.swiper2-prev-el',
                    }}
                    modules={[Navigation]}
                    slidesPerView={1}
                    spaceBetween={5}
                    centeredSlides={false}
                    breakpoints={{
                        500: {
                            "slidesPerView": 2,
                            "spaceBetween": 10
                        },
                        650: {
                            "slidesPerView": 3,
                            "spaceBetween": 15
                        },
                        1200: {
                            "slidesPerView": 4,
                            "spaceBetween": 20
                        }
                    }} >
                    <SwiperSlide><div className="award"></div></SwiperSlide>
                    <SwiperSlide><div className="award"></div></SwiperSlide>
                    <SwiperSlide><div className="award"></div></SwiperSlide>
                    <SwiperSlide><div className="award"></div></SwiperSlide>
                    <SwiperSlide><div className="award"></div></SwiperSlide>
                </Swiper>
                <div className="swiper2-next-el" />
                <div className="swiper2-prev-el" />
            </div>
        </div>
    )
}
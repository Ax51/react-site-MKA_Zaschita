// modules
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import { Navigation } from 'swiper';

// Components
import BuisnessSwitch from '../../../../Components/Buisness-switch/Buisness-switch.js';

// Data
import buisnessArray from '../../../../Db/Carousel-Db/Buisness-carousel_items.json';
import privateArray from '../../../../Db/Carousel-Db/Private-carousel_items.json';

// pics
import noLogo from '../../../../img/mz_ic-1.fcb9.png';

// styles
import 'swiper/swiper.min.css';
import 'swiper/swiper-bundle.css';
import './Carousel.css';

const Carousel = ({ buisnessActive, setBuisnessActive }) => {

    // function slides(array) {
    //     return array.map((item) => {
    //         const { name, img, shortText, site } = item;

    //         return (
    //             <SwiperSlide key={name}>
    //                 <NavLink to={`/services/${buisnessActive ? "buisness" : "private"}/${site}`}>
    //                     <div className="swiper-slide-title_flex">
    //                         <p className="swiper-slide--title">{name}</p>
    //                         <img
    //                             className="swiper-slide--logo"
    //                             src={img || noLogo}
    //                             alt="logo"
    //                             onError={e => e.target.src = noLogo} />
    //                     </div>
    //                     <p className="swiper-slide--text">{shortText}</p>
    //                 </NavLink>
    //             </SwiperSlide>
    //         )
    //     })
    // };

    const windowWidth = window.innerWidth;
    let swiperHorisontalPadding;
    if (windowWidth >= 1200) {
        swiperHorisontalPadding = 320
    } else if (windowWidth >= 650) {
        swiperHorisontalPadding = 200
    } else if (windowWidth >= 500) {
        swiperHorisontalPadding = 100
    } else {
        swiperHorisontalPadding = 40
    }

    const countHorisontalBarsPerWidth = Math.floor((windowWidth - swiperHorisontalPadding /* left & right paddings */) / 320 /* raw (gap and borders not calculated) min width of block */),
        horisontalBars = countHorisontalBarsPerWidth > 4
            ? 4  // it can't be more than 4
            : countHorisontalBarsPerWidth < 1
                ? 1  // it can't be less than 1
                : countHorisontalBarsPerWidth;
    const verticalBars = horisontalBars === 1
        ? 5
        : 2;
    const totalBars = verticalBars * horisontalBars;

    const mobileSwiperSlideFlexStyles = {
        paddingTop: 'unset',
        paddingBottom: 'inset',
        padding: '10px',
        height: 'auto',
        aspectRatio: 'unset',
        flexDirection: 'row'
    },
        mobileSwiperSlideLogoStyles = {
            maxWidth: '65px',
            maxHeight: '65px'
        },
        mobileSwiperSlideNameStyles = {
            margin: 'unset',
            marginLeft: '10px',
            textAlign: 'start'
        }

    function newSlides(array) {
        if (array[array.length - 1].length === totalBars) {  // if last slide exceeds totalBars, then create a new slide for callback block
            array.push([])
        }
        return array.map((i, n, a) => {
            const slides = i.map(item => {
                const { name, img, site } = item;
                return (
                    <NavLink
                        to={`/services/${buisnessActive ? "buisness" : "private"}/${site}`}
                        key={name}>
                        <div className="swiper-slide-flex"
                            style={horisontalBars === 1
                                ? mobileSwiperSlideFlexStyles
                                : null} >
                            <img
                                className="swiper-slide-logo"
                                src={img}
                                alt="logo"
                                onError={e => e.target.src = noLogo}
                                style={horisontalBars === 1
                                    ? mobileSwiperSlideLogoStyles
                                    : null} />
                            <h3 className="swiper-slide-name"
                                style={horisontalBars === 1
                                    ? mobileSwiperSlideNameStyles
                                    : null} >
                                {name}
                            </h3>
                        </div>
                    </NavLink>
                )
            })
            if (array[array.length - 1] === i) {  // find last slide and push callback block
                slides.push(
                    <NavLink to='#' key='last'>
                        <div className="swiper-slide-flex swiper-slide-last"
                            style={horisontalBars === 1
                                ? mobileSwiperSlideFlexStyles
                                : null} >
                            <h3 className="swiper-slide-name"
                                style={horisontalBars === 1
                                    ? mobileSwiperSlideNameStyles
                                    : null} >
                                не нашли подходящую услугу?
                            </h3>
                            <button
                                    /* onClick={} */>
                                оставить заявку
                            </button>
                        </div>
                    </NavLink>
                )
            }
            return (
                <SwiperSlide key={n}>
                    <div className="swiper-slide-wrapper"
                        style={{
                            gridTemplateColumns: `repeat(${horisontalBars}, 1fr)`
                        }}>
                        {slides}
                    </div>
                </SwiperSlide>
            )
        })
    }

    function createSubArrays(array, newArrLength = totalBars) {
        let newArr = [];
        for (let i = 0; i < array.length; i += newArrLength) {
            newArr = [...newArr, array.slice(i, i + newArrLength)]
        }
        return newArr
    }

    return (
        <div
            className="swiper-block" >
            <h2>Практики коллегии</h2>
            <div className="swiper-flex-buttons">
                <BuisnessSwitch
                    buisnessActive={buisnessActive}
                    setBuisnessActive={setBuisnessActive} />
                {/* <NavLink to='/services'>
                    <button
                        className="btn btn-dark swiper-block_goto-btn">
                        Смотреть все
                    </button>
                </NavLink> */}
            </div>
            <div className="swiper-slider">
                <Swiper
                    navigation={{
                        nextEl: '.swiper-next-el',
                        prevEl: '.swiper-prev-el',
                    }}
                    modules={[Navigation]}
                    slidesPerView={1}
                    spaceBetween={20}
                    centeredSlides={true}>
                    {buisnessActive ? newSlides(createSubArrays(buisnessArray)) : newSlides(createSubArrays(privateArray))}
                </Swiper>
                <div className="swiper-next-el" />
                <div className="swiper-prev-el" />
            </div>
        </div>
    )
}

export default Carousel;
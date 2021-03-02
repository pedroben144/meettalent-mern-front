import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';

import MainWrapper from '../../containers/Main';
import Slide1 from './components/Slide1';
import Slide2 from './components/Slide2';
import Slide3 from './components/Slide3';
import Slide4 from './components/Slide4';

SwiperCore.use([Pagination]);

export default function LandingPage({...mainProps}) {

    const [ main, setMain ] = useState('blue');

    mainProps[main] = true;

    // const toggleMain = (swiper) => {
    //     main === 'blue' ? setMain('white') : setMain('blue');
    //     console.log(swiper);
    // }

    const handleMainOnSwipe = (swiper) => {
        if (swiper.realIndex !== 0) {
            setMain('white');
        } else {
            setMain('blue');
        }
    }

    return (
        <MainWrapper {...mainProps}>
            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                pagination
                onSlideChange={(swiper) => handleMainOnSwipe(swiper)}
                >
                <SwiperSlide><Slide1 /></SwiperSlide>
                <SwiperSlide><Slide2 /></SwiperSlide>
                <SwiperSlide><Slide3 /></SwiperSlide>
                <SwiperSlide><Slide4 /></SwiperSlide>
            </Swiper>

        </MainWrapper>
    )
}
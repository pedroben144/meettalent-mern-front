import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';

import Header from '../../containers/Header';
import Section from '../../containers/Section';
import MainWrapper from '../../containers/Main';
import MainWButton from '../../components/MainBtn';
import Slide1 from './components/Slide1';
import Slide2 from './components/Slide2';
import Slide3 from './components/Slide3';
import Slide4 from './components/Slide4';

SwiperCore.use([Pagination]);

export default function LandingPage({...mainProps}, {...btnProps}) {

    const [ main, setMain ] = useState('blue');
    const [ showBtn, setShowBtn ] = useState('white');

    mainProps[main] = true;
    btnProps[showBtn] = true;

    const handleSwipe = (swiper) => {
        if (swiper.realIndex !== 0) {
            setMain('white');
            setShowBtn('blue');
        } else {
            setMain('blue');
            setShowBtn('white');
        }
    }

    return (
        <MainWrapper {...mainProps}>
            <Header></Header>
            <Section>

            <Swiper
                spaceBetween={1000}
                slidesPerView={1}
                pagination
                onSlideChange={(swiper) => handleSwipe(swiper)}
                >
                <SwiperSlide><Slide1 /></SwiperSlide>
                <SwiperSlide><Slide2 /></SwiperSlide>
                <SwiperSlide><Slide3 /></SwiperSlide>
                <SwiperSlide><Slide4 /></SwiperSlide>
            </Swiper>
            <MainWButton {...btnProps}>Comenzar</MainWButton>
            </Section>
        </MainWrapper>
    )
}
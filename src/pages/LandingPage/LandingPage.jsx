import React, { useContext, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';

import { MainContext } from '../../contexts/MainContext';
import Section from '../../containers/Section';
import MainWButton from '../../components/MainBtn';
import Slide1 from './components/Slide1';
import Slide2 from './components/Slide2';
import Slide3 from './components/Slide3';
import Slide4 from './components/Slide4';
import { Link, useHistory } from 'react-router-dom';
import Header from '../../containers/Header';

SwiperCore.use([Pagination]);

export default function LandingPage() {

    const { setMainStyle } = useContext(MainContext);

    let history = useHistory();

    const handleSwipe = (swiper) => {
        if (swiper.realIndex !== 0) {
            setMainStyle('white');
        } else {
            setMainStyle('blue');
        }
    }

    const goToLogIn = () => {
        history.push('/login');
    }

    useEffect(() => setMainStyle('blue'), [setMainStyle]);

    return (
        <>
            <Header>
                <Link to="/about" className="c-login-page__restore-link">Meet the team</Link>
            </Header>
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
            <MainWButton fn={goToLogIn}>Comenzar</MainWButton>
            </Section>
        </>
    )
}
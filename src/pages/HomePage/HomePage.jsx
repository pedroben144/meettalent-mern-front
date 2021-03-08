import React, { useContext, useEffect } from "react";
import { BiSearch } from 'react-icons/bi';
import { FiUnlock, FiUser, FiEyeOff, FiMapPin } from 'react-icons/fi';

import { MainContext } from "../../contexts/MainContext";
import Header from "../../containers/Header";
import Section from "../../containers/Section";
import { FooterContext } from "../../contexts/FooterContext";
import { useHistory } from "react-router";

export function HomePage() {

  const { setMainStyle } = useContext(MainContext);
  const { setFooter } = useContext(FooterContext);

  let history = useHistory();

  const goSearch = () => {
    history.push('/search')
  }


  useEffect(() => setMainStyle("white"), [setMainStyle]);
  useEffect(() => setFooter(true), [setFooter]);

  return (
    <>
      <Header>
        <img className="home__logo" src="/assets/images/logo-blue.png" alt="logo" />
        
      </Header>
      <Section>
          <div className="home__header">
            <input className="input input--search" onClick={goSearch} type="text" placeholder="Search" />
            <div className="input input--search--icon"><BiSearch /></div>
          </div>
          <div className="home__content">
            <h3 className="home__content__title">Ofertas abiertas</h3>
            <div className="card">
              <p className="card__date">15/06/2020</p>
              <h4 className="card__title">Diseñador web</h4>
              <div className="card__status">
                <div className="card__status__item"><FiMapPin /><span className="card__status__item--text">Madrid</span></div>
                <div className="card__status__item"><span className="card__status__item--text">1</span><FiUser /></div>
                <div className="card__status__item"><FiEyeOff /><span className="card__status__item--text">24/07/2020</span></div>
              </div>
              <div className="card__icon"><FiUnlock /></div>
            </div>
          </div>
      </Section>
    </>
  );
}

import React, { useContext, useEffect, useState } from "react";
import { BiSearch } from 'react-icons/bi';
import { FiUnlock, FiUser, FiEyeOff, FiMapPin } from 'react-icons/fi';
import moment from 'moment';

import { MainContext } from "../../contexts/MainContext";
import Header from "../../containers/Header";
import Section from "../../containers/Section";
import { FooterContext } from "../../contexts/FooterContext";
import { useHistory } from "react-router";
import { LoginContext } from "../../contexts/LoginContext";
import axios from "axios";

export function HomePage() {

  const { setMainStyle } = useContext(MainContext);
  const { setFooter } = useContext(FooterContext);
  const { getLoggedUser } = useContext(LoginContext);

  const [ offersData, setOffersData ] = useState(null);

  let history = useHistory();

  const goSearch = () => {
    history.push('/search')
  }

  const getData = () => {
    const localUser = localStorage.getItem('user');
    axios.get(process.env.REACT_APP_BASE_URL + '/offers')
    .then(function(res) {
      const data = res.data.results;
      let offers = [];
      for (const item of data) {
        if (item.status && item.companyId === localUser) {
          offers.push(item);
        }
      }
      setOffersData(offers);
    })
    .catch(function(err) {
      console.log(err);
    })
  }

  const handleLockIcon = (e) => {
    e.status = false;
    axios.put(process.env.REACT_APP_BASE_URL + '/offers/status', e)
    .then(function(res) {
      console.log(res);
      getData();
    })
    .catch(function(err) {
      console.log(err);
    })
  }

  const goToDetail = (id) => {
    history.push(`/jobs/${id}`)
  }

  useEffect(() => {setMainStyle("white")}, [setMainStyle]);
  useEffect(() => setFooter(true), [setFooter]);
  useEffect(() => getData(), []);
  useEffect(() => getLoggedUser(), [])

  return (
    <>
      <Header>
        <img className="header__logo" src="/assets/images/logo-blue.png" alt="logo" />
        
      </Header>
      <Section>
          <div className="home__header">
            <input className="input input--search" onClick={goSearch} type="text" placeholder="Search" />
            <div className="input input--search--icon"><BiSearch /></div>
          </div>
          <div className="home__content">
            <h3 className="home__content__title">Ofertas abiertas</h3>
            {offersData && offersData.map((offer, i) => (
            <div className="card" key={i}>
              <p className="card__date">{moment(offer.releaseDate).format("DD-MM--YYYY")}</p>
              <h4 className="card__title" onClick={() => goToDetail(offer._id)}>{offer.title}</h4>
              <div className="card__status">
                <div className="card__status__item"><FiMapPin /><span className="card__status__item--text">{offer.location}</span></div>
                <div className="card__status__item"><span className="card__status__item--text">{offer.candidates.length}</span><FiUser /></div>
                <div className="card__status__item"><FiEyeOff /><span className="card__status__item--text"></span>{moment(offer.releaseDate).format("DD-MM--YYYY")}</div>
              </div>
              <div className="card__icon" onClick={() => handleLockIcon(offer)}><FiUnlock /></div>
            </div>
          ))}
          </div>

          
      </Section>
    </>
  );
}

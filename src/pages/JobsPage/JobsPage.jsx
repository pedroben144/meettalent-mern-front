/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from "react";
import moment from 'moment';

import { MainContext } from "../../contexts/MainContext";
import Section from "../../containers/Section";
import { SearchContext } from "../../contexts/SearchContext";
import { FooterContext } from "../../contexts/FooterContext";
import Header from "../../containers/Header";
import Rectangle from "../../containers/Rectangle";

import { CgSearch } from "react-icons/cg";
import { FiUnlock,FiLock, FiUser, FiEyeOff, FiMapPin } from 'react-icons/fi';
import { API } from "../../api/api.consts";
import { useHistory } from "react-router";
import { LoadingContext } from "../../contexts/LoadingContext";

export function JobsPage() {
  const { setMainStyle } = useContext(MainContext);
  const { setFooter } = useContext(FooterContext);
  const { searchValue, setSearchValue } = useContext(SearchContext);
  const { setIsLoading } = useContext(LoadingContext);

  const [ offers, setOffers ] = useState([]);
  const [filterOffers, setFilterOffers] = useState([]);
  const [open, setOpen] = useState(true);

  let history = useHistory();

  const getOffers = () => {
    const localUser = localStorage.getItem('user');
    setIsLoading(true);

    API.get('offers').then((res) => {
      setIsLoading(false);
      const data = res.data.results;

      let openOffers= [];
      let closedOffers = [];

      for(const item of data){

        if(item.status && item.companyId === localUser){
          openOffers.push(item);
        }
        if(item.status === false && item.companyId === localUser){
          closedOffers.push(item);
        }

      }

      if(open){
        
        setOffers(openOffers);
      }
      if(open === false){
        setOffers(closedOffers);

      }

    })
  }

  const doSearching = () => {
    const value = document.querySelector('#searchOffer').value;
    let findOffers;
    findOffers = offers.filter(offer => {
      return offer.title.toLowerCase().includes(value.toLowerCase());
    });
    setFilterOffers(findOffers);
  }

  const initialFilterOffers = () => {
      doSearching();
      setTimeout(() => setSearchValue({search:'', type:''}), 500)
  }

  const openJobs = () => {
    const input$$ = document.querySelector('#searchOffer');
    input$$.value = '';
    setOpen(true);
  }

  const closedJobs = () => {
    const input$$ = document.querySelector('#searchOffer');
    input$$.value = '';
    setOpen(false);
  }

  const goToDetail = (id) => {
  
    history.push(`/jobs/${id}`)
  }

  const handleLockIcon = (e) => {
    e.status = false;
    API.put('offers/status', e)
    .then(function(res) {
      getOffers();
    })
    .catch(function(err) {
      console.log(err);
    })
  }
  const handleUnLockIcon = (e) => {
    e.status = true;
    API.put('offers/status', e)
    .then(function(res) {
      getOffers();
    })
    .catch(function(err) {
      console.log(err);
    })
  }

  useEffect(getOffers,[open]);
  useEffect(() => setMainStyle("white"), [setMainStyle]);
  useEffect(() => setFooter(true), [setFooter]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(initialFilterOffers,[offers]);

  return (
    <>
      <Header>Ofertas</Header>
      <Section>
          <div className="c-jobs-page__header">
          <form className="c-people-page__form"  >
            <label className= "c-people-page__label" >
              <CgSearch className="c-people-page__icon-search"/>
              <input defaultValue={searchValue.type === 'offers' ? searchValue.search : ''} className="input input--blue input--paddingPeople" type="text" id="searchOffer" placeholder="Buscar" onChange={() => {doSearching()}} />
            </label>
          </form>
          <div className="c-jobs-page__stateJobs"><p onClick={openJobs} style={ open ? {"color": "#44af69"} : {"color": "#d9d9db"}} >Abiertas</p><p style={ open === false ? {"color": "#44af69"} : {"color": "#d9d9db"}} onClick={closedJobs}>Cerradas</p></div>
          </div>
        <Rectangle blue active={true}>
          <div className="c-jobs-page__content">
          {filterOffers && filterOffers.map((offer, i) => (
            <div className="cardJob" key={i}>
              <p className="cardJob__date">{moment(offer.releaseDate).format("DD/MM/YYYY")}</p>
              <h4 className="cardJob__title" onClick={() => goToDetail(offer._id)}>{offer.title}</h4>
              <div className="cardJob__status">
                <div className="cardJob__status__item"><FiMapPin /><span className="cardJob__status__item--text">{offer.location}</span></div>
                <div className="cardJob__status__item"><span className="cardJob__status__item--text">{offer.candidates.length}</span><FiUser /></div>
                <div className="cardJob__status__item"><FiEyeOff /><span className="cardJob__status__item--text">{moment(offer.releaseDate).format("DD/MM/YYYY")}</span></div>
              </div>
              {open && <div className="cardJob__icon"  onClick={() => handleLockIcon(offer)} ><FiUnlock /></div>}
              {open === false && <div className="cardJob__icon" onClick={() => handleUnLockIcon(offer)}  ><FiLock /></div>}
            </div>
          ))}
          </div>
        </Rectangle>
      </Section>
    </>
  );
}

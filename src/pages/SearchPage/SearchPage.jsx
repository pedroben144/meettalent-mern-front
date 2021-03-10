import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { BiSearch } from "react-icons/bi";
import { BsCheck } from "react-icons/bs";
import { useHistory } from "react-router-dom";
import Header from "../../containers/Header";

import Section from "../../containers/Section";
import { MainContext } from "../../contexts/MainContext";
import MainWButton from "../../components/MainBtn";
import { SearchContext } from "../../contexts/SearchContext";

export function SearchPage() {
  const { setMainStyle } = useContext(MainContext);
  useEffect(() => setMainStyle("white"), [setMainStyle]);

  const { setSearchValue } = useContext(SearchContext);

  const [submitError, setSubmitError] = useState(false);
  const [offers, setOffers] = useState(false);
  const [candidates, setCandidates] = useState(false);

  const { register, handleSubmit, reset } = useForm();

  let history = useHistory();

  const handleOfferBtn = () => {
    setOffers(true);
    setCandidates(false);
  }

  const handleCandidatesBtn = () => {
    setOffers(false);
    setCandidates(true);
  }

  const doSubmit = (data) => {
    if (!offers && !candidates) {
      setSubmitError(true);
    } else {
      console.log(data);
      setSearchValue(data.search);
      reset();
      setSubmitError(false);
      if (offers) {
        history.push('jobs');
      }
      if (candidates) {
        history.push('people');
      }
    }
  };

  const goBack = () => {
    history.push("/home");
  };

  return (
    <>
      <Header goBack fn={goBack} />
      <Section>
        <div className="c-search-page">
          <form onSubmit={handleSubmit(doSubmit)}>
          <div className="home__header">
            <input className="input input--search" type="text" placeholder="Search" id="search" name="search" ref={register()} />
            <div className="input input--search--icon"><BiSearch /></div>
          </div>
            {submitError && (
              <span className="c-search-page__error-message">
                Debe indicar un filtro: ofertas o candidatos/perfiles
              </span>
            )}
            <input
              className="c-search-page__input--hide"
              name="offers"
              data-function="offers-input"
            />
            <input
              className="c-search-page__input--hide"
              name="candidates"
              data-function="candidates-input"
            />
            <div
              className="c-search-page__filter-cont c-search-page__filter-cont--margin1"
              onClick={handleOfferBtn}
            >
              <p className={`c-search-page__filter-text ${offers && 'c-search-page__filter-text--selected'}`} data-function="offers">
                Ofertas
              </p>
              <BsCheck
                className={`c-search-page__check-icon ${offers && 'c-search-page__check-icon--show'}`}
                data-function="offers-icon"
              />
            </div>
            <div
              className="c-search-page__filter-cont c-search-page__filter-cont--margin2"
              onClick={handleCandidatesBtn}
            >
              <p
                className={`c-search-page__filter-text ${candidates && 'c-search-page__filter-text--selected'}`}
                data-function="candidates"
              >
                Candidatos/perfiles
              </p>
              <BsCheck
                className={`c-search-page__check-icon ${candidates && 'c-search-page__check-icon--show'}`}
                data-function="candidates-icon"
              />
            </div>
            <div className="c-search-page__submit-cont">
              <MainWButton>Buscar</MainWButton>
            </div>
          </form>
        </div>
      </Section>
    </>
  );
}

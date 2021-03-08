import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { CgSearch } from "react-icons/cg";
import { BsCheck } from "react-icons/bs";
import { useHistory } from "react-router-dom";
import Header from "../../containers/Header";

import Section from "../../containers/Section";
import { MainContext } from "../../contexts/MainContext";
import MainWButton from "../../components/MainBtn";

export function SearchPage() {
  const { setMainStyle } = useContext(MainContext);
  useEffect(() => setMainStyle("white"), [setMainStyle]);

  const [submitError, setSubmitError] = useState(false);

  const { register, handleSubmit, watch, errors, reset } = useForm();

  let history = useHistory();

  let offers = false;
  let candidates = false;
  // let submitError = false;

  const doSubmit = (data) => {
    if (!offers && !candidates) {
      setSubmitError(true);
    } else {
      console.log(data);
      reset(); //Borra los valores de los inputs cuando el form es válido y se ha enviado
      setSubmitError(false);
    }
    console.log(
      `submitError: ${submitError}, offers: ${offers}, candidates: ${candidates}`
    );
  };

  const goBack = () => {
    history.push("/home");
  };

  const $$offers = document.querySelector(`[data-function=offers]`);
  const $$candidates = document.querySelector(`[data-function=candidates]`);
  const offersIcon = document.querySelector(`[data-function=offers-icon]`);
  const candidatesIcon = document.querySelector(
    `[data-function=candidates-icon]`
  );

  const filterByOffers = () => {
    offers = offers ? false : true;
    if (offers === true) {
      $$offers.classList.add("c-search-page__filter-text--selected");
      offersIcon.classList.add("c-search-page__check-icon--show");
      $$candidates.classList.remove("c-search-page__filter-text--selected");
      candidatesIcon.classList.remove("c-search-page__check-icon--show");
      candidates = false;
    } else {
      $$offers.classList.remove("c-search-page__filter-text--selected");
      offersIcon.classList.remove("c-search-page__check-icon--show");
      candidates = false;
    }
  };

  const filterByCandidates = () => {
    candidates = candidates ? false : true;
    if (candidates === true) {
      $$candidates.classList.add("c-search-page__filter-text--selected");
      candidatesIcon.classList.add("c-search-page__check-icon--show");
      $$offers.classList.remove("c-search-page__filter-text--selected");
      offersIcon.classList.remove("c-search-page__check-icon--show");
      offers = false;
    } else {
      $$candidates.classList.remove("c-search-page__filter-text--selected");
      candidatesIcon.classList.remove("c-search-page__check-icon--show");
      offers = false;
    }
  };

  return (
    <>
      <Header goBack fn={goBack} />
      <Section>
        <div className="c-search-page">
          <form onSubmit={handleSubmit(doSubmit)}>
            <div className="c-search-page__input-cont">
              <label htmlFor="search" className="c-search-page__icon-cont">
                <CgSearch className="c-search-page__search-icon" />
              </label>
              <input
                id="search"
                name="search"
                className="c-search-page__input"
                placeholder="Buscar"
                ref={register()}
              />
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

            {/* <div> */}
            <div
              className="c-search-page__filter-cont c-search-page__filter-cont--margin1"
              onClick={filterByOffers}
            >
              <p className="c-search-page__filter-text" data-function="offers">
                Ofertas
              </p>
              <BsCheck
                className="c-search-page__check-icon"
                data-function="offers-icon"
              />
            </div>
            <div
              className="c-search-page__filter-cont c-search-page__filter-cont--margin2"
              onClick={filterByCandidates}
            >
              <p
                className="c-search-page__filter-text"
                data-function="candidates"
              >
                Candidatos/perfiles
              </p>
              <BsCheck
                className="c-search-page__check-icon"
                data-function="candidates-icon"
              />
            </div>
            <div className="c-search-page__submit-cont">
              <MainWButton>Buscar</MainWButton>
            </div>
          </form>
          {/* </div> */}
        </div>
      </Section>
    </>
  );
}

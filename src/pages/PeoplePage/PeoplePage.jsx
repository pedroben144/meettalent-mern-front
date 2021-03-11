import React, { useContext, useEffect, useState } from "react";
import { MainContext } from "../../contexts/MainContext";
import Section from "../../containers/Section";
import { FooterContext } from "../../contexts/FooterContext";
import Header from "../../containers/Header";
import Rectangle from "../../containers/Rectangle";

import { API } from "../../api/api.consts";
import PeopleGallery from "./components/PeopleGallery/PeopleGallery";
import RoundBtn from "../../components/RoundBtn";
import { CgSearch } from "react-icons/cg";
import { useHistory } from "react-router";

export function PeoplePage() {
  let history = useHistory();

  

  const [people, setPeople] = useState([]);
  const [filterPeople, setFilterPeople] = useState([]);

  const { setMainStyle } = useContext(MainContext);
  const { setFooter } = useContext(FooterContext);

  const getPeople = () => {
    API.get('candidates').then((res) => {
      console.log(res.data.results);
      setPeople(res.data.results)
    })
  }

  const doSearching = () => {
    const searchValue = document.querySelector('#searchPeople').value;
    const findPeople = people.filter(candidate => {
      return candidate.rol.toLowerCase().includes(searchValue.toLocaleLowerCase());
    })
    setFilterPeople(findPeople);
    console.log(searchValue);
  }

  const initialFilterPeople = () => {
    setFilterPeople(people);
  }

  const exitCandidates = () => {
    history.push('/home');
  }

  useEffect(() => setMainStyle("white"), [setMainStyle]);
  useEffect(() => setFooter(true), [setFooter]);
  useEffect(getPeople,[]);
  useEffect(initialFilterPeople,[people]);

  return (
    <>
    <Header goBack fn={exitCandidates}>Candidatos</Header>
      <Section>
        <Rectangle blue active={true}>
          <form className="c-people-page__form"  >
            <label className= "c-people-page__label" >
              <CgSearch className="c-people-page__icon-search"/>
              <input className="input input--blue input--paddingPeople" type="text" id="searchPeople" placeholder="Buscar" onChange={(doSearching)}/>
            </label>
          </form>
          <PeopleGallery   filterPeople={filterPeople}/>
          <div className="c-people-page__button"><RoundBtn profile /></div>
          
         </Rectangle>
      </Section>
    </>
  );
}

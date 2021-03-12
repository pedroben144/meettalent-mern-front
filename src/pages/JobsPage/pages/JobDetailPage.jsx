import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { FiMapPin, FiInfo } from 'react-icons/fi';
import { IoLanguage } from 'react-icons/io5';
import { FaRegHeart, FaHeart } from 'react-icons/fa';

import Rectangle from '../../../containers/Rectangle';
import Header from '../../../containers/Header';
import Section from '../../../containers/Section';
import { MainContext } from '../../../contexts/MainContext';
import { FooterContext } from '../../../contexts/FooterContext';

export default function JobDetailPage() {

    const { idJob } = useParams();
    const { setMainStyle } = useContext(MainContext);
    const { setFooter } = useContext(FooterContext);

    const [ offer, setOffer ] = useState([]);

    const [ showCandidates, setShowCandidates ] = useState(false);
    const [ showSelected, setShowSelected ] = useState(false);

    let history = useHistory();

    const goBack = () => {
        if (showCandidates) {
            setShowCandidates(false);
        }
        else if (showSelected) {
            setShowSelected(false);
        }
        else {
            history.push('/jobs');
        }
    }

    const handleCandidates = () => {
        setShowCandidates(true);
    }

    const handleSelected = () => {
        setShowSelected(true);
    }

    const getData = () => {
        axios.get(process.env.REACT_APP_BASE_URL + "/offers/" + idJob)
        .then(function(res) {
            let data = res.data.results;
            setOffer(data);
        })
        .catch(function(err) {
            console.log(err);
        })
    }

    const switchToInProcces = (el) => {
        axios.put(process.env.REACT_APP_BASE_URL + "/offers/" + offer._id + "/" + el._id)
        .then(function(res) {
            getData();
        })
        .catch(function(err) {
            console.log(err);
        })
    }

    useEffect(() => {
        getData();
        setMainStyle('white');
        setFooter(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <Header goBack fn={goBack}>
                {offer.title}
            </Header>
            <Section>
                <div className="job-detail">
                    <div className="job-detail__header">
                        <div className="job-detail__header__item"><FiMapPin className="job-detail__header__icon"/>{offer.location}</div>
                        <div className="job-detail__header__item"><FiInfo className="job-detail__header__icon"/>{offer.location ? 'Abierta' : 'Cerrada'}</div>
                        <div className="job-detail__header__item"><IoLanguage className="job-detail__header__icon"/>{offer.language}</div>
                    </div>
                    <div className="job-detail__content">
                        <div className="job-detail__content__desc">
                            {offer.description}
                        </div>
                        <div className="job-detail__content__info">
                            <div className="job-detail__content__info__item">
                                <p className="job-detail__content__info__item__title">Contrato:</p>
                                <p className="job-detail__content__info__item__text">{offer.contractType}</p>
                            </div>
                            <div className="job-detail__content__info__item">
                                <p className="job-detail__content__info__item__title">Joranda:</p>
                                <p className="job-detail__content__info__item__text">{offer.workingDay}</p>
                            </div>
                            <div className="job-detail__content__info__item">
                                <p className="job-detail__content__info__item__title">Salario:</p>
                                <p className="job-detail__content__info__item__text">{offer.salary}</p>
                            </div>
                            <div className="job-detail__content__info__item">
                                <p className="job-detail__content__info__item__title">Vacantes:</p>
                                <p className="job-detail__content__info__item__text">{offer.vacancyNum}</p>
                            </div>
                        </div>
                        <div className="job-detail__content__candidates">
                            <div className="job-detail__content__candidates__btn" onClick={handleCandidates}>Candidatos</div>
                            <div className="job-detail__content__candidates__btn" onClick={handleSelected}>Seleccionados</div>
                        </div>
                            
                    </div>
                </div>
                    <Rectangle blue active={showCandidates}>
                        <div className="candidate">
                        {offer.candidates && offer.candidates.map((el, i) => (
                            <figure className="candidate-card" key={i}>
                                <img className="candidate-card__img" src={el.avatar} alt={el.name} />
                                <div className="candidate-card__info">
                                    <p className="candidate-card__info__name">{el.name}</p>
                                    <p className="candidate-card__info__surname">{el.surname}</p>
                                    <p className="candidate-card__info__location"><FiMapPin className="job-detail__header__icon" />{el.city}</p>
                                </div>
                                {!offer.inProcess.some(c => c._id === el._id) && <FaRegHeart onClick={() => {switchToInProcces(el)}} className="candidate-card__fav"/>}
                                {offer.inProcess.some(c => c._id === el._id) && <FaHeart onClick={() => {switchToInProcces(el)}} className="candidate-card__fav" /> }
                            </figure>
                        ))}
                        </div>
                    </Rectangle>
                    <Rectangle blue active={showSelected}>
                        <div className="candidate">
                            {offer.inProcess && offer.inProcess.map((el, i) => (
                                <figure className="candidate-card" key={i}>
                                    <img className="candidate-card__img" src={el.avatar} alt={el.name} />
                                    <div className="candidate-card__info">
                                        <p className="candidate-card__info__name">{el.name}</p>
                                        <p className="candidate-card__info__surname">{el.surname}</p>
                                        <p className="candidate-card__info__location"><FiMapPin className="job-detail__header__icon" />{el.city}</p>
                                    </div>
                                    <FaHeart onClick={() => {switchToInProcces(el, i)}} className="candidate-card__fav" />
                                </figure>
                            ))}
                        </div>
                    </Rectangle>
            </Section>
        </>
    )
}
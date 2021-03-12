/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react';
import Header from '../../../containers/Header';
import Section from '../../../containers/Section';
import { MainContext } from '../../../contexts/MainContext';
import { FaTwitter } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import { GrFacebookOption } from "react-icons/gr";
import { AiOutlineCalendar } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FiMail } from "react-icons/fi";
import { FiPhone } from "react-icons/fi";
import { useHistory, useParams } from 'react-router';
import { API } from '../../../api/api.consts'
import { FooterContext } from '../../../contexts/FooterContext';
import { LoadingContext } from '../../../contexts/LoadingContext';


export function PeopleDetailPage(props) {

    let history = useHistory();

    const {setMainStyle} = useContext(MainContext);
    const { setFooter } = useContext(FooterContext);
    const { setIsLoading } = useContext(LoadingContext);

    const [candidate, setCandidate] = useState([]);
    const{idPeople} = useParams();

    const getCandidate = () => {
        setIsLoading(true);
        API.get("candidates/" + idPeople).then((res) => {
            setIsLoading(false);
            setCandidate(res.data.results);
        })
    }

    const goCandidates = () => {
        history.push('/people');
    }


    useEffect(() => setMainStyle("blue"), [setMainStyle]);
    useEffect(getCandidate,[idPeople]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => setFooter(false), []);

    return (
        <>
            
            <Header goBack fn={goCandidates} >Candidatos</Header>
            <Section>
            <div className="c-white">
            {candidate && <div className="c-white-rectangle">
            
            <img className="b-avatarImg  b-avatarImg--big b-avatarImg--absolute c-white-rectangle__image" src={candidate.avatar} alt=""/>
            <div className="c-white-rectangle__top">
                <h1 className="c-white-rectangle__top--h1">{candidate.name} {candidate.surname}</h1>
                <h3 className="c-white-rectangle__top--h3">{candidate.rol}</h3>
                <FaTwitter className="c-white-rectangle__top--icons"/> 
                <FiInstagram className="c-white-rectangle__top--icons"/> 
                <GrFacebookOption className="c-white-rectangle__top--icons"/>
            </div>
            
            <hr className="c-white-rectangle__rule"/>

            <div className="c-white-rectangle__perosnal-data">
                <h4 className="c-white-rectangle__subtitles">Datos personales</h4>
                <div className="c-white-rectangle__container-iconText"><AiOutlineCalendar className="c-white-rectangle__perosnal-data--icons"/><p className="c-white-rectangle__perosnal-data--text">{candidate.age} años</p></div>
                <div className="c-white-rectangle__container-iconText"><HiOutlineLocationMarker className="c-white-rectangle__perosnal-data--icons"/><p className="c-white-rectangle__perosnal-data--text">{candidate.city}</p></div>
                <div className="c-white-rectangle__container-iconText"><FiMail className="c-white-rectangle__perosnal-data--icons"/><p className="c-white-rectangle__perosnal-data--text">{candidate.email}</p></div>
                <div className="c-white-rectangle__container-iconText"><FiPhone className="c-white-rectangle__perosnal-data--icons"/><p className="c-white-rectangle__perosnal-data--text">{candidate.phone}</p></div>
            </div>
            
            <div className="c-white-rectangle__key-words">
                <h4 className="c-white-rectangle__subtitles">Palabras clave del perfil</h4>
                {candidate.keyWords && <div className="c-white-rectangle__key-words--box">
                    <p className="c-white-rectangle__key-words--box--text" style={candidate.keyWords.creativity ? {"backgroundColor": "#00b3cd"} : {"backgroundColor": "#d8eef8","color":"#0b4f6e"}}>Creatividad</p>
                    <p className="c-white-rectangle__key-words--box--text" style={candidate.keyWords.uxui ? {"backgroundColor": "#00b3cd"} : {"backgroundColor": "#d8eef8","color":"#0b4f6e"}}>UX/UI</p>
                    <p className="c-white-rectangle__key-words--box--text" style={candidate.keyWords.sketch ? {"backgroundColor": "#00b3cd"} : {"backgroundColor": "#d8eef8","color":"#0b4f6e"}}>Sketch</p>
                    <p className="c-white-rectangle__key-words--box--text" style={candidate.keyWords.projects ? {"backgroundColor": "#00b3cd"} : {"backgroundColor": "#d8eef8","color":"#0b4f6e"}}>Proyectos</p>
                    <p className="c-white-rectangle__key-words--box--text" style={candidate.keyWords.empathy ? {"backgroundColor": "#00b3cd"} : {"backgroundColor": "#d8eef8","color":"#0b4f6e"}}>Empatía</p>
                    <p className="c-white-rectangle__key-words--box--text" style={candidate.keyWords.html ? {"backgroundColor": "#00b3cd"} : {"backgroundColor": "#d8eef8","color":"#0b4f6e"}}>HTML</p>
                </div>}
            </div>

            <div className="c-white-rectangle__academic">
                <h4 className="c-white-rectangle__subtitles">Formación académica</h4>
                <div className="c-white-rectangle__container-iconText">
                    <p className="c-white-rectangle__academic--degree">Estudios:</p>
                    <p className="c-white-rectangle__academic--career">{candidate.studies}</p>
                </div>
            </div>
            
        </div> }
            </div>
            
            </Section>
        </>
    );
}
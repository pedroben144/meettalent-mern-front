import React, { useContext } from 'react';
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


export function PeopleDetailPage(props) {

    const {setMainStyle} = useContext(MainContext);
    setMainStyle("blue");

    return (
        <>
            <Header goBack className="header">Candidatos</Header>
            <Section>
            <div className="c-white-rectangle">
                <img className="b-avatarImg  b-avatarImg--big b-avatarImg--absolute c-white-rectangle__image" src="/assets/images/logo-text.png" alt=""/>
                <div className="c-white-rectangle__top">
                    <h1 className="c-white-rectangle__top--h1">Fatima Ramos</h1>
                    <h3 className="c-white-rectangle__top--h3">Diseñadora Web</h3>
                    <FaTwitter className="c-white-rectangle__top--icons"/> 
                    <FiInstagram className="c-white-rectangle__top--icons"/> 
                    <GrFacebookOption className="c-white-rectangle__top--icons"/>
                </div>
                
                <hr className="c-white-rectangle__rule"/>

                <div className="c-white-rectangle__perosnal-data">
                    <h4 className="c-white-rectangle__subtitles">Datos personales</h4>
                    <div style={{"display":"flex"}}><AiOutlineCalendar className="c-white-rectangle__perosnal-data--icons"/><p className="c-white-rectangle__perosnal-data--text">30 años</p></div>
                    <div style={{"display":"flex"}}><HiOutlineLocationMarker className="c-white-rectangle__perosnal-data--icons"/><p className="c-white-rectangle__perosnal-data--text">Madrid, capital, 28004</p></div>
                    <div style={{"display":"flex"}}><FiMail className="c-white-rectangle__perosnal-data--icons"/><p className="c-white-rectangle__perosnal-data--text">fatimaramos@gmail.com</p></div>
                    <div style={{"display":"flex"}}><FiPhone className="c-white-rectangle__perosnal-data--icons"/><p className="c-white-rectangle__perosnal-data--text">655-555-000</p></div>
                </div>
                
                <div className="c-white-rectangle__key-words">
                    <h4 className="c-white-rectangle__subtitles">Palabras clave del perfil</h4>
                    <div className="c-white-rectangle__key-words--box">
                        <p className="c-white-rectangle__key-words--box--text">UX/UI</p>
                    </div>
                </div>

                <div className="c-white-rectangle__academic">
                    <h4 className="c-white-rectangle__subtitles">Formación académica</h4>
                    <div style={{"display":"flex"}}>
                        <p className="c-white-rectangle__academic--degree">Master</p>
                        <p className="c-white-rectangle__academic--career">Diseno web CEI: escuela de diseno</p>
                    </div>
                </div>
                
            </div>
            </Section>
        </>
    );
}
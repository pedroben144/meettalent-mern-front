import React, { useContext, useEffect } from "react";
import { FiFileText, FiVideo } from 'react-icons/fi';

import { MainContext } from "../../contexts/MainContext";
import Header from "../../containers/Header";
import Section from "../../containers/Section";
import { FooterContext } from "../../contexts/FooterContext";
import { useHistory } from "react-router";
import Rectangle from "../../containers/Rectangle";
import MainWButton from "../../components/MainBtn";

export function CreatePage() {

    const { setMainStyle } = useContext(MainContext);
    const { setFooter } = useContext(FooterContext);

    let history = useHistory();

    const goToJob = () => {
        history.push('/create/job');
    }

    useEffect(() => setMainStyle("blue-rectangle"), [setMainStyle]);
    useEffect(() => setFooter(true), [setFooter]);

    return (
        <>
        <Header>
            <img className="header__logo header__logo--opaque" src="/assets/images/logo-blue.png" alt="logo" />
        
        </Header>
        <Section>
            <Rectangle blue active={true}>
                <div className="create">
                    <div className="create__icon"><FiFileText /></div>
                    <MainWButton fn={goToJob}>Crear oferta</MainWButton>
                </div>
                <div className="create">
                    <div className="create__icon"><FiVideo /></div>
                    <MainWButton>Crear prueba</MainWButton>
                </div>
            </Rectangle>
        </Section>
        </>
    );
}

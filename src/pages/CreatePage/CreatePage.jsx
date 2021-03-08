import React, { useContext, useEffect, useState } from "react";

import { MainContext } from "../../contexts/MainContext";
import Header from "../../containers/Header";
import Section from "../../containers/Section";
import { FooterContext } from "../../contexts/FooterContext";
import { useHistory } from "react-router";
import Rectangle from "../../containers/Rectangle";

export function CreatePage() {

    const { setMainStyle } = useContext(MainContext);
    const { setFooter } = useContext(FooterContext);

    let history = useHistory();


    useEffect(() => setMainStyle("white"), [setMainStyle]);
    useEffect(() => setFooter(true), [setFooter]);

    return (
        <>
        <Header>
            <img className="header__logo header__logo--opaque" src="/assets/images/logo-blue.png" alt="logo" />
        
        </Header>
        <Section>
            <Rectangle blue active={true}>
            </Rectangle>
        </Section>
        </>
    );
}

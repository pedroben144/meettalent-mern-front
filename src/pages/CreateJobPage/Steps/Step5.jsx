/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react';
import Header from '../../../containers/Header';
import Section from '../../../containers/Section';
import { MainContext } from '../../../contexts/MainContext';
import EmploymentIcons from '../components/EmploymentIcons';
import RoundBtn from '../../../components/RoundBtn';
import SocialIcons from '../components/SocialIcons';
import MainWButton from '../../../components/MainBtn';

export default function Step5 (props) {
    const {setMainStyle} = useContext(MainContext);
    

    const changeStep = () => {
        props.changeStep();
    }

    useEffect(()=>{
        setMainStyle("bottom");
    },[]);


    return(
        <>
            <Header goBack fn={props.goBackPage}>Multiposting</Header>
            <Section>
                <EmploymentIcons/>  
                <RoundBtn plusBig/>
                <SocialIcons/>
                <MainWButton fn={changeStep}>Continuar</MainWButton>
            </Section>
        

        </>
    )
}
import React, { useContext } from 'react';
import Header from '../../../containers/Header';
import Section from '../../../containers/Section';
import { MainContext } from '../../../contexts/MainContext';
import EmploymentIcons from '../components/EmploymentIcons';
import RoundBtn from '../../../components/RoundBtn';
import SocialIcons from '../components/SocialIcons';
import MainWButton from '../../../components/MainBtn';

export default function Step5 (props) {
    const {setMainStyle} = useContext(MainContext);
    setMainStyle('bottom');

    const changeStep = () => {
        props.changeStep();
    }


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
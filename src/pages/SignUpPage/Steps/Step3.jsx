import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import MainWButton from '../../../components/MainBtn';
import Section from '../../../containers/Section';
import { MainContext } from '../../../contexts/MainContext';



export default function Step3() {

    const {setMainStyle} = useContext(MainContext);
    useEffect(() => setMainStyle("blue"), [setMainStyle]);

    let history = useHistory();

    const goBack = () => {
        history.push('/login')
    }

    return( 
        <>
            <Section className="register-step3-container">
                
                    <img className="register-step3-container__image" src="assets/images/register-step3.jpeg" alt="register-step3.jpeg"/>
                    <h1 className="register-step3-container__h1">¡ Enhorabuena !</h1>
                    <p className="register-step3-container__p1">Acabas de registrarte en</p>
                    <p className="register-step3-container__p2">meettalent</p>

                
                    <MainWButton white fn={goBack}>Comenzar</MainWButton>
            </Section>
        </>
    )
}
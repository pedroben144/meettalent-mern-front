/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react';
import MainWButton from '../../../components/MainBtn';
import Section from '../../../containers/Section';
import { MainContext } from '../../../contexts/MainContext';

export default function Step7 (props) {
    const {setMainStyle} = useContext(MainContext);
    
    useEffect(()=>{
        setMainStyle('blue');
    },[]);

    return(
        <>
            <Section>
                <div className="c-createJob-step7__container">
                    <img className="c-createJob-step7__img"  src="/assets/images/createJob-step7.jpeg" alt=""/>
                    <h2 className="c-createJob-step7__h2">¡ Enhorabuena !</h2>
                    <p className="c-createJob-step7__p">Acabas de publicar una oferta</p>
                    <MainWButton fn={props.fn}>Ver oferta publicada</MainWButton>
                </div>
            </Section>
        </>
    )
}
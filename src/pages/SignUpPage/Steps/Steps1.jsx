import React, { useContext } from 'react';
import Header from '../../../containers/Header';
import Section from '../../../containers/Section';
import { MainContext } from '../../../contexts/MainContext';



export default function Step1(){
    const {setMainStyle} = useContext(MainContext);
    setMainStyle("white");

    return( 
        <>
            <Header goBack>Crear cuenta</Header>
            <Section>
            

            </Section>
        </>
        
    )
}
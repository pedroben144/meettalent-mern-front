import React, { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import MainWButton from '../../../components/MainBtn';
import Header from '../../../containers/Header';
import Section from '../../../containers/Section';
import { MainContext } from '../../../contexts/MainContext';
import { IconContainer } from '../components/IconContainer';





export default function Step1(props){
    const {register, handleSubmit, errors} = useForm()

    const {setMainStyle} = useContext(MainContext);
    useEffect(() => setMainStyle("bottom"), [setMainStyle]);

    const doSubmit = (data) => {
        props.setMail(data.email);
        props.changeStep();
    }

    return( 
        <>
            <Header goBack fn = {props.goBackPage}>Crear cuenta</Header>
            <Section>
                <IconContainer/>
                <form className="formStep1 formStep1__text" >
                    <label><p>¿Tienes otro correo electrónico?</p> 
                    <input className="input input--white" type="email" name="email" ref={register({required:true})}  placeholder="Correo electrónico"/>
                    </label>
                    {errors.email && <span className="formStep1__errorText">Email es obligatorio</span>}
                </form>
                <MainWButton bottom fn={handleSubmit(doSubmit)}>Continuar</MainWButton>
            </Section>
        </>
        
    )
}
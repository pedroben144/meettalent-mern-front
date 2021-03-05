import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import MainWButton from '../../../components/MainBtn';
import Header from '../../../containers/Header';
import Section from '../../../containers/Section';
import { MainContext } from '../../../contexts/MainContext';
import { IconContainer } from '../components/IconContainer';





export default function Step1(props){
    const {register, handleSubmit,errors} = useForm()

    const {setMainStyle} = useContext(MainContext);
    setMainStyle("white");

    const doSubmit = (data) => {
        console.log(data);
        props.changeStep();
    }

    return( 
        <>
            <Header goBack fn = {props.goBackPage}>Crear cuenta</Header>
            <Section>
                <IconContainer/>
                <form className="formStep1 formStep1__text" >
                    <label><p>¿Tienes otro correo electrónico?</p> 
                    <input className="input input--white" type="email" name="email" ref={register}  placeholder="Correo electrónico"/>
                    </label>
                    {errors.email && <span>Email is required</span>}
                </form>
                <MainWButton blue fn={handleSubmit(doSubmit)}>Continuar</MainWButton>
                
                
                
            

            </Section>
        </>
        
    )
}
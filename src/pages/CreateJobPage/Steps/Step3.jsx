/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from "react";
import Header from "../../../containers/Header";
import Section from "../../../containers/Section";
import { MainContext } from "../../../contexts/MainContext";
import MainWButton from "../../../components/MainBtn";
import { useForm } from "react-hook-form";
import { FiChevronDown } from "react-icons/fi";
import { CreateJobContext } from "../../../contexts/CreateJobContext";

export default function Step3(props) {

    const {register, handleSubmit} = useForm();

    const {formData,setFormData} = useContext(CreateJobContext);

    const doSubmit = (data) => {
        const newFormData = {...formData, ...data};
        setFormData(newFormData);
        props.changeStep();
    }


    const {setMainStyle} = useContext(MainContext);
    useEffect(()=>{
        setMainStyle("bottom");
    },[]);

    

    return (
        <>

            <Header goBack fn={props.goBackPage}>Descripción de la oferta     
            </Header>
            <Section>
                
                <form className="c-createJob-step3__form">
                <label className="c-createJob-step3__label">
                    <select className="input input--white c-createJob-step3__input" type="text" name="location" ref={register}>
                        <option disable defaultValue="Ciudad">Ciudad</option>
                        <option value="Madrid">Madrid</option>
                        <option value="Barcelona">Barcelona</option>
                        <option value="Valencia">Valencia</option>
                        <option value="Sevilla">Sevilla</option>
                        <option value="Zaragoza">Zaragoza</option>
                        <option value="Malaga">Malaga</option>
                        <option value="Murcia">Murcia</option>
                        <option value="Munich">Munich</option>
                        <option value="Frankfurt">Frankfurt</option>
                        <option value="Berlin">Berlin</option>
                        <option value="Londres">Londres</option>
                        <option value="Manchester">Manchester</option>
                        <option value="Lisboa">Lisboa</option>
                        <option value="París">París</option>

                    </select>
                    <FiChevronDown className="c-createJob-step3__icon-select-questions"/>
                </label>
                <label className="c-createJob-step3__label">
                    <select className="input input--white c-createJob-step3__input" type="text" name="country" ref={register} placeholder="Pais">
                        <option disable defaultValue="País">País</option>
                        <option value="España">España</option>
                        <option value="Portugal">Portugal</option>
                        <option value="Francia">Francia</option>
                        <option value="Alemania">Alemania</option>
                        <option value="Inglaterra">Inglaterra</option>
                    </select>
                    <FiChevronDown className="c-createJob-step3__icon-select-questions"/>
                </label>
                <label className="c-createJob-step3__label">
                    <select className="input input--white c-createJob-step3__input" type="text" name="availabilityRequired" ref={register} placeholder="Disponibilidad">
                        <option disable defaultValue="Disponibilidad">Disponibilidad</option>
                        <option value="Disponibilidad para Incorporarse">Disponibilidad para Incorporarse</option>
                        <option value="Disponibilidad Horaria">Disponibilidad Horaria</option>
                        <option value="Disponibilidad para Viajar">Disponibilidad para Viajar</option>
                        <option value="Disponibilidad para Reubicarse">Disponibilidad para Reubicarse</option>
                    </select>
                    <FiChevronDown className="c-createJob-step3__icon-select-questions"/>
                </label>
                    <hr className="c-createJob-step3__rule"/>
                    
                    <p className="c-createJob-step3__text">Condiciones</p>

                <label className="c-createJob-step3__label">
                    <select className="input input--white c-createJob-step3__input" type="text" name="salary" ref={register}>
                        <option disable defaultValue="Salario">Salario</option>
                        <option value="18.000€">18.000€</option>
                        <option value="20.000€">20.000€</option>
                        <option value="22.000€">22.000€</option>
                        <option value="25.000€">25.000€</option>
                        <option value="28.000€">28.000€</option>
                        <option value="30.000€">30.000€</option>
                        <option value="35.000€">35.000€</option>
                        <option value="40.000€">40.000€</option>
                    </select>
                    <FiChevronDown className="c-createJob-step3__icon-select-questions"/>
                </label>
                <label className="c-createJob-step3__label">
                    <select className="input input--white c-createJob-step3__input" type="text" name="workingDay" ref={register} placeholder="Tipo de jornada">
                        <option disable defaultValue="Tipo de jornada">Tipo de jornada</option>
                        <option value="Jornada laboral completa">Jornada laboral completa</option>
                        <option value="Jornada laboral a tiempo parcial">Jornada laboral a tiempo parcial</option>
                        <option value=" Jornada laboral parcial por horas"> Jornada laboral parcial por horas</option>
                        <option value=" Jornada de trabajo reducida"> Jornada de trabajo reducida</option>
                        <option value="Jornada de trabajo partida">Jornada de trabajo partida</option>
                        <option value=" Jornada de trabajo continua"> Jornada de trabajo continua</option>
                        <option value="Jornada de trabajo nocturna">Jornada de trabajo nocturna</option>
                        <option value="Jornada laboral a turnos">Jornada laboral a turnos</option>
                        <option value="Contrato para festivos">Contrato para festivos</option>
                    </select>
                    <FiChevronDown className="c-createJob-step3__icon-select-questions"/>
                </label>
                <label className="c-createJob-step3__label">
                    <select className="input input--white c-createJob-step3__input" type="text" name="contractType" ref={register} placeholder="Tipo de contrato">
                        <option disable defaultValue="Tipo de contrato">Tipo de contrato</option>
                        <option value="Contrato indefinido">Contrato indefinido</option>
                        <option value="Contrato temporal">Contrato temporal</option>
                        <option value="Contrato para la formación y aprendizaje">Contrato para la formación y aprendizaje</option>
                        <option value="Contrato de prácticas">Contrato de prácticas</option>
                    </select>
                    <FiChevronDown className="c-createJob-step3__icon-select-questions"/>
                </label>
                </form>
                
                <MainWButton fn={handleSubmit(doSubmit)}>Comenzar</MainWButton>
                
            </Section>
        </>
    );
}
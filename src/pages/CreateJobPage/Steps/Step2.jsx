import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import MainWButton from '../../../components/MainBtn';
import Header from '../../../containers/Header';
import Section from '../../../containers/Section';
import { MainContext } from '../../../contexts/MainContext';
import { AiOutlineEdit } from "react-icons/ai";
import { FiChevronDown } from "react-icons/fi";
import { CreateJobContext } from '../../../contexts/CreateJobContext';


export default function Step2(props){
    const {register,handleSubmit} = useForm();

    const {setMainStyle} = useContext(MainContext);
    setMainStyle("bottom");

    const {formData,setFormData} = useContext(CreateJobContext);

    const doSubmit = (data) => {
        const newFormData = {...formData, ...data};
        setFormData(newFormData);
        props.changeStep();
        console.log(newFormData);
    }

    const countCharacters = (e) =>{
        const counter = document.getElementById('counter');
        const target = e.target;
        const longitudAct = target.value.length;
        counter.innerHTML = `${longitudAct}/450`;


    }
 





    return(
        <>
            <Header goBack fn={props.goBackPage}>Descripción de la oferta</Header>
            <Section >
            <form className="c-createJob-step2__form">
                <label className="c-createJob-step2__label">
                    <select className="input input--white c-createJob-step2__select" type="select" name="vacancies" ref={register({required:true})}>
                        <option disable defaultValue>Nº de vacantes</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                    <FiChevronDown className="c-createJob-step2__icon-select"/>

                </label>
                <label className="c-createJob-step2__label" >
                    <select className="input input--white c-createJob-step2__select" type="select" name="language" ref={register}>
                        <option disable defaultValue>Idioma</option>
                        <option value="Español">Español</option>
                        <option value="Ingles">Ingles</option>
                        <option value="Alemán">Alemán</option>
                        <option value="Chino">Chino</option>
                    </select>
                    <FiChevronDown className="c-createJob-step2__icon-select"/>

                </label>
                <label className="c-createJob-step2__label">
                    <select className="input input--white c-createJob-step2__select" type="select" name="sector" ref={register}>
                        <option disable defaultValue>Sector</option>
                        <option value="Tecnológico">Tecnológico</option>
                        <option value="Diseño">Diseño</option>
                        <option value="Comunicación">Comunicación</option>
                        <option value="Recursos humanos">Recursos humanos</option>
                    </select>
                    <FiChevronDown className="c-createJob-step2__icon-select"/>

                </label>
                
                <label className="c-createJob-step2__label">
                    <select className="input input--white c-createJob-step2__select" type="select" name="training" ref={register}>
                        <option disable defaultValue>Formación</option>
                        <option value="Licenciatura en diseño">Licenciatura en diseño</option>
                        <option value="Ingeniería informática">Ingeniería informática</option>
                        <option value="Licenciatura Comunicación audiovisual">Licenciatura Comunicación audiovisual</option>
                        <option value="Desarrollador Fullstack">Desarrollador Fullstack</option>
                    </select>
                    <FiChevronDown className="c-createJob-step2__icon-select"/>
                </label>

                <label className="c-createJob-step2__label" >
                    <p className="c-createJob-step2__label-text">Descripción de la oferta</p><AiOutlineEdit className="c-createJob-step2__icon-edit"/>
                    <textarea className="c-createJob-step2__textarea" id="textarea" name="description" ref={register({maxLength:450})} placeholder="Descripción..." onInput={countCharacters} />
                    <div className="c-createJob-step2__counter" id="counter"></div>
                </label>
            </form>
            <MainWButton fn={handleSubmit(doSubmit)}>Continuar</MainWButton>

            </Section>
            
        </>
    )
}
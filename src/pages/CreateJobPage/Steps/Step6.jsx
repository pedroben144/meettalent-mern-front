import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import Header from '../../../containers/Header';
import Section from '../../../containers/Section';
import { MainContext } from '../../../contexts/MainContext';

import { FiChevronDown } from "react-icons/fi";
import { AiOutlineEdit } from "react-icons/ai";
import MainWButton from '../../../components/MainBtn';
import { CreateJobContext } from '../../../contexts/CreateJobContext';



export default function Step6 (props) {

    const {register,handleSubmit} = useForm();
    const {setMainStyle} = useContext(MainContext);
    setMainStyle('bottom');

    const {formData,setFormData} = useContext(CreateJobContext);

    const doSubmit = (data) => {
        const newFormData = {...formData, ...data};
        setFormData(newFormData);
        console.log(newFormData);
        props.changeStep();
    }

    const countCharacters = (e) =>{
        const counter = document.getElementById('counter');
        const target = e.target;
        const longitudAct = target.value.length;
        counter.innerHTML = `${longitudAct}/450`;


    }

    return(
        <>
            <Header goBack fn={props.goBackPage}>Confirmación</Header>
            <Section>
                <form className="c-createJob-step6__form" >
                    <label className="c-createJob-step6__label" >
                        <h5 className="c-createJob-step6__h5">Titulo de la oferta</h5>
                        <select className="input input--white c-createJob-step6__select" type="select" name="jobTitle" ref={register({required:true})}>
                            <option  defaultValue={formData.jobTitle}>{formData.jobTitle}</option>
                            <option value="Administrativo">Administrativo</option>
                            <option value="Project Manager">Project Manager</option>
                            <option value="Programador">Programador</option>
                            <option value="Especialista en marketing digital">Especialista en marketing digital</option>
                        </select>
                        <FiChevronDown className="c-createJob-step6__icon-select"/>

                    </label>
                    
                    <label className="c-createJob-step6__label" >
                        <h5 className="c-createJob-step6__h5">Nº de vacantes</h5>
                        <select className="input input--white c-createJob-step6__select" type="select" name="vacancies" ref={register({required:true})}>
                            <option  defaultValue={formData.vacancies}>{formData.vacancies}</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                        <FiChevronDown className="c-createJob-step6__icon-select"/>

                    </label>
                    
                    <label className="c-createJob-step6__label" >
                        <h5 className="c-createJob-step6__h5">Idioma</h5>
                        <select className="input input--white c-createJob-step6__select" type="select" name="language" ref={register}>
                            <option disable defaultValue={formData.language}>{formData.language}</option>
                            <option value="Español">Español</option>
                            <option value="Ingles">Ingles</option>
                            <option value="Aleman">Aleman</option>
                            <option value="Chino">Chino</option>
                        </select>
                        <FiChevronDown className="c-createJob-step6__icon-select"/>

                    </label>
                    
                    <label className="c-createJob-step6__label" >
                        <h5 className="c-createJob-step6__h5">Sector</h5>
                        <select className="input input--white c-createJob-step6__select" type="select" name="sector" ref={register}>
                            <option defaultValue={formData.sector}>{formData.sector}</option>
                            <option value="Tecnológico">Tecnológico</option>
                            <option value="Diseño">Diseño</option>
                            <option value="Comunicación">Comunicación</option>
                            <option value="Recursos humanos">Recursos humanos</option>
                        </select>
                        <FiChevronDown className="c-createJob-step6__icon-select"/>

                    </label>
                    
                    <label className="c-createJob-step6__label" >
                        <h5 className="c-createJob-step6__h5">Formación</h5>
                        <select className="input input--white c-createJob-step6__select" type="select" name="training" ref={register}>
                            <option defaultValue={formData.training}>{formData.training}</option>
                            <option value="Licenciatura en diseño">Licenciatura en diseño</option>
                            <option value="Ingeniería informática">Ingeniería informática</option>
                            <option value="Licenciatura Comunicación audiovisual">Licenciatura Comunicación audiovisual</option>
                            <option value="Desarrollador FullStack">Desarrollador FullStack</option>
                        </select>
                        <FiChevronDown className="c-createJob-step6__icon-select"/>

                    </label>
                    
                    <label className="c-createJob-step6__label c-createJob-step6__label--margin" >
                        <h5 className="c-createJob-step6__h5">Descripción de la oferta</h5><AiOutlineEdit className="c-createJob-step6__icon-edit"/>
                        <textarea className="c-createJob-step6__textarea" id="textarea" name="description" defaultValue={formData.description} ref={register({maxLength:450})} placeholder="Descripción..." onInput={countCharacters} />
                        <div className="c-createJob-step6__counter" id="counter"></div>
                    </label>
                    
                </form>
                <MainWButton fn={handleSubmit(doSubmit)}>Confirmar</MainWButton>

            </Section>

        </>
    )
}
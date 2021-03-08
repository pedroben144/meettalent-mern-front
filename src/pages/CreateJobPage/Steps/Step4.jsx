import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import Header from '../../../containers/Header';
import Section from '../../../containers/Section';
import { MainContext } from '../../../contexts/MainContext';

import { AiOutlineEdit } from "react-icons/ai";
import { FiChevronDown } from "react-icons/fi";
import MainWButton from '../../../components/MainBtn';


export default function Step4(props){
    const {register,handleSubmit} = useForm();

    const {setMainStyle} = useContext(MainContext);
    setMainStyle('bottom');

    const doSubmit = (data) => {
        console.log(data);
    }

    const countCharacters = (e) =>{
        const contador = document.getElementById('contador');
        const target = e.target;
        const longitudAct = target.value.length;
        contador.innerHTML = `${longitudAct}/450`;


    }


    return(
        <>
            <Header goBack> Descripción de la oferta</Header>
            <Section>
                <form className="c-createJob-step4__form" >
                    <h5 className="c-createJob-step4__h5">Requisitos de candidato</h5>
                    <label className="c-createJob-step4__label" >
                        <p className="c-createJob-step4__label-text">Descripción de los requisitos</p><AiOutlineEdit className="c-createJob-step4__icon-edit"/>
                        <textarea className="c-createJob-step4__textarea" id="textarea" name="description" ref={register({maxLength:450})} placeholder="Descripción..." onInput={countCharacters} />
                        <div className="c-createJob-step4__counter" id="contador"></div>
                    </label>
                    <label className="c-createJob-step4__label c-createJob-step4__label--border" >
                        <select className="input input--white c-createJob-step4__select-questions" type="select" name="questions" ref={register}>
                            <option disable defaultValue>Añadir preguntas</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                        <FiChevronDown className="c-createJob-step4__icon-select-questions"/>
                    </label>
                    <h5 className="c-createJob-step4__h5 c-createJob-step4__h5--key-word">Codificaciones internas</h5>
                    <label className="c-createJob-step4__label" >
                    <select className="input input--white c-createJob-step4__select" type="select" name="keyWord" ref={register}>
                        <option disable defaultValue>Añadir palabras clave</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                    <FiChevronDown className="c-createJob-step4__icon-select"/>

                </label>
                </form>
                <MainWButton fn={handleSubmit(doSubmit)}>Continuar</MainWButton>
            </Section>

        </> 
    )
}
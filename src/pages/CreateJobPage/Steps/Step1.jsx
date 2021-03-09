import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import MainWButton from '../../../components/MainBtn';
import Header from '../../../containers/Header';
import Rectangle from '../../../containers/Rectangle';
import Section from '../../../containers/Section';
import { MainContext } from '../../../contexts/MainContext';
import { AiOutlineEdit } from "react-icons/ai";
import { CreateJobContext } from '../../../contexts/CreateJobContext';


export default function Step1(props){
    const {register,handleSubmit} = useForm();

    const {setMainStyle} = useContext(MainContext);
    setMainStyle('blue-rectangle');

    const{setFormData} = useContext(CreateJobContext)

    const doSubmit = (data) => {
        console.log(data);
        props.changeStep();
        setFormData(data);
    }


    return(
        <>
            <Header goBack>Descripción de la oferta</Header>
            <Section>
                <Rectangle blue>
                    <ul className="c-createJob-step1__ul">
                        <p>Duplicar oferta</p> 

                        <li className="input input--blue c-createJob-step1__input">Administrativo</li>
                        <li className="input input--blue c-createJob-step1__input">Project manager</li>
                        <li className="input input--blue c-createJob-step1__input">Programador</li>
                        <li className="input input--blue c-createJob-step1__input">Especialista en marketing digital</li>
                    </ul>
                    <form className="c-createJob-step1__form" >
                        <label className="c-createJob-step1__label">
                        <p className="c-createJob-step1__label-text">Titulo de la nueva oferta</p><AiOutlineEdit className="c-createJob-step1__icon"/>
                            <input className="input input--blue c-createJob-step1__input c-createJob-step1__input--grey"  type="text" name="title" ref={register({required:true})} placeholder="Escribe el título..." />
                        </label>
                        <Link to="/" className="c-createJob-step1__link" ><p className="c-createJob-step1__link-text">¿Como crear un título efectivo?</p></Link>
                    </form>
                    <MainWButton fn={handleSubmit(doSubmit)}>Comenzar</MainWButton>

                </Rectangle>
            </Section>
        </>
    );
}
import React, { useContext, useState, useEffect } from 'react';
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
    const {setFormData} = useContext(CreateJobContext);

    const [title,setTitle] = useState();
    const [rectangle, setRectangle] = useState(false);

    

    const doSubmit = (data) => {
        console.log(data);
        props.changeStep();
        setFormData(data);
        console.log(props.offers)
    
    }

    const updateTitle = (e) => {
        setTitle(e.target.value);
    }


    useEffect(()=>{
        setMainStyle('blue-rectangle');
        setRectangle(true);
    },[]);

    return(
        <>
            <Header goBack>Descripción de la oferta</Header>
            <Section>
                <Rectangle blue active={rectangle}>
                    <ul className="c-createJob-step1__ul">
                        <p>Duplicar oferta</p> 
                        {props.offers.map((offer,i) =>
                            
                            <input type="text" className="input input--blue c-createJob-step1__input" key={i} onClick={(e)=> {updateTitle(e)}} value={offer.title} readOnly/> 
                        )}
                    </ul>
                    <form className="c-createJob-step1__form" >
                        <label className="c-createJob-step1__label">
                        <p className="c-createJob-step1__label-text">Titulo de la nueva oferta</p>
                            <input className="input input--blue c-createJob-step1__input c-createJob-step1__input--grey"  type="text" name="title" ref={register({required:true})} placeholder="Escribe el título..." defaultValue={ title } onChange={(e)=> {updateTitle(e)}}/>
                        </label>
                        <Link to="/" className="c-createJob-step1__link" ><p className="c-createJob-step1__link-text">¿Como crear un título efectivo?</p></Link>
                    </form>
                    <MainWButton fn={handleSubmit(doSubmit)}>Comenzar</MainWButton>

                </Rectangle>
            </Section>
        </>
    );
}
import React, { useContext } from 'react';
import Header from '../../../containers/Header';
import Section from '../../../containers/Section';
import { useForm } from 'react-hook-form';
import MainWButton from '../../../components/MainBtn';
import { MainContext } from '../../../contexts/MainContext';
import { Link } from 'react-router-dom';
import { FiEye } from "react-icons/fi";

export default function Step2(props){
    const {register,handleSubmit,reset,errors} = useForm();

    const {setMainStyle} = useContext(MainContext);
    setMainStyle("bottom");

    const doSubmit = (data) => {
        console.log(data);
        reset();
        props.changeStep();
    }

    

    const showPassword = () =>{

        const showPass = document.querySelector('#password1');
        const showPass2 = document.querySelector('#password2');
        console.log(showPass)

        if(showPass.type === "password"){
            showPass.type = "text";
        }else{
            showPass.type = "password";
        }
        if(showPass2.type === "password"){
            showPass2.type = "text";
        }else{
            showPass2.type = "password";
        }

        


    }


    return(
        <>
            <Header goBack fn={props.goBackPage}>Crear cuenta</Header>
            <Section>
                <form className="formStep2 formStep2__text" >
                    <label><p className="formStep2__labelText" >Nombre de la empresa</p>
                        <input className="input input--white" type="text" name="companysName" placeholder="Nombre de la empresa" ref={register({required:true,minLength:4, maxLength:30})}/>                       
                    </label>
                    {errors.companysName && <span className="formStep2__errorText">Nombre de la empresa obligatorio</span>}
                    <label><p className="formStep2__labelText">NIF</p>
                        <input className="input input--white" type="text" name="nif" placeholder="G-00000000" ref={register({required:true,minLength:9,maxLength:9})}/>
                    </label>
                    {errors.nif && <span className="formStep2__errorText">NIF obligatorio</span>}
                    <label><p className="formStep2__labelText">Email ID</p>
                        <input className="input input--white" type="email" name="email" placeholder="Email ID"  ref={register({required:true})}/>
                    </label>
                    {errors.email && <span className="formStep2__errorText">Email obligatorio</span>}
                    <label className="formStep2__label"><p className="formStep2__labelText">Contraseña</p>
                        <input className="input input--white" type="password" name="password1" id="password1" placeholder="Contraseña" ref={register({required:true})}/>
                        <span className="formStep2__span" onClick={showPassword}><FiEye/></span>
                    </label>
                    {errors.password1 && <span className="formStep2__errorText">La contraseña es obligatoria</span>}
                    <label className="formStep2__label"><p className="formStep2__labelText">Confirmar contraseña</p>
                        <input className="input input--white" type="password" name="password2" id="password2" placeholder="Contraseña" ref={register({required:true})}/>
                        <span className="formStep2__span" onClick={showPassword}><FiEye/></span>
                    </label>
                    {errors.password2 && <span className="formStep2__errorText">Repetir contraseña</span>}
                    <div className="formStep2__containerCheckbox">
                    
                        
                        <input className="formStep2__checkbox"  type="checkbox" name="accept"  ref={register({required:true})}></input>
                        <p className="formStep2__checkbox--text">Al crear una cuenta, acepta automáticamente todos los <Link to="/" className="formStep2__link">términos y condiciones</Link> relacionados con <Link to="/" className="formStep2__link">meeTTalent</Link></p>
                        
                    </div>
                    
                </form>
            <MainWButton blue fn={handleSubmit(doSubmit)}>Continuar</MainWButton>
                
            </Section>
           

        </>
    );
}
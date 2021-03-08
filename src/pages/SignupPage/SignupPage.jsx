import React, { useEffect, useState } from 'react';
import Step2 from './Steps/Step2';
import Step1 from './Steps/Steps1';
import Step3 from './Steps/Step3';
import { useHistory } from 'react-router';




export function SignUpPage(){

    let history = useHistory();

    const [actualStep,setActualStep] = useState(1);

    const changeStep = () =>{
        const newStep = actualStep + 1;
        setActualStep(newStep);
    }

    const goBackPage = () =>{
        const newStep = actualStep - 1;
        setActualStep(newStep);
    }

    const exitSignup = () => {
        history.push('/login');
    }

    const initialStep = () => {
        setActualStep(actualStep);
    }


    useEffect(initialStep,[actualStep])



    return(
        <>
            {(actualStep === 1) && <Step1 changeStep = {changeStep}  goBackPage = {exitSignup}/>}
            {(actualStep === 2) && <Step2 changeStep = {changeStep} goBackPage = {goBackPage}/>}
            {(actualStep === 3) && <Step3/>}
        </>
    )
}
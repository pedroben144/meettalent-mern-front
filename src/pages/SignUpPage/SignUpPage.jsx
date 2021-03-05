import React, { useEffect, useState } from 'react';
import Step2 from './Steps/Step2';
import Step1 from './Steps/Steps1';




export function SignUpPage(){

    const [actualStep,setActualStep] = useState(1);

    const changeStep = () =>{
        const newStep = actualStep + 1;
        setActualStep(newStep);
    }

    const goBackPage = () =>{
        const newStep = actualStep - 1;
        setActualStep(newStep);
    }

    const initialStep = () => {
        setActualStep(actualStep);
    }


    useEffect(initialStep,[actualStep])



    return(
        <>
            {(actualStep === 1) && <Step1 step={actualStep}  changeStep = {changeStep}  goBackPage = {goBackPage}/>}
            {(actualStep === 2) && <Step2 step={actualStep} changeStep = {changeStep} goBackPage = {goBackPage}/>}
          
        </>
    )
}
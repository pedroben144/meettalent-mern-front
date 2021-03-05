import React, { useState } from 'react';
import Step2 from './Steps/Step2';
import Step1 from './Steps/Steps1';




export function SignUpPage(){

    const [actualStep,setActualStep] = useState(1);

    // getStepComponent = () => {
    //     if(actualStep === 1) return <Step1 step={actualStep}/>;
    //     if(actualStep === 2) return <Step2 step={actualStep}/>;
    // }

    const changeStep = () =>{
        const newStep = actualStep + 1;
        setActualStep(newStep);
    }

    const goBackPage = () =>{
        const newStep = actualStep - 1;
        setActualStep(newStep);
    }



    return(
        <>
            {(actualStep === 1) && <Step1 step={actualStep} changeStep = {changeStep}  goBackPage = {goBackPage}/>}
            {(actualStep === 2) && <Step2 step={actualStep} changeStep = {changeStep} goBackPage = {goBackPage}/>}
          
        </>
    )
}
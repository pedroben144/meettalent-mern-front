import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Step1 from './Steps/Step1';
import Step2 from './Steps/Step2';
import Step4 from './Steps/Step4';
import Step5 from './Steps/Step5';
import Step7 from './Steps/Step7';


export default function CreateJobPage(){

    const history = useHistory();

    const [actualStep,setActualStep] = useState(1);

    const changeStep = () => {
        const newStep = actualStep + 1;
        setActualStep(newStep);
    }

    const goBackPage = () =>{
        const newStep = actualStep - 1;
        setActualStep(newStep);
    }

    const exitCreateJob = () => {
        history.push('/create');
    }

    const initialStep = () => {
        setActualStep(actualStep);
    }

    useEffect(initialStep,[actualStep]);


    return(
        <>
            
            {(actualStep === 1) && <Step1 changeStep = {changeStep}  goBackPage = {exitCreateJob}/>}
            {(actualStep === 2) && <Step2 changeStep = {changeStep}  goBackPage = {goBackPage}/>}
            {/* {(actualStep === 3) && <Step3 changeStep = {changeStep}  goBackPage = {goBackPage}/>} */}
            {(actualStep === 4) && <Step4 changeStep = {changeStep}  goBackPage = {goBackPage}/>}
            {(actualStep === 5) && <Step5 changeStep = {changeStep}  goBackPage = {goBackPage}/>}
            {/* {(actualStep === 6) && <Step6 changeStep = {changeStep}  goBackPage = {goBackPage}/>} */}
            {(actualStep === 7) && <Step7/>}

        </>
    );
}
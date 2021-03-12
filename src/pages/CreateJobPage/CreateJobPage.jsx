/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { API } from '../../api/api.consts';
import { CreateJobContext } from '../../contexts/CreateJobContext';
import { FooterContext } from '../../contexts/FooterContext';
import Step1 from './Steps/Step1';
import Step2 from './Steps/Step2';
import Step3 from './Steps/Step3';
import Step4 from './Steps/Step4';
import Step5 from './Steps/Step5';
import Step6 from './Steps/Step6';
import Step7 from './Steps/Step7';


export default function CreateJobPage(){

    const history = useHistory();

    const {setFooter} = useContext(FooterContext);
    

    const [actualStep,setActualStep] = useState(1);
    const [formData, setFormData] = useState();

    const [offers, setOffers] = useState([]);

    const getOffers = () => {
            
        const arrayOffers =[];

        API.get('offers').then((res)=>{
            
            console.log(res.data.results);
            const localId = localStorage.getItem('user');
            for (let index = 0; index < res.data.results.length; index++) {
                const element = res.data.results[index];
                if (element.companyId === localId) {
                    if(index=== res.data.results.length -4 ){
                        arrayOffers.push(element);
                    }
                    if(index=== res.data.results.length -3 ){
                        arrayOffers.push(element);
                    }
                    if(index=== res.data.results.length -2 ){
                        arrayOffers.push(element);
                    }
                    if(index=== res.data.results.length -1 ){
                        arrayOffers.push(element);
                    }
                }
                
            }
            setOffers(arrayOffers);
            
        })

        
    }



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
    
    const goToJobs = () => {
        history.push('/jobs');
    }

    const initialStep = () => {
        setActualStep(actualStep);
    }

    useEffect(initialStep,[actualStep]);
    useEffect(getOffers,[]);
    useEffect(() => setFooter(false), []);


    return(
        <>
            <CreateJobContext.Provider value={{formData, setFormData}}>
                {(actualStep === 1) && <Step1 changeStep = {changeStep}  goBackPage = {exitCreateJob} offers={offers}/>}
                {(actualStep === 2) && <Step2 changeStep = {changeStep}  goBackPage = {goBackPage}/>}
                {(actualStep === 3) && <Step3 changeStep = {changeStep}  goBackPage = {goBackPage}/>}
                {(actualStep === 4) && <Step4 changeStep = {changeStep}  goBackPage = {goBackPage}/>}
                {(actualStep === 5) && <Step5 changeStep = {changeStep}  goBackPage = {goBackPage} />}
                {(actualStep === 6) && <Step6 changeStep = {changeStep}  goBackPage = {goBackPage}/>}
                {(actualStep === 7) && <Step7 fn={goToJobs}/>}
                

            </CreateJobContext.Provider>
            
            
        </>
    );
}